import { useState } from "react";
import clsx from "clsx";
import styles from "./BurgerMenu.module.css";

function BurgerMenu() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);
  const toggleBurgerMenu = (): void => {
    setIsBurgerMenuOpen((prev) => !prev);
  };

  return (
    <button
      className={clsx(styles["burger-menu"], {
        [styles["burger-menu_active"]]: isBurgerMenuOpen,
      })}
      onClick={toggleBurgerMenu}
    >
      <span className={styles["burger-menu__icon"]} />
    </button>
  );
}

export default BurgerMenu;
