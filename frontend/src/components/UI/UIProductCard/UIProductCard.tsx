import { useTranslation } from "react-i18next";
import { IProduct } from "../../../store/topSales/topSales.slice";
import styles from "./UIProductCard.module.css";
import RowCard from "./RowCard/RowCard";
import GridCard from "./GridCard/GridCard";
import clsx from "clsx";

interface IUIProductCardProps {
  product: IProduct;
  className?: string;
  type?: "grid" | "row";
  color?: "light" | "dark";
  key?: string | number;
}

function UIProductCard({
  product,
  className,
  type = "grid",
  color = "light",
}: IUIProductCardProps) {
  const { t } = useTranslation("components");

  const price = () => {
    if (product.discounted_price != 0) {
      return (
        <div className={styles.discount}>
          <div
            className={clsx(
              styles.discount__commonPrice,
              type === "row" && styles.discount__commonPrice_row,
            )}
          >
            {product.price}
            <span
              className={clsx(
                styles.discount__commonPriceUah,
                type === "row" && styles.discount__commonPriceUah_row,
              )}
            >
              {t("productCard.uah")}
            </span>
          </div>
          <div
            className={clsx(
              styles.discount__price,
              type === "row" && styles.discount__price_row,
            )}
          >
            {product.discounted_price}
            <span
              className={clsx(
                styles.discount__priceUah,
                styles.discount__priceUah_row,
              )}
            >
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

  if (type === "grid") {
    return (
      <GridCard
        price={price}
        product={product}
        className={className}
        color={color}
      />
    );
  } else if (type === "row") {
    return (
      <RowCard
        price={price}
        product={product}
        className={className}
        color={color}
      />
    );
  }
}

export default UIProductCard;
