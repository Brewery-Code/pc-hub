import clsx from "clsx";
import styles from "./Contacts.module.css";
import ArrowBold from "../../../../assets/icons/ArrowBold";

interface IContactsProps {
  className?: string;
}

function Contacts({ className }: IContactsProps) {
  return (
    <div className={styles.contacts}>
      <button className={styles.contacts__title}>
        050 065 87 96
        <ArrowBold className={styles["contacts__title-arrow-icon"]} />
      </button>
      <ul className={clsx(className, styles.contacts__list)}>
        <li className={styles["contacts__list-item"]}></li>
      </ul>
    </div>
  );
}

export default Contacts;
