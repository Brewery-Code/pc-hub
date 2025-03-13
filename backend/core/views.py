from rest_framework.generics import ListAPIView, get_object_or_404
from rest_framework.viewsets import ViewSet
from .models import *
from .serializers import *
from django.utils import translation
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny


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
        else:
            session_key = request.session.session_key
            if not session_key:
                request.session.create()
                session_key = request.session.session_key

            wishlist, _ = Wishlist.objects.get_or_create(session_id=session_key)

        wishlist.last_accessed = now()
        wishlist.save()
        return wishlist

    def list(self, request) -> Response:
        """
        Повертає список товарів у списку бажаного.

        :Returns:
            Response:
                - 200 OK: Якщо список товарів повернено успішно.
        """
        wishlist = self.get_wishlist(request)
        wishlist_items = WishlistItem.objects.filter(wishlist=wishlist)
        products = [item.product for item in wishlist_items]

        serializer = ProductWishlistSerializer(
            products, many=True, context={"request": request}
        )
        return Response(serializer.data, status=status.HTTP_200_OK)

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
        wishlist = self.get_wishlist(request)
        product_id = request.data.get("product_id")

        if not product_id:
            return Response(
                {"error": "Product ID is required"}, status=status.HTTP_400_BAD_REQUEST
            )

        product = get_object_or_404(Product, id=product_id)

        wishlist_item, created = WishlistItem.objects.get_or_create(
            wishlist=wishlist, product=product
        )

        if created:
            return Response(
                {"message": "Product added to wishlist"}, status=status.HTTP_201_CREATED
            )
        else:
            return Response(
                {"message": "Product is already in wishlist"}, status=status.HTTP_200_OK
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
        product = get_object_or_404(Product, id=pk)

        deleted, _ = WishlistItem.objects.filter(
            wishlist=wishlist, product=product
        ).delete()

        if deleted:
            return Response(
                {"message": "Product removed from wishlist"}, status=status.HTTP_200_OK
            )

        return Response(
            {"error": "Product not in wishlist"}, status=status.HTTP_404_NOT_FOUND
        )
