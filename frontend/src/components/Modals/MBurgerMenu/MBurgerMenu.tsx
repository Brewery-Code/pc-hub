import { createPortal } from "react-dom";
import styles from "./MBurgerMenu.module.css";
import { UICross, UIModalBody } from "../../UI";
import clsx from "clsx";
import { LogoIcon } from "../../../assets/icons";
import Register from "./Register/Register";
import Accordions from "./Accordions/Accordions";
import Contacts from "./Contacts/Contacts";
import Social from "./Social/Social";

interface IBurgerMenuProps {
  isBurgerMenuOpen: boolean;
  setIsBurgerMenuOpen: () => void;
}

function MBurgerMenu({
  isBurgerMenuOpen,
  setIsBurgerMenuOpen,
}: IBurgerMenuProps) {
  return createPortal(
    <UIModalBody
      setIsModalOpen={setIsBurgerMenuOpen}
      isModalOpen={isBurgerMenuOpen}
    >
      <div
        className={clsx(styles.menu, isBurgerMenuOpen && styles.menu_active)}
      >
        <div className={styles.menu__head}>
          <div className={styles.menu__logo}>
            <LogoIcon className={styles["menu__logo-icon"]} />
          </div>
          <UICross closeMenu={setIsBurgerMenuOpen} />
        </div>
        <div className={styles.menu__body}>
          <Register />
          <Accordions />
          <Contacts className={styles.menu__contacts} />
          <Social className={styles.menu__social} />
        </div>
      </div>
    </UIModalBody>,
    document.getElementById("modals")!,
  );
}

export default MBurgerMenu;
