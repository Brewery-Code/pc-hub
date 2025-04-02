import { useParams } from "react-router-dom";
import { UIBreadcrumbs } from "../../components/UI";
import styles from "./Catalog.module.css";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import { useEffect } from "react";
import {
  fetchCatalog,
  ICategory,
  ICategoryChildren,
  selectCategory,
} from "../../store/catalog/catalog.slider";
import Category from "./Category/Category";
import { useTranslation } from "react-i18next";

function Catalog() {
  const dispatch = useAppDispatch();
  const status = useSelector((state: RootState) => state.catalog.status);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCatalog());
    }
  }, [status, dispatch]);

  const { category } = useParams();
  const selectedCategory = useSelector((state: RootState) =>
    selectCategory(state, category ? category : undefined),
  );

  const isCatalog = Array.isArray(selectedCategory);

  const { t } = useTranslation("catalog");

  return (
    <div className={styles.catalog}>
      <div className={"catalog__container"}>
        <div className={styles.catalog__body}>
          <UIBreadcrumbs className={styles.catalog__breadcrumbs} />
          <h4 className={styles.catalog__title}>
            {isCatalog ? t("catalog.title") : selectedCategory?.name}
          </h4>
          <div className={styles.catalog__list}>
            {!isCatalog && (
              <Category category={selectedCategory!} isCatalog={isCatalog} />
            )}
            {isCatalog
              ? selectedCategory.map(
                  (category: ICategory | ICategoryChildren, index: number) => (
                    <Category
                      key={index}
                      category={category}
                      isCatalog={isCatalog}
                    />
                  ),
                )
              : selectedCategory?.children.map(
                  (category: ICategoryChildren) => (
                    <Category category={category} isCatalog={isCatalog} />
                  ),
                )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
