import clsx from "clsx";
import styles from "./UIProductPrice.module.css";
import { useTranslation } from "react-i18next";

interface IUIProductPrice {
  price: number;
  discount_price?: number;
  size?: "m" | "l";
}

export default function UIProductPrice({
  price,
  discount_price = 0,
  size = "m",
}: IUIProductPrice) {
  const { t } = useTranslation("components");
  if (discount_price != 0) {
    return (
      <div className={styles.discount}>
        <div
          className={clsx(
            styles.discount__commonPrice,
            size === "l" && styles.discount__commonPrice_l,
          )}
        >
          {price}
          <span
            className={clsx(
              styles.discount__commonPriceUah,
              size === "l" && styles.discount__commonPriceUah_l,
            )}
          >
            {t("productCard.uah")}
          </span>
        </div>
        <div
          className={clsx(
            styles.discount__price,
            size === "l" && styles.discount__price_l,
          )}
        >
          {discount_price}
          <span
            className={clsx(
              styles.discount__priceUah,
              size === "l" && styles.discount__priceUah_l,
            )}
          >
            {t("productCard.uah")}
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className={clsx(styles.price, size === "l" && styles.price_l)}>
        {price}
        <span
          className={clsx(
            styles.price__uah,
            size === "l" && styles.price__uah_l,
          )}
        >
          {t("productCard.uah")}
        </span>
      </div>
    );
  }
}
