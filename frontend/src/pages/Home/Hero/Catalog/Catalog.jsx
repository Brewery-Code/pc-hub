import { useEffect, useState } from 'react';
import { ReactComponent as ArrowIcon } from '../../../../assets/icons/arrow.svg';
import styles from './Catalog.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalogData } from '../../../../features/catalog/catalogSlice';

export default function Catalog() {
  const dispatch = useDispatch();
  const { loading, error, catalog } = useSelector((state) => state.catalog);

  useEffect(() => {
    dispatch(fetchCatalogData());
  }, [dispatch]);

  const [isCatalogActive, setIsCatalogActive] = useState(false);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      setIsCatalogActive(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setIsCatalogActive(false);
    }
  };

  return (
    <div className={styles.catalog}>
      <div
        className={isCatalogActive ? `${styles.catalog__background} ${styles.catalog__background_active}` : styles.catalog__background}
      >
      </div>
      <ul className={styles.catalog__list}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {catalog.map((category) =>
          category.parent == null ? (
            <li className={styles.category} key={category.id}>
              <img src={category.image} alt="categoryIcon"
                width='24px'
                height='24px'
              />
              <div className={styles.category__title}>{category.name}</div>
              <ArrowIcon />
              <div className={styles.subcategory}>
                {category.children.map((subcategory) => (
                  <div className={styles.subcategory__item} key={subcategory.id}>
                    <div className={styles.subcategory__title}>{subcategory.name}</div>
                    <ul className={styles.subcategory__list}>
                      {subcategory.children.map((link) => (
                        <li className={styles.subcategory__link} key={link.id}>{link.name}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </li>
          ) : null
        )}
        <button className={styles.catalog__open}><ArrowIcon /></button>
      </ul>
    </div>
  );
}
