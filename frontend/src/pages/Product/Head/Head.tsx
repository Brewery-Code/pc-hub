import { useTranslation } from "react-i18next";
import { UIRatingStars } from "../../../components/UI";
import { IProduct } from "../../../store/product/product.slice";
import styles from "./Head.module.css";
import clsx from "clsx";

interface IHeadProps {
  product: IProduct;
  className?: string;
  handleSection: (section: string) => () => void;
  activeSection: string;
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
            activeSection == "AllProducts" && styles.navigation__item_active,
          )}
          onClick={handleSection("AllProducts")}
        >
          {t("navigation.allInfo")}
        </li>
        <li
          className={clsx(
            styles.navigation__item,
            activeSection == "Characteristics" &&
              styles.navigation__item_active,
          )}
          onClick={handleSection("Characteristics")}
        >
          {t("navigation.characteristics")}
        </li>
        <li
          className={clsx(
            styles.navigation__item,
            activeSection == "Reviews" && styles.navigation__item_active,
          )}
          onClick={handleSection("Reviews")}
        >
          {t("navigation.reviews")}
        </li>
        <li
          className={clsx(
            styles.navigation__item,
            activeSection == "Credit" && styles.navigation__item_active,
          )}
          onClick={handleSection("Credit")}
        >
          {t("navigation.credit")}
        </li>
      </ul>
    </div>
  );
}

export default Head;
