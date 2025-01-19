import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";
import styles from "./GameZone.module.css";
import { UIProductList } from "../../../components/UI";

function GameZone() {
  const { products } = useSelector((state: RootState) => state.topSales);
  const productList = products.slice(0, 6);
  return (
    <section className={styles.zone}>
      <div className="zone__container">
        <div className={styles.zone__body}>
          <div className={styles.head}>
            <span></span>
            <h2 className={styles.head__title}>Game zone</h2>
            <span></span>
          </div>
          <UIProductList
            list={productList}
            className={styles.zone__products}
            childType="dark"
          />
        </div>
      </div>
    </section>
  );
}

export default GameZone;
