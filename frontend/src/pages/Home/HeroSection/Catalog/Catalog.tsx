import clsx from "clsx";
import { ArrowBold } from "../../../../assets/icons";
import styles from "./Catalog.module.css";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../store/store";
import { useEffect } from "react";
import { fetchCatalog } from "../../../../store/catalog/catalog.slider";
import { Link } from "react-router-dom";

interface ICatalogProps {
  className: string;
}

function Catalog({ className }: ICatalogProps) {
  const { status, catalog } = useSelector((state: RootState) => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCatalog());
    }
  }, [dispatch, status]);

  return (
    <>
      <div className={styles.catalog}>
        <ul className={clsx(styles.catalog__body, className)}>
          {catalog.map((category) => (
            <li key={category.id} className={styles.category}>
              <Link to={`/catalog/${category.slug}/`}>
                <div className={styles.category__row}>
                  <img
                    className={styles.category__img}
                    src={category.image}
                    alt="categoryImg"
                  />
                  <span className={styles.category__name}>{category.name}</span>
                  <ArrowBold
                    className={clsx(styles.category__arrow, "only-desktop")}
                  />
                </div>
              </Link>
              <div className={styles.subcategory}>
                <div className={styles.subcategory__body}>
                  {category.children.map((subcategory) => (
                    <div
                      className={styles.subcategory__item}
                      key={subcategory.id}
                    >
                      <Link to={`/products?category=${category?.slug}`}>
                        <div className={styles.subcategory__title}>
                          {subcategory.name}
                        </div>
                      </Link>
                      <ul
                        className={clsx(
                          styles["product-list"],
                          subcategory.children[0] &&
                            styles["product-list_active"],
                        )}
                      >
                        {subcategory.children.map((item) => (
                          <Link
                            to={`/products?category=${item?.slug}`}
                            key={item.id}
                            className={styles.product__itemContainer}
                          >
                            <li className={styles.product__item} key={item.id}>
                              {item.name}
                            </li>
                          </Link>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          ))}
          <div className={clsx(styles.catalog__more, "only-desktop")}>
            <ArrowBold className={clsx(styles["catalog__more-arrow"])} />
          </div>
        </ul>
      </div>
      <div className={styles.catalog__overlay}></div>
    </>
  );
}

export default Catalog;
