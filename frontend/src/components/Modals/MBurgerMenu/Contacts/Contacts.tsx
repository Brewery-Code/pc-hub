import { useTranslation } from "react-i18next";
import { TelegramIcon, ViberIcon } from "../../../../assets/icons";
import styles from "./Contacts.module.css";
import clsx from "clsx";

interface IContactsProps {
  className?: string;
}

function Contacts({ className }: IContactsProps) {
  const { t } = useTranslation();

  return (
    <div className={clsx(styles.contacts, className)}>
      <h6 className={styles.contacts__title}>{t("contacts.contacts")}</h6>
      <ul className={styles.contacts__list}>
        <li className={styles["contacts__list-item"]}>
          (067) 11-12-485 - {t("contacts.salesDepartment")}
        </li>
        <li className={styles["contacts__list-item"]}>
          (066) 484-39-22 - {t("contacts.salesDepartment")}
        </li>
        <li className={styles["contacts__list-item"]}>
          (063) 747-33-48 - {t("contacts.salesDepartment")}
          <ViberIcon className={styles["contacts__viber-icon"]} />
          <TelegramIcon className={styles["contacts__telegram-icon"]} />
        </li>
        <li className={styles["contacts__list-item"]}>
          {t("contacts.city")}
          <br />
          {t("contacts.street")}
        </li>
        <li className={styles["contacts__list-item"]}>
          {t("contacts.scheduleWeekdays")}
          <br />
          {t("contacts.scheduleWeekend")}
        </li>
      </ul>
    </div>
  );
}

export default Contacts;
