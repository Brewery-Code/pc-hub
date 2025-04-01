import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import Register from "./Register/Register";
import Accordions from "./Accordions/Accordions";
import Contacts from "./Contacts/Contacts";
import Social from "./Social/Social";
import { UIChangeLanguage, UICross, UIModalBody } from "../../UI";
import {
  CartIcon,
  CatalogIcon,
  ComparisonIcon,
  LikeIcon,
  LogoIcon,
} from "../../../assets/icons";
import styles from "./MBurgerMenu.module.css";

interface IBurgerMenuProps {
  isBurgerMenuOpen: boolean;
  setIsBurgerMenuOpen: () => void;
}

function MBurgerMenu({
  isBurgerMenuOpen,
  setIsBurgerMenuOpen,
}: IBurgerMenuProps) {
  const { t } = useTranslation("modals");

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
          <UIChangeLanguage
            className={clsx(styles.menu__language, "only-mobile")}
          />
          <Register />
          <div className={clsx(styles.menu__nav, "only-mobile")}>
            <CatalogIcon className={styles["menu__catalog-icon"]} />
            {t("burgerMenu.catalog")}
          </div>
          <div className={clsx(styles.menu__nav, "only-mobile")}>
            <CartIcon className={styles["menu__cart-icon"]} />
            {t("burgerMenu.cart")}
          </div>
          <div className={clsx(styles.menu__nav, "only-mobile")}>
            <ComparisonIcon className={styles["menu__comparison-icon"]} />
            {t("burgerMenu.comparison")}
          </div>
          <div className={clsx(styles.menu__nav, "only-mobile")}>
            <LikeIcon className={styles["menu__like-icon"]} />
            {t("burgerMenu.likes")}
          </div>
          <Accordions className={styles.menu__accordions} />
          <Contacts className={styles.menu__contacts} />
          <Social className={styles.menu__social} />
        </div>
      </div>
    </UIModalBody>,
    document.getElementById("modals")!,
  );
}

export default MBurgerMenu;
