import clsx from "clsx";
import { Navigation } from "./Navigation";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={clsx(styles.header)}>
      <Navigation />
    </header>
  );
}

export default Header;
