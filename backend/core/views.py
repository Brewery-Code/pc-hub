from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView, get_object_or_404
from rest_framework.viewsets import ViewSet
from .models import *
from .serializers import *
from django.utils import translation
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny


def get_main_image_url(request, product):
    """Повертає абсолютний URL головного зображення товару."""
    main_image = product.productimage_set.filter(is_main=True).first()
    if main_image and main_image.image:
        return request.build_absolute_uri(main_image.image.url)
    return None


class PartnerApiView(ListAPIView):
    """
    APIView для відображення списку логотипів партнерських компаній.

    Дозволені операції та HTTP-методи:
        - (GET /core/partners/): Отримати список логотипів партнерських компаній.

    Доступ:
        - Доступний для всіх користувачів (AllowAny).
    """

    queryset = Partner.objects.all()
    serializer_class = PartnerSerializer


class BannerView(ListAPIView):
    """API View для отримання списку банерів.

    Дозволені операції та HTTP-методи:
        - (GET /core/banners/) - Отримання списку всіх банерів.

    Доступ:
        - Доступний для всіх користувачів (AllowAny).
    """

    queryset = Banner.objects.all()
    serializer_class = BannerSerializer

    def get_queryset(self):
        """Активує переклад на основі заголовку 'Accept-Language'."""
        language = self.request.headers.get("Accept-Language", "en")
        translation.activate(language)
        return super().get_queryset()


