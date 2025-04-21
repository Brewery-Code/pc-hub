import styles from "./Characteristics.module.css";
import { useTranslation } from "react-i18next";
import ProductSmall from "../ProductSmall/ProductSmall";
import { IProduct } from "../../../store/types";

interface ICharacteristicsProps {
  product: IProduct;
  addProductToCart: () => void;
  toggleProductWishlist: () => void;
  isProductLiked: boolean;
}

function Characteristics({
  product,
  addProductToCart,
  toggleProductWishlist,
  isProductLiked,
}: ICharacteristicsProps) {
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
      <ProductSmall
        product={product}
        className={"only-desktop"}
        addProductToCart={addProductToCart}
        toggleProductWishlist={toggleProductWishlist}
        isProductLiked={isProductLiked}
      />
      <div className={styles.product__warning}>
        {t("characteristicsSection.warning")}
      </div>
    </div>
  );
}

export default Characteristics;
