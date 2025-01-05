import styles from './ProductList.module.css';
import Product from '../Product/Product';

export default function ProductList({ list }) {
  return (
    <div className={styles.products}>
      <ul className={styles.products__list}>
        {list?.map((item) => (
          <div key={item.id}>
            <Product item={item} />
          </div>
        ))}
      </ul>
    </div>
  );
}
