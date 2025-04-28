import { useTranslation } from "react-i18next";
import { UIBreadcrumbs, UIRatingStars } from "../../../components/UI";
import styles from "./Head.module.css";
import clsx from "clsx";
import { URLSearchParamsInit } from "react-router-dom";
import { IProduct } from "../../../store/types";
import { useEffect, useRef, useState } from "react";

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
  const headRef = useRef<HTMLDivElement>(null);
  const [headHeight, setHeadHeight] = useState(0);

  useEffect(() => {
    const handleHeight = () => {
      if (headRef.current) {
        setHeadHeight(headRef.current.scrollHeight);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      handleHeight();
    });

    if (headRef.current) {
      resizeObserver.observe(headRef.current);
    }

    return () => {
      if (headRef.current) {
        resizeObserver.unobserve(headRef.current);
      }
    };
  }, []);

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
    <div
      className={clsx(className, styles.head)}
      ref={headRef}
      style={{
        top: `${-headHeight + 187}px`,
      }}
    >
      <div className="head__container">
        <UIBreadcrumbs className={styles.head__breadcrumbs} />
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
    </div>
  );
}

export default Head;
