import { Link } from "react-router-dom";
import { IProduct, IWishlistProduct } from "../../../../store/types";
import clsx from "clsx";
import styles from "./GridCard.module.css";
import { CartIcon, ComparisonIcon, LikeIcon } from "../../../../assets/icons";
import UIRatingStars from "../../UIRatingStars/UIRatingStars";
import UIButton from "../../UIButton/UIButton";
import { useTranslation } from "react-i18next";
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

export default function GridCard({
  product,
  className,
  color,
  addProductToCart,
  toggleProductWishlist,
  isProductLiked,
}: ICardProps) {
  const { t } = useTranslation("components");
  return (
    <Link
      key="1"
      to={`/products/${product.slug}/?nav=allInfo`}
      state={{ id: product.id }}
      className={clsx(
        styles.card,
        className,
        color === "dark" && styles.card_dark,
      )}
    >
      <div className={styles.head}>
        {product.is_new && (
          <div className={styles.head__new}>{t("productCard.new")}</div>
        )}
        <button className={styles.head__comparison}>
          <ComparisonIcon className={styles["head__comparison-icon"]} />
        </button>
        <button
          className={styles.head__like}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleProductWishlist();
          }}
        >
          <LikeIcon
            className={clsx(
              styles["head__like-icon"],
              isProductLiked && styles["head__like-icon_active"],
            )}
          />
        </button>
      </div>
      <div className={styles["card__img-container"]}>
        <img
          className={styles.card__img}
          src={product?.main_image}
          alt="productImage"
        />
      </div>
      <div
        className={clsx(
          styles.card__title,
          color === "dark" && styles.card__title_dark,
        )}
      >
        {product.name}
      </div>
      <div className={styles.reviews}>
        <div className={styles.reviews__stars}>
          <UIRatingStars rating={product.rating} />
        </div>
        <div className={styles.reviews__count}>
          {t("productCard.reviews")}: {product.rating}
        </div>
      </div>
      <div className={styles.bottom}>
        <UIProductPrice
          price={product.price}
          discount_price={product.discounted_price}
        />
        <UIButton
          className={styles.bottom__buy}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addProductToCart();
          }}
          color="primary"
          style="filled"
        >
          <span className={clsx("only-desktop")}>{t("productCard.buy")}</span>
          <CartIcon
            className={clsx(styles["bottom__buy-cart-icon"], "only-mobile")}
          />
        </UIButton>
      </div>
      <div className={styles.description}>
        <p className={styles.description__text}>{product.description}</p>
      </div>
    </Link>
  );
}
