import { ReactComponent as ComparisonIcon } from '../../../assets/icons/comparison.svg';
import { ReactComponent as LikeIcon } from '../../../assets/icons/like.svg';
import { ReactComponent as CartIcon } from '../../../assets/icons/header-cart.svg';
import productImg from '../../../assets/img/product.jpeg';
import styles from './Product.module.css';

export default function Product() {
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
      <img className={styles.product__img} src={productImg}></img>
      <p className={styles.product__title}>Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)</p>
      <div className={styles.reviews}>
        {/* <div className=""></div> */}
        <div className={styles.reviews__count}>Відгуки: 0</div>
      </div>
      <div className={styles.row}>
        <div className={styles.row__price}>3500 <p>грн.</p></div>
        <button className={styles.row__buy}>Купити
          <CartIcon fill={'white'} stroke={'white'} className={styles['only-mobile']} />
        </button>
      </div>
    </div>
  );
}