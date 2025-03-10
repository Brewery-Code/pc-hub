import clsx from "clsx";
import styles from "./Body.module.css";
import { useTranslation } from "react-i18next";
import { IProduct } from "../../../store/product/product.slice";

interface IBodyProps {
  product: IProduct;
  className?: string;
}

function Body({ className, product }: IBodyProps) {
  const { t } = useTranslation("product");

  return (
    <div className={clsx(className, styles.body)}>
      <div className={styles.left}>
        <div className={styles.images}>
          <div className={styles.images__list}>
            {product.images.map((image) => (
              <img src={image.image} alt="productImg" />
            ))}
          </div>
          <div className={styles.image__main}>
            {/* {product.images[0].image && (
              <img src={product.images[0].image} alt="productImg" />
            )} */}
          </div>
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
}

export default Body;
