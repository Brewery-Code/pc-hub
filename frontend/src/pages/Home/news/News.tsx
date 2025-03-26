import { useTranslation } from "react-i18next";
import newsImg from "../../../assets/img/gameZoneBackground.jpeg";
import styles from "./News.module.css";
import { ArrowCommon } from "../../../assets/icons";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/store";
import { useEffect } from "react";
import { fetchNews } from "../../../store/news/news.slice";

function News() {
  const { t } = useTranslation("home");
  const { status, news } = useSelector((state: RootState) => state.news);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNews());
    }
  }, [dispatch, status]);

  return (
    <section className={styles.news}>
      <div className="news__container">
        <div className={styles.news__body}>
          <h4 className={styles.news__title}>{t("news.title")}</h4>
          <div className={styles.news__list}>
            {news.map((newsItem, index) => (
              <div key={index} className={styles.article}>
                <img
                  className={styles.article__img}
                  src={newsItem.image}
                  alt="newsImg"
                />
                <div className={styles.article__content}>
                  <div className={styles.article__title}>{newsItem.title}</div>
                  <p className={styles.article__text}>{newsItem.content}</p>
                  <div className={styles.article__bottom}>
                    <div className={styles.article__date}>
                      {newsItem.publish}
                    </div>
                    <button className={styles.article__more}>
                      {t("news.allNews")}
                      <ArrowCommon className={styles["article__more-arrow"]} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className={styles.news__more}>
            {t("news.allNews")}
            <ArrowCommon className={styles["news__more-arrow"]} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default News;
