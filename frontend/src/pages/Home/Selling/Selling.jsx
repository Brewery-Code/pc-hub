import { useTranslation } from 'react-i18next';
import Product from '../../../components/UI/Goods/Product';
import styles from './Selling.module.css';

export default function Selling() {
  const { t } = useTranslation('home')
  return (
    <section className={styles.selling}>
      <div className="selling__container">
        <div className={styles.selling__body}>
          <h4 className={styles.selling__title}>{t('selling.title')}</h4>
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
              <button>Смотреть все товари</button>
            </div>
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
              <button>Смотреть все товари</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}