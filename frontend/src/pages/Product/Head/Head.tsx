import { useTranslation } from "react-i18next";
import { UIRatingStars } from "../../../components/UI";
import { IProduct } from "../../../store/product/product.slice";
import styles from "./Head.module.css";
import clsx from "clsx";

interface IHeadProps {
  product: IProduct;
  className?: string;
  handleSection: (section: string) => () => void;
}

function Head({ product, className, handleSection }: IHeadProps) {
  const { t } = useTranslation("product");
  return (
    <div className={clsx(className, styles.head)}>
      <div className={styles.head__row}>
        <h3 className={styles.head__name}>{product.name}</h3>
        <div className={styles.head__code}>
          <div className={styles["head__code-text"]}>
            {t("head.productCode")}: {product.id}
          </div>
        </div>
      </div>
      <div className={styles.head__rating}>
        <UIRatingStars rating={product.rating} />
        <div className={styles.head__reviews}>
          {t("head.reviews")}: {product.rating}
        </div>
      </div>
      <ul className={styles.navigation}>
        <li
          className={styles.navigation__item}
          onClick={handleSection("AllProducts")}
        >
          {t("navigation.allInfo")}
        </li>
        <li
          className={clsx(
            styles.navigation__item,
            styles.navigation__item_active,
          )}
          onClick={handleSection("Characteristics")}
        >
          {t("navigation.characteristics")}
        </li>
        <li
          className={styles.navigation__item}
          onClick={handleSection("Reviews")}
        >
          {t("navigation.reviews")}
        </li>
        <li
          className={styles.navigation__item}
          onClick={handleSection("Credit")}
        >
          {t("navigation.credit")}
        </li>
      </ul>
    </div>
  );
}

export default Head;
