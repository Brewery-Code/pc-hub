import clsx from "clsx";
import { ArrowBolt } from "../../../../assets/icons";
import styles from "./Catalog.module.css";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../store/store";
import { useEffect } from "react";
import { fetchCatalog } from "../../../../store/catalog/catalog.slider";

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
            <li className={styles.category} key={category.id}>
              <img
                className={styles.category__img}
                src={category.image}
                alt="categoryImg"
              />
              <span className={styles.category__name}>{category.name}</span>
              <ArrowBolt
                className={clsx(styles.category__arrow, "only-desktop")}
              />
              <div className={styles.subcategory}>
                <div className={styles.subcategory__body}>
                  {category.children.map((subcategory) => (
                    <div
                      className={styles.subcategory__item}
                      key={subcategory.id}
                    >
                      <div className={styles.subcategory__title}>
                        {subcategory.name}
                      </div>
                      <ul className={styles["product-list"]}>
                        {subcategory.children.map((item) => (
                          <li className={styles.product__item} key={item.id}>
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          ))}
          <div className={clsx(styles.catalog__more, "only-desktop")}>
            <ArrowBolt className={clsx(styles["catalog__more-arrow"])} />
          </div>
        </ul>
      </div>
      <div className={styles.catalog__overlay}></div>
    </>
  );
}

export default Catalog;
