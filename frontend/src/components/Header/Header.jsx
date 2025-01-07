import Navigation from "./Navigation/Navigation";
import Utility from "./Utility/Utility";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__body}>
        <Navigation></Navigation>
        <Utility></Utility>
      </div>
    </header>
  );
}
