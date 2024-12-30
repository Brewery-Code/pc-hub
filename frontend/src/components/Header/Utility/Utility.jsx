import { ReactComponent as LogoIcon } from '../../../assets/icons/logo.svg';
import { ReactComponent as CatalogIcon } from '../../../assets/icons/header-product-catalog.svg';
import { ReactComponent as SearchIcon } from '../../../assets/icons/header-search.svg';
import { ReactComponent as ArrowIcon } from '../../../assets/icons/arrow.svg';
import { ReactComponent as CartIcon } from '../../../assets/icons/header-cart.svg';
import { ReactComponent as LikeIcon } from '../../../assets/icons/like.svg';
import { ReactComponent as ComparIcon } from '../../../assets/icons/comparison.svg';
import styles from './Utility.module.css';
import { useTranslation } from 'react-i18next';

export default function Utility() {
  const { t } = useTranslation();

  return (
    <div className={styles.utility}>
      <div className="utility__container">
        <div className={styles.utility__body}>
          <div className={styles.utility__navigation}>
            <LogoIcon className={styles.utility__logo}
              width='165px'
              height='42px'
              fill='var(--color-action-secondary)'
            />
            <button className={styles.utility__catalog}>
              <div>{t('header.catalog')}</div>
              <CatalogIcon />
            </button>
          </div>
          <form className={styles.utility__search}>
            <input
              type="text"
              placeholder='Пошук'
            />
            <button>
              <SearchIcon />
            </button>
          </form>
          <button className={`${styles.utility__search_mobile} ${styles['only-mobile']}`}>
            <SearchIcon />
          </button>
          <div className={styles.utility__number}>
            050 065 87 96
            <ArrowIcon
              width='12px'
              height='6px'
              stroke='var(--background-color-blue)'
            />
          </div>
          <div className={styles.utility__line}></div>
          <div className={styles.purchase}>
            <div className={styles.purchase__comparison}>
              <ComparIcon />
            </div>
            <div className={styles.purchase__like}>
              <LikeIcon />
            </div>
            <div className={styles.purchase__cart}>
              <CartIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}