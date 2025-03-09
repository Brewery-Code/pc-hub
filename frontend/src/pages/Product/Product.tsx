import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import styles from "./Product.module.css";
import { useEffect } from "react";
import { fetchProduct } from "../../store/product/product.slice";
import { useParams } from "react-router-dom";
import { UIBreadcrumbs } from "../../components/UI";
import { useTranslation } from "react-i18next";
import Head from "./Head/Head";
import Body from "./Body/Body";

function Product() {
  const { product: id } = useParams();
  const dispatch = useAppDispatch();
  const { status, product } = useSelector((state: RootState) => state.product);
  useEffect(() => {
    if (status === "idle") {
      if (id) dispatch(fetchProduct({ id }));
    }
  }, [dispatch, status, id]);

  const { t } = useTranslation("product");
  return (
    <div className={styles.product}>
      <div className="product__container">
        <div className={styles.product__body}>
          <UIBreadcrumbs className={styles.product__breadcrumbs} />
          <Head product={product} className={styles["product__head"]} />
          <Body className={styles.product__body} product={product} />
        </div>
      </div>
    </div>
  );
}

export default Product;
