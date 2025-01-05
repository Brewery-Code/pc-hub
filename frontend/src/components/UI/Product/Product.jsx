import { ReactComponent as ComparisonIcon } from '../../../assets/icons/comparison.svg';
import { ReactComponent as LikeIcon } from '../../../assets/icons/like.svg';
import { ReactComponent as CartIcon } from '../../../assets/icons/header-cart.svg';
import productImg from '../../../assets/img/product.jpeg';
import styles from './Product.module.css';

export default function Product({ item }) {
  if (!item) {
    return <div>Продукт не знайдено</div>;
  }
  return (
    <div className={styles.product}>
      <div className={styles.head}>
        <div className={styles.head__new}>
          <p>Новинка</p>
        </div>
        <button className={styles.head__comparison}>
          <ComparisonIcon stroke={'var(--color-action-secondary)'} />
        </button>
        <button className={styles.head__like}>
          <LikeIcon fill={'var(--color-action-secondary)'} />
        </button>
      </div>
      <img className={styles.product__img} src={item.main_image}></img>
      <p className={styles.product__title}>{item.name}</p>
      <div className={styles.reviews}>
        {/* <div className=""></div> */}
        <div className={styles.reviews__count}>Відгуки: 0</div>
      </div>
      <div className={styles.row}>
        <div className={styles.row__price}>{item.price} <p>грн.</p></div>
        <button className={styles.row__buy}>Купити
          <CartIcon fill={'white'} stroke={'white'} className={styles['only-mobile']} />
        </button>
      </div>
    </div>
  );
}