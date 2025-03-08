import { useTranslation } from "react-i18next";
import { CartIcon, ComparisonIcon, LikeIcon } from "../../../assets/icons";
import { IProduct } from "../../../store/topSales/topSales.slice";
import styles from "./UIProductCard.module.css";
import clsx from "clsx";
import { UIButton } from "..";
import UIRatingStars from "../UIRatingStars/UIRatingStars";
import { Link, useLocation } from "react-router-dom";

interface IUIProductCardProps {
  product: IProduct;
  className?: string;
  type?: "common" | "dark";
  key?: string | number;
}

function UIProductCard({ product, className, type, key }: IUIProductCardProps) {
  const price = () => {
    if (product.discounted_price !== product.price) {
      return (
        <div className={styles.discount}>
          <div className={styles["discount__common-price"]}>
            {product.price}
            <span className={styles["discount__common-price-uah"]}>
              {t("productCard.uah")}
            </span>
          </div>
          <div className={styles.discount__price}>
            {product.discounted_price}
            <span className={styles["discount__price-uah"]}>
              {t("productCard.uah")}
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.price}>
          {product.price}
          <span className={styles.price__uah}>{t("productCard.uah")}</span>
        </div>
      );
    }
  };

  const { t } = useTranslation("components");

  const location = useLocation();

  return (
    <Link
      key={key}
      to={`${location.pathname}/${product.id}`}
      className={clsx(
        styles.card,
        className,
        type === "dark" && styles.card_dark,
      )}
    >
      <div className={styles.head}>
        {product.is_new && (
          <div className={styles.head__new}>{t("productCard.new")}</div>
        )}
        <button className={styles.head__comparison}>
          <ComparisonIcon className={styles["head__comparison-icon"]} />
        </button>
        <button className={styles.head__like}>
          <LikeIcon className={styles["head__like-icon"]} />
        </button>
      </div>
      <div className={styles["card__img-container"]}>
        <img
          className={styles.card__img}
          src={product.main_image}
          alt="productImage"
        />
      </div>
      <div
        className={clsx(
          styles.card__title,
          type === "dark" && styles.card__title_dark,
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
        {price()}
        <UIButton className={styles.bottom__buy} color="primary" style="filled">
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

export default UIProductCard;
