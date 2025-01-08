import clsx from "clsx";
import styles from "./Contacts.module.css";
import ArrowBold from "../../../../assets/icons/ArrowBold";

interface IContactsProps {
  isClassName?: string;
}

function Contacts({ isClassName }: IContactsProps) {
  return (
    <div className={clsx(styles.contacts, isClassName && isClassName)}>
      <button className={styles.contacts__title}>
        050 065 87 96
        <ArrowBold className={styles["contacts__title-arrow-icon"]} />
      </button>
      <ul className={styles.contacts__list}>
        <li className={styles["contacts__list-item"]}></li>
      </ul>
    </div>
  );
}

export default Contacts;
