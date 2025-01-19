import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/store";
import { useEffect, useRef, useState } from "react";
import { fetchTopSales } from "../../../store/topSales/topSales.slice";
import { UIProductList, UIProductNavigation } from "../../../components/UI";
import styles from "./TopSales.module.css";
import clsx from "clsx";

function TopSales() {
  const { status, products } = useSelector(
    (state: RootState) => state.topSales,
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTopSales());
    }
  }, [status, dispatch]);

  const firstList = products.slice(0, 6);
  const secondList = products.slice(6, 12);

  const [isFirstListOpen, setIsFirstListOpen] = useState(false);
  const toggleFirstList = () => {
    setIsFirstListOpen((prev) => !prev);
  };

  const [isSecondListOpen, setIsSecondListOpen] = useState(false);
  const toggleSecondList = () => {
    setIsSecondListOpen((prev) => !prev);
  };

  const [firstListHeight, setFirstListHeight] = useState(0);
  const [secondListHeight, setSecondListHeight] = useState(0);

  const firstListRef = useRef<HTMLDivElement>(null);
  const secondListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (firstListRef.current) {
      setFirstListHeight(firstListRef.current.scrollHeight);
    }

    if (secondListRef.current) {
      setSecondListHeight(secondListRef.current.scrollHeight);
    }
  }, [isFirstListOpen, isSecondListOpen]);

  const { t } = useTranslation("home");

  return (
    <section className={styles.sales}>
      <div className={"sales__container"}>
        <div className={styles.sales__body}>
          <h4 className={styles.sales__title}>{t("selling.title")}</h4>
          <div ref={firstListRef}>
            <UIProductList
              className={clsx(
                styles.sales__list,
                isFirstListOpen && styles.sales__list_open,
              )}
              list={firstList}
              style={
                isFirstListOpen ? { maxHeight: `${firstListHeight}px` } : {}
              }
            />
          </div>
          <UIProductNavigation
            className={styles.navigation}
            isListOpen={isFirstListOpen}
            toggleList={toggleFirstList}
          />
          <h4 className={clsx(styles.sales__title, "only-mobile")}>
            {t("selling.title")}
          </h4>
          <div ref={secondListRef}>
            <UIProductList
              className={clsx(
                styles.sales__list,
                isSecondListOpen && styles.sales__list_open,
              )}
              list={secondList}
              style={
                isSecondListOpen ? { maxHeight: `${secondListHeight}px` } : {}
              }
            />
          </div>
          <UIProductNavigation
            className={styles.navigation}
            isListOpen={isSecondListOpen}
            toggleList={toggleSecondList}
          />
        </div>
      </div>
    </section>
  );
}

export default TopSales;
