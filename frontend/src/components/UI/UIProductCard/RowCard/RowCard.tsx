import { Link } from "react-router-dom";
import { IProduct, IWishlistProduct } from "../../../../store/types";
import styles from "./RowCard.module.css";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import UIRatingStars from "../../UIRatingStars/UIRatingStars";
import { CartIcon, ComparisonIcon, LikeIcon } from "../../../../assets/icons";
import UIButton from "../../UIButton/UIButton";
import UIProductPrice from "../../UIProductPrice/UIProductPrice";

interface ICardProps {
  product: IProduct | IWishlistProduct;
  className?: string;
  color?: "light" | "dark";
  key?: string | number;
  addProductToCart: () => void;
  toggleProductWishlist: () => void;
  isProductLiked: boolean;
}

export default function RowCard({
  product,
  className,
  color,
  key,
  addProductToCart,
  toggleProductWishlist,
  isProductLiked,
}: ICardProps) {
  const { t } = useTranslation("components");
  return (
    <Link
      key={key}
      to={`/products/${product.slug}/`}
      state={{ id: product.id }}
      className={clsx(
        styles.card,
        className,
        color === "dark" && styles.card_dark,
      )}
    >
      <div className={styles.card__left}>
        {product.is_new && (
          <div className={styles.card__new}>{t("productCard.new")}</div>
        )}
        <img
          className={styles.card__img}
          src={product?.main_image}
          alt="productIImg"
        />
      </div>
      <div className={styles.card__content}>
        <div className={styles.head}>
          <div className={styles.head__title}>{product.name}</div>
          <ComparisonIcon
            className={clsx(styles.nav__comparisonIcon, "only-mobile")}
          />
          <LikeIcon
            className={clsx(
              styles.nav__likeIcon,
              "only-mobile",
              isProductLiked && styles.nav__likeIcon_active,
            )}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleProductWishlist();
            }}
          />
          <div className={styles.head__code}>
            {t("productCard.productCode")}: {product.id}
          </div>
        </div>
        <div className={styles.card__main}>
          <div className={styles.nav}>
            <div className={styles.nav__rating}>
              <UIRatingStars rating={product.rating} />
              <div>
                {t("productCard.reviews")}: {product.rating}
              </div>
            </div>
            <ComparisonIcon
              className={clsx(styles.nav__comparisonIcon, "only-desktop")}
            />
            <LikeIcon
              className={clsx(
                styles.nav__likeIcon,
                "only-desktop",
                isProductLiked && styles.nav__likeIcon_active,
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleProductWishlist();
              }}
            />
          </div>
          <div className={styles.card__description}>{product.description}</div>
        </div>
        <div className={styles.right}>
          <UIProductPrice
            price={product.price}
            discount_price={product.discounted_price}
            size="l"
          />
          <UIButton
            className={styles.right__button}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addProductToCart();
            }}
            color="primary"
            style="filled"
          >
            <span>{t("productCard.buy")}</span>
            <CartIcon className={clsx(styles.right__buttonIcon)} />
          </UIButton>
        </div>
      </div>
    </Link>
  );
}
