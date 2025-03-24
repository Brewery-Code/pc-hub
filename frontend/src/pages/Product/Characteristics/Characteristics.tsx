import styles from "./Characteristics.module.css";
import { IProduct } from "../../../store/product/product.slice";
import { useTranslation } from "react-i18next";
import ProductSmall from "../ProductSmall/ProductSmall";

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
      <ProductSmall product={product} />
      <div className={styles.product__warning}>
        {t("characteristicsSection.warning")}
      </div>
    </div>
  );
}

export default Characteristics;
