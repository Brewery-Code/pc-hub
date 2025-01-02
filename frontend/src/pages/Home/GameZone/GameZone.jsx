import { ReactComponent as ArrowIcon } from '../../../assets/icons/arrow-more.svg';
import Product from '../../../components/UI/Product/Product';
import CategoryImg from '../../../assets/img/test2.png';
import styles from './GameZone.module.css';

export default function GameZone() {
  return (
    <section className={styles.zone}>
      <div className={'zone__container'}>
        <div className={styles.zone__body}>
          <div className={styles.head}>
            <span></span>
            <h2 className={styles.head__title}>Game zone</h2>
            <span></span>
          </div>
          <div className={styles.products}>
            <ul className={styles.products__list}>
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </ul>
            <div className={styles.products__more}>
              <button>Смотреть все товари<ArrowIcon /></button>
            </div>
          </div>
          <div className={styles.category}>
            <h4 className={styles.category__title}>Категорії для геймерів</h4>
            <div className={styles.category__list}>
              <div className={styles.category__item}>
                <img src={CategoryImg} alt="" />
                <div className={styles.category__name}>Клава</div>
              </div>
              <div className={styles.category__item}>
                <img src={CategoryImg} alt="" />
                <div className={styles.category__name}>Клава</div>

              </div>
              <div className={styles.category__item}>
                <img src={CategoryImg} alt="" />
                <div className={styles.category__name}>Клава</div>

              </div>
              <div className={styles.category__item}>
                <img src={CategoryImg} alt="" />
                <div className={styles.category__name}>Клава</div>

              </div>
              <div className={styles.category__item}>
                <img src={CategoryImg} alt="" />
                <div className={styles.category__name}>Клава</div>

              </div>
              <div className={styles.category__item}>
                <img src={CategoryImg} alt="" />
                <div className={styles.category__name}>Клава</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}