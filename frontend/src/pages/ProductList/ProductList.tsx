import { useSelector } from "react-redux";
import { UIBreadcrumbs, UIPaginator, UIProductCard } from "../../components/UI";
import { RootState, useAppDispatch } from "../../store/store";
import styles from "./ProductList.module.css";
import { fetchProductList } from "../../store/productList/productList.slice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductList() {
  const { category, page } = useParams();
  const dispatch = useAppDispatch();
  const productList = useSelector(
    (state: RootState) => state.productList.productList,
  );
  console.log(page);
  useEffect(() => {
    if (category) {
      dispatch(fetchProductList({ parentID: category, page }));
    }
  }, [category, dispatch, page]);

  return (
    <div className={styles.productList}>
      <div className="productList__container">
        <div className={styles.productList__body}>
          <div className={styles.head}>
            <UIBreadcrumbs />
            <h4 className={styles.head__title}>Title</h4>
          </div>
          <div className={styles.productList__main}>
            <aside className={styles.filter}>Filters</aside>
            <div className={styles.list}>
              {productList.map((product, index) => (
                <UIProductCard product={product} key={index} />
              ))}
            </div>
          </div>
          <UIPaginator className={styles.productList__paginator} />
        </div>
      </div>
    </div>
  );
}

export default ProductList;
