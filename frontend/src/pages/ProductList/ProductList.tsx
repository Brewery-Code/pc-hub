import { useSelector } from "react-redux";
import { UIBreadcrumbs, UIPaginator, UIProductCard } from "../../components/UI";
import { RootState, useAppDispatch } from "../../store/store";
import styles from "./ProductList.module.css";
import { fetchProductList } from "../../store/productList/productList.slice";
import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function ProductList() {
  const { productList: category } = useParams();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  const dispatch = useAppDispatch();
  const { productList, totalPages } = useSelector(
    (state: RootState) => state.productList,
  );

  useEffect(() => {
    if (category) {
      dispatch(fetchProductList({ category, page }));
    }
  }, [category, dispatch, page]);
  return (
    <div className={styles.productList}>
      <div className="productList__container">
        <div className={styles.productList__body}>
          <div className={styles.head}>
            <UIBreadcrumbs />
            <h4 className={styles.head__title}>{category}</h4>
          </div>
          <div className={styles.productList__main}>
            <aside className={styles.filter}>Filters</aside>
            <div className={styles.list}>
              {productList.map((product, index) => (
                <UIProductCard product={product} key={index} />
              ))}
            </div>
          </div>
          <UIPaginator
            className={styles.productList__paginator}
            totalPages={totalPages}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductList;
