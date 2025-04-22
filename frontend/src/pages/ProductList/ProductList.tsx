import { useSelector } from "react-redux";
import { UIBreadcrumbs, UIPaginator, UIProductCard } from "../../components/UI";
import { RootState, useAppDispatch } from "../../store/store";
import styles from "./ProductList.module.css";
import { fetchProductList } from "../../store/productList/productList.slice";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { GridViewIcon, RowViewIcon } from "../../assets/icons";
import clsx from "clsx";
import { IProduct } from "../../store/types";
import { useTranslation } from "react-i18next";
import { TFunctionNonStrict } from "i18next";

function RenderProductList({
  productList,
  cardType,
  t,
}: {
  productList: IProduct[];
  cardType: "row" | "grid";
  t: TFunctionNonStrict<"productList", undefined>;
}) {
  if (productList[0]) {
    return (
      <div
        className={clsx(
          cardType === "grid" && styles.grid,
          cardType === "row" && styles.row,
        )}
      >
        {productList.map((product, index) => (
          <UIProductCard product={product} key={index} type={cardType} />
        ))}
      </div>
    );
  } else
    return <div className={styles.productList__empty}>{t("list.empty")}</div>;
}

function ProductList() {
  const { t } = useTranslation("productList");
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "";
  const page = searchParams.get("page") || "1";
  const length = searchParams.get("length") || "1";
  const dispatch = useAppDispatch();
  const { productList, totalPages } = useSelector(
    (state: RootState) => state.productList,
  );

  useEffect(() => {
    if (category) {
      dispatch(fetchProductList({ category, page, length }));
    }
  }, [category, dispatch, page, length]);

  const [cardType, setCardType] = useState<"grid" | "row">("grid");

  return (
    <div className={styles.productList}>
      <div className="productList__container">
        <div className={styles.productList__body}>
          <div className={styles.head}>
            <UIBreadcrumbs />
            <h4 className={styles.head__title}>{category}</h4>
            <div className={styles.nav}>
              <div className={styles.nav__filters}>
                iowejfewoijfiowejfoiwejiofj
              </div>
              <div className={styles.nav__view}>
                <RowViewIcon
                  className={clsx(
                    styles.nav__viewIcon,
                    cardType === "row" && styles.nav__viewIcon_active,
                  )}
                  onClick={() => setCardType("row")}
                />
                <GridViewIcon
                  className={clsx(
                    styles.nav__viewIcon,
                    cardType === "grid" && styles.nav__viewIcon_active,
                  )}
                  onClick={() => setCardType("grid")}
                />
              </div>
            </div>
          </div>
          <div className={styles.productList__main}>
            <aside className={styles.filter}>Filters</aside>
            <RenderProductList
              productList={productList}
              cardType={cardType}
              t={t}
            />
          </div>
          <UIPaginator
            className={styles.productList__paginator}
            totalPages={totalPages}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductList;
