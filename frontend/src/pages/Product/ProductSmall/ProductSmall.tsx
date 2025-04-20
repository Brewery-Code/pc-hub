import { IProduct } from "../../../store/product/product.slice";
import {
  CheckMarkAvailability,
  ComparisonIcon,
  LikeIcon,
} from "../../../assets/icons";
import { UIButton } from "../../../components/UI";
import styles from "./ProductSmall.module.css";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

interface IProductSmallProps {
  product: IProduct;
  className?: string;
  addProductToCart: () => void;
  toggleProductWishlist: () => void;
  isProductLiked: boolean;
}

function ProductSmall({
  product,
  className,
  addProductToCart,
  toggleProductWishlist,
  isProductLiked,
}: IProductSmallProps) {
  const { t } = useTranslation("product");

  return (
    <div className={clsx(styles.product, className)}>
      <div className={styles.product__head}>
        <img
          className={styles.product__image}
          src={product.images[0].image}
          alt="productImage"
        />
        <div className={styles.product__title}>{product.name}</div>
      </div>
      <div className={styles.product__main}>
        <div className={styles.product__price}>
          {product.price}
          <span className={styles.product__currency}>{t("buy.uah")}</span>
        </div>
        <div className={styles.product__availability}>
          <CheckMarkAvailability
            className={styles["product__availability-icon"]}
          />
          <span>{t("characteristicsSection.availability")}</span>
        </div>
        <div className={styles.product__comparison}>
          <ComparisonIcon className={styles["product__comparison-icon"]} />
        </div>
        <div className={styles.product__like} onClick={toggleProductWishlist}>
          <LikeIcon
            className={clsx(
              styles["product__like-icon"],
              isProductLiked && styles["product__like-icon_active"],
            )}
          />
        </div>
      </div>
      <UIButton
        color="primary"
        style="filled"
        className={styles.product__buy}
        onClick={addProductToCart}
      >
        {t("buy.buyCommon")}
      </UIButton>
      <UIButton
        color="primary"
        style="outline"
        className={styles.product__buyCredit}
      >
        {t("buy.buyCredit")}
      </UIButton>
    </div>
  );
}

export default ProductSmall;
