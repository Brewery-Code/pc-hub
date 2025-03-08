import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import styles from "./Product.module.css";
import { useEffect } from "react";
import { fetchProduct } from "../../store/product/product.slice";
import { useParams } from "react-router-dom";
import { UIBreadcrumbs } from "../../components/UI";

function Product() {
  const { product: id } = useParams();
  const dispatch = useAppDispatch();
  const { status, product } = useSelector((state: RootState) => state.product);
  useEffect(() => {
    if (status === "idle") {
      if (id) dispatch(fetchProduct({ id }));
    }
  }, [dispatch, status, id]);
  return (
    <div className={styles.product}>
      <div className="product__container">
        <div className={styles.product__body}>
          <UIBreadcrumbs className={styles.product__breadcrumbs} />
        </div>
      </div>
    </div>
  );
}

export default Product;
