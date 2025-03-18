import styles from "./Characteristics.module.css";
import { IProduct } from "../../../store/product/product.slice";
import { useTranslation } from "react-i18next";
import { ComparisonIcon, LikeIcon } from "../../../assets/icons";

interface ICharacteristicsProps {
  product: IProduct;
}

function Characteristics({ product }: ICharacteristicsProps) {
  const { t } = useTranslation("product");
  return (
    <div className={styles.characteristics}>
      <div className={styles.characteristics__left}>
        <h4 className={styles.characteristics__title}>
          {t("characteristicsSection.title")}
        </h4>
        <ul className={styles.characteristics__list}>
          {product.attributes.map((attribute, index) => (
            <li key={index} className={styles.characteristics__item}>
              <div>{attribute.attribute_name}</div>
              <div>{attribute.value}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.characteristics__right}>
        <div className={styles.product}>
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
              {t("buy.uah")}
            </div>
            <div className={styles.product__availability}>
              {t("characteristicsSection.availability")}
            </div>
            <div className={styles.product__comparison}>
              <ComparisonIcon className={styles["product__comparison-icon"]} />
            </div>
            <div className={styles.product__like}>
              <LikeIcon className={styles["product__like-icon"]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Characteristics;
