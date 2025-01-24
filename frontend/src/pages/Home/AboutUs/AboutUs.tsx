import { useTranslation } from "react-i18next";
import styles from "./AboutUs.module.css";

function AboutUs() {
  const { t } = useTranslation("home");

  return (
    <section className={styles.about}>
      <div className="about__container">
        <div className={styles.about__body}>
          <h3 className={styles.about__title}>{t("aboutUs.title")}</h3>
          <div className={styles.about__text}>
            <p className={styles.about__paragraph}>
              {t("aboutUs.firstParagraph")}
            </p>
            <p className={styles.about__paragraph}>
              {t("aboutUs.secondParagraph")}
            </p>
            <p className={styles.about__paragraph}>
              {t("aboutUs.thirdParagraph")}
            </p>
            <p className={styles.about__paragraph}>
              {t("aboutUs.fourthParagraph")}
            </p>
            <p className={styles.about__paragraph}>
              {t("aboutUs.fifthParagraph")}
            </p>
            <p className={styles.about__paragraph}>
              {t("aboutUs.sixthParagraph")}
            </p>
            <p className={styles.about__paragraph}>
              {t("aboutUs.seventhParagraph")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
