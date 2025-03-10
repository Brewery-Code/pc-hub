import clsx from "clsx";
import styles from "./Body.module.css";
import { useTranslation } from "react-i18next";
import { IProduct } from "../../../store/product/product.slice";
import { useEffect, useState } from "react";

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
          <div className={styles.images__list}>
            {product.images.map((image) => (
              <img
                src={image.image}
                alt="productImg"
                onClick={() => changeActiveImg(image.image)}
              />
            ))}
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
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
}

export default Body;
