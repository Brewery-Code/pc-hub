import { useTranslation } from "react-i18next";
import newsImg from "../../../assets/img/gameZoneBackground.jpeg";
import styles from "./News.module.css";
import { ArrowCommon } from "../../../assets/icons";

function News() {
  const { t } = useTranslation("home");
  return (
    <section className={styles.news}>
      <div className="news__container">
        <div className={styles.news__body}>
          <h4 className={styles.news__title}>{t("news.title")}</h4>
          <div className={styles.news__list}>
            <div className={styles.article}>
              <div className={styles["article__img-container"]}>
                <img
                  className={styles.article__img}
                  src={newsImg}
                  alt="newsImg"
                />
              </div>
              <div className={styles.article__content}>
                <div className={styles.article__title}>
                  Вакансия! Требуется контент-менеджер{" "}
                </div>
                <p className={styles.article__text}>
                  Интернет-магазину V-COMP на постоянную работу, требуется
                  контент-менеджер. Работа удаленно (на дому), не
                  сложная...Интернет-магазину V-COMP на постоянную работу,
                  требуется контент-менеджер. Работа удаленно (на дому), не
                  сложная...
                </p>
                <div className={styles.article__bottom}>
                  <div className={styles.article__date}>07.07.2021 </div>
                  <button className={styles.article__more}>
                    {t("news.allNews")}
                    <ArrowCommon className={styles["article__more-arrow"]} />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.article}>
              <div className={styles["article__img-container"]}>
                <img
                  className={styles.article__img}
                  src={newsImg}
                  alt="newsImg"
                />
              </div>
              <div className={styles.article__content}>
                <div className={styles.article__title}>
                  Вакансия! Требуется контент-менеджер{" "}
                </div>
                <p className={styles.article__text}>
                  Интернет-магазину V-COMP на постоянную работу, требуется
                  контент-менеджер. Работа удаленно (на дому), не
                  сложная...Интернет-магазину V-COMP на постоянную работу,
                  требуется контент-менеджер. Работа удаленно (на дому), не
                  сложная...
                </p>
                <div className={styles.article__bottom}>
                  <div className={styles.article__date}>07.07.2021 </div>
                  <button className={styles.article__more}>
                    {t("news.allNews")}
                    <ArrowCommon className={styles["article__more-arrow"]} />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.article}>
              <div className={styles["article__img-container"]}>
                <img
                  className={styles.article__img}
                  src={newsImg}
                  alt="newsImg"
                />
              </div>
              <div className={styles.article__content}>
                <div className={styles.article__title}>
                  Вакансия! Требуется контент-менеджер{" "}
                </div>
                <p className={styles.article__text}>
                  Интернет-магазину V-COMP на постоянную работу, требуется
                  контент-менеджер. Работа удаленно (на дому), не
                  сложная...Интернет-магазину V-COMP на постоянную работу,
                  требуется контент-менеджер. Работа удаленно (на дому), не
                  сложная...
                </p>
                <div className={styles.article__bottom}>
                  <div className={styles.article__date}>07.07.2021 </div>
                  <button className={styles.article__more}>
                    {t("news.allNews")}
                    <ArrowCommon className={styles["article__more-arrow"]} />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.article}>
              <div className={styles["article__img-container"]}>
                <img
                  className={styles.article__img}
                  src={newsImg}
                  alt="newsImg"
                />
              </div>
              <div className={styles.article__content}>
                <div className={styles.article__title}>
                  Вакансия! Требуется контент-менеджер{" "}
                </div>
                <p className={styles.article__text}>
                  Интернет-магазину V-COMP на постоянную работу, требуется
                  контент-менеджер. Работа удаленно (на дому), не
                  сложная...Интернет-магазину V-COMP на постоянную работу,
                  требуется контент-менеджер. Работа удаленно (на дому), не
                  сложная...
                </p>
                <div className={styles.article__bottom}>
                  <div className={styles.article__date}>07.07.2021 </div>
                  <button className={styles.article__more}>
                    {t("news.readMore")}
                    <ArrowCommon className={styles["article__more-arrow"]} />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.article}>
              <div className={styles["article__img-container"]}>
                <img
                  className={styles.article__img}
                  src={newsImg}
                  alt="newsImg"
                />
              </div>
              <div className={styles.article__content}>
                <div className={styles.article__title}>
                  Вакансия! Требуется контент-менеджер{" "}
                </div>
                <p className={styles.article__text}>
                  Интернет-магазину V-COMP на постоянную работу, требуется
                  контент-менеджер. Работа удаленно (на дому), не
                  сложная...Интернет-магазину V-COMP на постоянную работу,
                  требуется контент-менеджер. Работа удаленно (на дому), не
                  сложная...
                </p>
                <div className={styles.article__bottom}>
                  <div className={styles.article__date}>07.07.2021 </div>
                  <button className={styles.article__more}>
                    {t("news.allNews")}
                    <ArrowCommon className={styles["article__more-arrow"]} />
                  </button>
                </div>
              </div>
            </div>
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
