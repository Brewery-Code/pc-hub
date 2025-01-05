import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Product from '../../../components/UI/Product/Product';
import { ReactComponent as ArrowIcon } from '../../../assets/icons/arrow-more.svg';
import styles from './Selling.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopSalesData } from '../../../features/topSales/topSales';
import ProductList from '../../../components/UI/productList/productList';

export default function Selling() {
  const dispatch = useDispatch();
  const { loading, error, topSales } = useSelector((state) => state.topSales);
  useEffect(() => {
    dispatch(fetchTopSalesData());
  }, [dispatch]);

  console.log(topSales)

  const { t } = useTranslation('home')
  return (
    <section className={styles.selling}>
      <div className="selling__container">
        <div className={styles.selling__body}>
          <h4 className={styles.selling__title}>{t('selling.title')}</h4>
          <ProductList list={topSales} />
          {/* <div className={styles.products}>
            <ul className={styles.products__list}>
              
            </ul>
            <div className={styles.products__more}>
              <button>Смотреть все товари<ArrowIcon /></button>
            </div>
          </div> */}
          {/* <div className={styles.products}>
            <ul className={styles.products__list}>
             
            </ul>
            <div className={styles.products__more}>
              <button>Смотреть все товари<ArrowIcon /></button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}