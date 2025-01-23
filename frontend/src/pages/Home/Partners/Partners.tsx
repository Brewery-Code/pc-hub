import { useTranslation } from "react-i18next";
import partnerImg from "../../../assets/img/partnerSony.png";
import styles from "./Partners.module.css";
import { ArrowCommon } from "../../../assets/icons";

function Partners() {
  const { t } = useTranslation("home");
  return (
    <section className={styles.partners}>
      <div className="partners__container">
        <div className={styles.partners__body}>
          <h4 className={styles.partners__title}>{t("partners.title")}</h4>
          <ul className={styles.partners__list}>
            <li className={styles.partners__item}>
              <img
                className={styles["partners__item-img"]}
                src={partnerImg}
                alt="partnerImg"
              />
            </li>
            <li className={styles.partners__item}>
              <img
                className={styles["partners__item-img"]}
                src={partnerImg}
                alt="partnerImg"
              />
            </li>
            <li className={styles.partners__item}>
              <img
                className={styles["partners__item-img"]}
                src={partnerImg}
                alt="partnerImg"
              />
            </li>
            <li className={styles.partners__item}>
              <img
                className={styles["partners__item-img"]}
                src={partnerImg}
                alt="partnerImg"
              />
            </li>
            <li className={styles.partners__item}>
              <img
                className={styles["partners__item-img"]}
                src={partnerImg}
                alt="partnerImg"
              />
            </li>
            <li className={styles.partners__item}>
              <img
                className={styles["partners__item-img"]}
                src={partnerImg}
                alt="partnerImg"
              />
            </li>
            <li className={styles.partners__item}>
              <img
                className={styles["partners__item-img"]}
                src={partnerImg}
                alt="partnerImg"
              />
            </li>
            <li className={styles.partners__item}>
              <img
                className={styles["partners__item-img"]}
                src={partnerImg}
                alt="partnerImg"
              />
            </li>
            <li className={styles.partners__item}>
              <img
                className={styles["partners__item-img"]}
                src={partnerImg}
                alt="partnerImg"
              />
            </li>
            <li className={styles.partners__item}>
              <img
                className={styles["partners__item-img"]}
                src={partnerImg}
                alt="partnerImg"
              />
            </li>
            <li className={styles.partners__item}>
              <img
                className={styles["partners__item-img"]}
                src={partnerImg}
                alt="partnerImg"
              />
            </li>
          </ul>
          <button className={styles.partners__more}>
            {t("partners.allPartners")}
            <ArrowCommon className={styles["partners__more-arrow"]} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Partners;
