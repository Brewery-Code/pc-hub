import clsx from "clsx";
import styles from "./Body.module.css";
import { useTranslation } from "react-i18next";
import { IProduct } from "../../../store/product/product.slice";
import { useEffect, useState } from "react";
import {
  ArrowBold,
  ArrowCommon,
  ComparisonIcon,
  LikeIcon,
} from "../../../assets/icons";

interface IBodyProps {
  product: IProduct;
  className?: string;
}

function Body({ className, product }: IBodyProps) {
  const { t } = useTranslation("product");

  const [activeImg, setActiveImg] = useState("");
  useEffect(() => {
    if (product && product.images.length > 0) {
      setActiveImg(product.images[0].image);
    }
  }, [product]);

  const changeActiveImg = (src: string) => setActiveImg(src);

  return (
    <div className={clsx(className, styles.body)}>
      <div className={styles.left}>
        <div className={styles.images}>
          <div className={styles.images__container}>
            <div className={styles.images__list}>
              {product.images.map((image) => (
                <img
                  src={image.image}
                  alt="productImg"
                  onClick={() => changeActiveImg(image.image)}
                />
              ))}
            </div>
          </div>
          <div className={styles.image__main}>
            <img src={activeImg} alt="productImg" />
          </div>
        </div>
        <div className={styles.characteristics}>
          <h4 className={styles.characteristics__title}>
            {t("characteristics.title")}
          </h4>
          <ul className={styles.characteristics__list}>
            {product.attributes.map((attribute, index) => (
              <li key={index} className={styles.characteristics__item}>
                <div>{attribute.attribute_name}</div>
                <div>{attribute.value}</div>
              </li>
            ))}
          </ul>
          <button className={styles["characteristics__show-all"]}>
            {t("characteristics.showAll")}
            <ArrowCommon
              className={styles["characteristics__show-all-arrow"]}
            />
          </button>
          <div className={styles.description}>
            <h4 className={styles.description__title}>
              {t("description.title")}
            </h4>
            <p className={styles.description__text}>{product.description}</p>
            <button className={styles.description__more}>
              {t("description.showAll")}
              <ArrowBold className={styles["description__more-arrow"]} />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.head}>
          <div className={styles.head__new}>{t("banners.isNew")}</div>
          <div className={styles.head__hit}>{t("banners.topSales")}</div>
          <div className={styles.head__comparison}>
            <ComparisonIcon className={styles["head__comparison-icon"]} />
          </div>
          <div className={styles.head__like}>
            <LikeIcon className={styles["head__like-icon"]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
