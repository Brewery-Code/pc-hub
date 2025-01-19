import { useTranslation } from "react-i18next";
import { SocialBlock } from "./SocialBlock";
import { ViberIcon, TelegramIcon, LogoIcon } from "../../assets/icons";
import clsx from "clsx";
import styles from "./Footer.module.css";
import { RightsBlock } from "./RightsBlock";

function Footer() {
  const { t } = useTranslation("components");
  return (
    <footer className={styles.footer}>
      <div className="footer__container">
        <div className={styles.footer__body}>
          <div className={clsx("only-mobile", styles.footer__logo)}>
            <LogoIcon className={styles["footer__logo-icon"]} />
          </div>
          <div className={styles.block}>
            <h6 className={styles.block__title}>
              {t("information.information")}
            </h6>
            <ul className={styles.block__list}>
              <li className={styles["block__list-item"]}>
                {t("information.promotion")}
              </li>
              <li className={styles["block__list-item"]}>
                {t("information.credit")}
              </li>
              <li className={styles["block__list-item"]}>
                {t("information.payment")}
              </li>
              <li className={styles["block__list-item"]}>
                {t("information.warranty")}
              </li>
              <li className={styles["block__list-item"]}>
                {t("information.questions")}
              </li>
              <li className={styles["block__list-item"]}>
                {t("information.news")}
              </li>
              <li className={styles["block__list-item"]}>
                {t("information.blog")}
              </li>
              <li className={styles["block__list-item"]}>
                {t("information.about")}
              </li>
              <li className={styles["block__list-item"]}>
                {t("information.privacy")}
              </li>
              <li className={styles["block__list-item"]}>
                {t("information.contacts")}
              </li>
            </ul>
          </div>
          <div className={styles.block}>
            <h6 className={styles.block__title}>{t("services.services")}</h6>
            <ul className={styles.block__list}>
              <li className={styles["block__list-item"]}>
                {t("services.serviceCenter")}
              </li>
              <li className={styles["block__list-item"]}>
                {t("services.secondHandStore")}
              </li>
              <li className={styles["block__list-item"]}>
                {t("services.secondHand")}
              </li>
              <li className={styles["block__list-item"]}>
                {t("services.repair")}
              </li>
              <li className={styles["block__list-item"]}>
                {t("services.help")}
              </li>
              <li className={styles["block__list-item"]}>
                {t("services.cooperation")}
              </li>
              <li className={styles["block__list-item"]}>
                {t("services.home")}
              </li>
            </ul>
          </div>
          <div className={styles.block}>
            <h6 className={styles.block__title}>{t("contacts.contacts")}</h6>
            <ul className={styles.block__list}>
              <li className={styles["block__list-item"]}>
                (067) 11-12-485 - {t("contacts.salesDepartment")}
              </li>
              <li className={styles["block__list-item"]}>
                (066) 484-39-22 - {t("contacts.salesDepartment")}
              </li>
              <li className={clsx(styles["block__list-item"], styles.contacts)}>
                (063) 747-33-48 - {t("contacts.salesDepartment")}
                <div className={styles["contacts__icons"]}>
                  <ViberIcon className={styles["contacts__icons-viber"]} />
                  <TelegramIcon
                    className={styles["contacts__icons-telegram"]}
                  />
                </div>
              </li>
              <li className={styles["block__list-item"]}>
                {t("contacts.city")}
                <br />
                {t("contacts.street")}
              </li>
              <li className={styles["block__list-item"]}>
                {t("contacts.scheduleWeekdays")}
                <br />
                {t("contacts.scheduleWeekend")}
              </li>
            </ul>
          </div>
          <SocialBlock />
          <RightsBlock />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
