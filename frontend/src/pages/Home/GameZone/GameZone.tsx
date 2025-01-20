import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";
import styles from "./GameZone.module.css";
import { UIProductList, UIProductNavigation } from "../../../components/UI";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import categoryImg from "../../../assets/img/gameZoneCatagory.png";
import clsx from "clsx";

function GameZone() {
  const { products } = useSelector((state: RootState) => state.topSales);
  const productList = products.slice(0, 6);

  const [isListOpen, setIsListOpen] = useState(false);
  const toggleList = () => setIsListOpen((prev) => !prev);

  const [heightOfLIst, setHeightOfLIst] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (listRef.current) {
      setHeightOfLIst(listRef.current.scrollHeight);
    }
  }, [isListOpen]);

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const toggleCategory = () => setIsCategoryOpen((prev) => !prev);

  const [heightOfCategory, setHeightOfCategory] = useState(0);
  const categoryRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (categoryRef.current) {
      setHeightOfCategory(categoryRef.current.scrollHeight);
    }
  });

  const { t } = useTranslation("home");

  return (
    <section className={styles.zone}>
      <div className="zone__container">
        <div className={styles.zone__body}>
          <div className={styles.head}>
            <span></span>
            <h2 className={styles.head__title}>Game zone</h2>
            <span></span>
          </div>
          <div ref={listRef}>
            <UIProductList
              list={productList}
              className={styles.zone__products}
              childType="dark"
              isListOpen={isListOpen}
              style={{
                maxHeight: isListOpen ? `${heightOfLIst}px` : "",
              }}
            />
          </div>
          <UIProductNavigation
            className={styles.zone__navigation}
            type="white"
            isListOpen={isListOpen}
            toggleList={toggleList}
          />
          <h4 className={styles.zone__subtitle}>{t("gameZone.subtitle")}</h4>
          <div
            className={styles.category}
            ref={categoryRef}
            style={{
              maxHeight: isCategoryOpen ? `${heightOfCategory}px` : "",
            }}
          >
            <div className={styles.category__item}>
              <div className={styles["category__img-container"]}>
                <img
                  className={styles.category__img}
                  src={categoryImg}
                  alt="categoryImg"
                />
                <div className={styles["category__img-bg"]}></div>
              </div>
              <div className={styles.category__name}>Клавіатури</div>
            </div>
            <div className={styles.category__item}>
              <div className={styles["category__img-container"]}>
                <img
                  className={styles.category__img}
                  src={categoryImg}
                  alt="categoryImg"
                />
                <div className={styles["category__img-bg"]}></div>
              </div>
              <div className={styles.category__name}>Клавіатури</div>
            </div>
            <div className={styles.category__item}>
              <div className={styles["category__img-container"]}>
                <img
                  className={styles.category__img}
                  src={categoryImg}
                  alt="categoryImg"
                />
                <div className={styles["category__img-bg"]}></div>
              </div>
              <div className={styles.category__name}>Клавіатури</div>
            </div>
            <div className={styles.category__item}>
              <div className={styles["category__img-container"]}>
                <img
                  className={styles.category__img}
                  src={categoryImg}
                  alt="categoryImg"
                />
                <div className={styles["category__img-bg"]}></div>
              </div>
              <div className={styles.category__name}>Клавіатури</div>
            </div>
            <div className={styles.category__item}>
              <div className={styles["category__img-container"]}>
                <img
                  className={styles.category__img}
                  src={categoryImg}
                  alt="categoryImg"
                />
                <div className={styles["category__img-bg"]}></div>
              </div>
              <div className={styles.category__name}>Клавіатури</div>
            </div>
            <div className={styles.category__item}>
              <div className={styles["category__img-container"]}>
                <img
                  className={styles.category__img}
                  src={categoryImg}
                  alt="categoryImg"
                />
                <div className={styles["category__img-bg"]}></div>
              </div>
              <div className={styles.category__name}>Клавіатури</div>
            </div>
          </div>
          <UIProductNavigation
            className={clsx("only-mobile", styles.zone__navigation)}
            type="white"
            isListOpen={isCategoryOpen}
            toggleList={toggleCategory}
          />
        </div>
      </div>
    </section>
  );
}

export default GameZone;