class ReviewAPIView(APIView):
    """API View для роботи з відгуками.

    Дозволені операції та HTTP-методи:
        - (GET /core/reviews/) - Отримання списку всіх відгуків.
        - (POST /core/reviews/) - Створення ногово відгука.

    Доступ:
        - GET Доступний для всіх користувачів (AllowAny).
        - POST Доступний тільки для авторизованих користувачів (IsAuthenticated).
    """

    def get(self, request):
        """Отримати всі відгуки.

        Відповідь:
            - 200 OK: Успішне отримання списку відгуків.
        """
        reviews = Review.objects.filter(status=Review.Status.APPROVED)
        serializer = ReviewSerializer(reviews, many=True, context={"request": request})
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        """Створити новий відгук (але не більше одного на користувача).

        Тіло запиту:
            - "content" (str): Текст відгуку.
            - "rating" (float): Оцінка товару (наприклад, від 1.0 до 5.0).

        Відповідь:
            - 201 CREATED: Якщо відгук успішно створено.
            - 400 BAD REQUEST: Якщо користувач вже залишав відгук або дані некоректні.
            - 401 UNAUTHORIZED: Якщо користувач не авторизований.
        """
        if not request.user.is_authenticated:
            return Response(
                {"detail": "Authorization required."},
                status=status.HTTP_401_UNAUTHORIZED,
            )

        if Review.objects.filter(author=request.user).exists():
            return Response(
                {"detail": "You have already left a review."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        serializer = ReviewSerializer(data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save(author=request.user)
            return Response(
                {"detail": "You have successfully left a review."},
                status=status.HTTP_201_CREATED,
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class WishlistViewSet(ViewSet):
    """
    ViewSet для роботи зі списком бажаного (wishlist).

    Дозволені операції та HTTP-методи:
        - list (GET /wishlist/): Отримати список товарів у списку бажаного
        - create (POST /wishlist/): Додати товар до списку бажаного
        - destroy (DELETE /wishlist/{product_id}/): Видалити товар зі списку бажаного

    Робота зі списком бажаного:
        - Для авторизованих користувачів wishlist прив'язаний до облікового запису.
        - Для анонімних користувачів список бажаного зберігається на основі сесії.

    Доступ:
        - Доступний для всіх користувачів (AllowAny).
    """

    permission_classes = [AllowAny]

    def get_wishlist(self, request) -> Wishlist:
        """
        Повертає список бажаного користувача або створює його, якщо відсутній.

        - Авторизований користувач: wishlist прив'язується до облікового запису.
        - Анонімний користувач: wishlist створюється на основі сесії.

        Returns:
            Wishlist: Об'єкт списку бажаного користувача.
        """
        if request.user.is_authenticated:
            wishlist, _ = Wishlist.objects.get_or_create(user=request.user)
            return wishlist
        else:
            if settings.WISHLIST_SESSION_ID not in request.session:
                request.session[settings.WISHLIST_SESSION_ID] = {}
            return request.session[settings.WISHLIST_SESSION_ID]

    def list(self, request) -> Response:
        """
        Повертає список товарів у списку бажаного.

        :Returns:
            Response:
                - 200 OK: Якщо список товарів повернено успішно.
        """
        if request.user.is_authenticated:
            wishlist = self.get_wishlist(request)
            wishlist_items = WishlistItem.objects.filter(wishlist=wishlist)

            items = [
                {
                    "id": item.product.id,
                    "name": item.product.name,
                    "slug": item.product.slug,
                    "description": item.product.description,
                    "price": item.product.price,
                    "discounted_price": item.product.discounted_price,
                    "rating": item.product.rating,
                    "is_new": item.product.is_new(),
                    "main_image": get_main_image_url(request, item.product),
                }
                for item in wishlist_items
            ]
            response_data = {"wishlist_id": wishlist.id, "items": items}
        else:
            session_wishlist = self.get_wishlist(request)
            items = []
            for product_id_str, data in session_wishlist.items():
                try:
                    product = Product.objects.get(pk=int(product_id_str))
                    items.append(
                        {
                            "id": product.id,
                            "name": product.name,
                            "slug": product.slug,
                            "description": product.description,
                            "price": product.price,
                            "discounted_price": product.discounted_price,
                            "rating": product.rating,
                            "is_new": product.is_new(),
                            "main_image": get_main_image_url(request, product),
                        }
                    )
                except Product.DoesNotExist:
                    continue
            response_data = {
                "wishlist_id": None,
                "items": items,
            }
        return Response(response_data, status=status.HTTP_200_OK)

    def create(self, request) -> Response:
        """
        Додає товар до списку бажаного.

        :Args:
            - product_id (int): ID товару. (передається у тілі запиту)

        :Returns:
            Response:
                - 201 CREATED: Якщо товар додано до списку бажаного.
                - 200 OK: Якщо товар вже був у списку бажаного.
                - 400 BAD REQUEST: Якщо не передано ID товару.
                - 404 NOT FOUND: Якщо товар не знайдено.
        """
        product_id = request.data.get("product_id")
        if not product_id:
            return Response(
                {"error": "Product ID is required"}, status=status.HTTP_400_BAD_REQUEST
            )

        try:
            product = Product.objects.get(id=product_id)
        except Product.DoesNotExist:
            return Response(
                {"error": "Product not found"}, status=status.HTTP_404_NOT_FOUND
            )

        wishlist = self.get_wishlist(request)

        if request.user.is_authenticated:
            wishlist_item, created = WishlistItem.objects.get_or_create(
                wishlist=wishlist, product=product
            )
            if created:
                return Response(
                    {"message": "Product added to wishlist"},
                    status=status.HTTP_201_CREATED,
                )
            else:
                return Response(
                    {"message": "Product is already in wishlist"},
                    status=status.HTTP_200_OK,
                )
        else:
            product_key = str(product_id)
            if product_key in wishlist:
                return Response(
                    {"message": "Product is already in wishlist"},
                    status=status.HTTP_200_OK,
                )
            wishlist[product_key] = {}
            request.session[settings.WISHLIST_SESSION_ID] = wishlist
            return Response(
                {"message": "Product added to wishlist"},
                status=status.HTTP_201_CREATED,
            )

    def destroy(self, request, pk=None) -> Response:
        """
        Видаляє товар зі списку бажаного.

        :Args:
            - pk (int): ID товару, який потрібно видалити. (передається у URL)

        :Returns:
            Response:
                - 200 OK: Якщо товар успішно видалено.
                - 404 NOT FOUND: Якщо товар не знайдено у списку бажаного.
        """
        wishlist = self.get_wishlist(request)

        if request.user.is_authenticated:
            try:
                wishlist_item = WishlistItem.objects.get(
                    wishlist=wishlist, product_id=pk
                )
                wishlist_item.delete()
                return Response(
                    {"message": "Product removed from wishlist"},
                    status=status.HTTP_200_OK,
                )
            except WishlistItem.DoesNotExist:
                return Response(
                    {"error": "Product not in wishlist"},
                    status=status.HTTP_404_NOT_FOUND,
                )
        else:
            product_key = str(pk)
            if product_key in wishlist:
                del wishlist[product_key]
                request.session[settings.WISHLIST_SESSION_ID] = wishlist
                return Response(
                    {"message": "Product removed from wishlist"},
                    status=status.HTTP_200_OK,
                )
            else:
                return Response(
                    {"error": "Product not in wishlist"},
                    status=status.HTTP_404_NOT_FOUND,
                )
