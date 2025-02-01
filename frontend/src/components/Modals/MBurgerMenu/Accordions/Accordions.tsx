import { useTranslation } from "react-i18next";
import styles from "./Accordions.module.css";
import { useRef, useState } from "react";
import ArrowBold from "../../../../assets/icons/ArrowBold";
import clsx from "clsx";

interface IAccordionProps {
  className?: string;
}

function Accordions({ className }: IAccordionProps) {
  const informationRef = useRef<HTMLDivElement>(null);
  const informationHeight = informationRef.current?.scrollHeight;

  const [activeAccordion, setActiveAccordion] = useState("");
  const toggleInformation = (newActiveAccordion: string) => {
    setActiveAccordion(
      newActiveAccordion === activeAccordion ? "" : newActiveAccordion,
    );
  };

  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesHeight = servicesRef.current?.scrollHeight;

  const { t } = useTranslation();

  return (
    <>
      <div
        className={clsx(styles.accordion, className)}
        ref={informationRef}
        style={{
          maxHeight: activeAccordion === "information" ? informationHeight : 24,
        }}
      >
        <h6
          className={styles.accordion__title}
          onClick={() => toggleInformation("information")}
        >
          {t("information.information")}
          <ArrowBold
            className={clsx(
              styles["accordion__title-arrow"],
              activeAccordion === "information" &&
                styles["accordion__title-arrow_active"],
            )}
          />
        </h6>
        <ul className={styles.accordion__list}>
          <li className={styles.accordion__item}>
            {t("information.promotion")}
          </li>
          <li className={styles.accordion__item}>{t("information.credit")}</li>
          <li className={styles.accordion__item}>{t("information.payment")}</li>
          <li className={styles.accordion__item}>
            {t("information.warranty")}
          </li>
          <li className={styles.accordion__item}>
            {t("information.questions")}
          </li>
          <li className={styles.accordion__item}>{t("information.news")}</li>
          <li className={styles.accordion__item}>{t("information.blog")}</li>
          <li className={styles.accordion__item}>{t("information.about")}</li>
          <li className={styles.accordion__item}>{t("information.privacy")}</li>
          <li className={styles.accordion__item}>
            {t("information.contacts")}
          </li>
        </ul>
      </div>
      <div
        className={clsx(styles.accordion, className)}
        ref={servicesRef}
        style={{
          maxHeight: activeAccordion === "services" ? servicesHeight : 24,
        }}
      >
        <h6
          className={styles.accordion__title}
          onClick={() => toggleInformation("services")}
        >
          {t("services.services")}
          <ArrowBold
            className={clsx(
              styles["accordion__title-arrow"],
              activeAccordion === "services" &&
                styles["accordion__title-arrow_active"],
            )}
          />
        </h6>
        <ul className={styles.accordion__list}>
          <li className={styles.accordion__item}>
            {t("services.serviceCenter")}
          </li>
          <li className={styles.accordion__item}>
            {t("services.secondHandStore")}
          </li>
          <li className={styles.accordion__item}>{t("services.secondHand")}</li>
          <li className={styles.accordion__item}>{t("services.repair")}</li>
          <li className={styles.accordion__item}>{t("services.help")}</li>
          <li className={styles.accordion__item}>
            {t("services.cooperation")}
          </li>
          <li className={styles.accordion__item}>{t("services.home")}</li>
        </ul>
      </div>
    </>
  );
}

export default Accordions;
