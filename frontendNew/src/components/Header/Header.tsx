import { Navigation } from "./Navigation";
import styles from "./Header.module.css";
import { Utility } from "./Utility";

function Header() {
  return (
    <header className={styles.header}>
      <Navigation />
      <Utility />
    </header>
  );
}

export default Header;
