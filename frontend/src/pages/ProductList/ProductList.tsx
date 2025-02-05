import { UIBreadcrumbs } from "../../components/UI";
import styles from "./ProductList.module.css";

function ProductList() {
  return (
    <div className={styles.productList}>
      <div className="productList__container">
        <div className={styles.productList__body}>
          <div className={styles.head}>
            <UIBreadcrumbs />
            <h4 className={styles.head__title}></h4>
          </div>
          <aside className={styles.filter}></aside>
          <section className={styles.list}></section>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
