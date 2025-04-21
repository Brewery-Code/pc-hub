import { useTranslation } from "react-i18next";
import { UIRatingStars } from "../../../components/UI";
import styles from "./Head.module.css";
import clsx from "clsx";
import { URLSearchParamsInit } from "react-router-dom";
import { IProduct } from "../../../store/types";

interface IHeadProps {
  product: IProduct;
  className?: string;
  handleSection: (params: URLSearchParamsInit) => void;
  activeSection: string | null;
}

function Head({
  product,
  className,
  handleSection,
  activeSection,
}: IHeadProps) {
  const { t } = useTranslation("product");

  const productCode = (className: string) => {
    return (
      <div className={clsx(styles.head__code, className)}>
        <div className={styles["head__code-text"]}>
          {t("head.productCode")}: {product.id}
        </div>
      </div>
    );
  };

  return (
    <div className={clsx(className, styles.head)}>
      <div className={styles.head__row}>
        <h3 className={styles.head__name}>{product.name}</h3>
        {productCode("only-desktop")}
      </div>
      <div className={styles.head__rating}>
        <UIRatingStars rating={product.rating} starSize="16px" />
        <div className={styles.head__reviews}>
          {t("head.reviews")}: {product.rating}
        </div>
        {productCode("only-mobile")}
      </div>
      <ul className={styles.navigation}>
        <li
          className={clsx(
            styles.navigation__item,
            activeSection == "allInfo" && styles.navigation__item_active,
          )}
          onClick={() => handleSection({ nav: "allInfo" })}
        >
          {t("navigation.allInfo")}
        </li>
        <li
          className={clsx(
            styles.navigation__item,
            activeSection == "characteristics" &&
              styles.navigation__item_active,
          )}
          onClick={() => handleSection({ nav: "characteristics" })}
        >
          {t("navigation.characteristics")}
        </li>
        <li
          className={clsx(
            styles.navigation__item,
            activeSection == "reviews" && styles.navigation__item_active,
          )}
          onClick={() => handleSection({ nav: "reviews" })}
        >
          {t("navigation.reviews")}
        </li>
        <li
          className={clsx(
            styles.navigation__item,
            activeSection == "credit" && styles.navigation__item_active,
          )}
          onClick={() => handleSection({ nav: "credit" })}
        >
          {t("navigation.credit")}
        </li>
      </ul>
    </div>
  );
}

export default Head;
