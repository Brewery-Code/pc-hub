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
import { Link } from "react-router-dom";
import MCart from "../MCart/MCart";
import { useState } from "react";

interface IBurgerMenuProps {
  isBurgerMenuOpen: boolean;
  setIsBurgerMenuOpen: () => void;
}

function MBurgerMenu({
  isBurgerMenuOpen,
  setIsBurgerMenuOpen,
}: IBurgerMenuProps) {
  const { t } = useTranslation("modals");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
    if (isBurgerMenuOpen) setIsBurgerMenuOpen();
  };

  return createPortal(
    <UIModalBody
      setIsModalOpen={setIsBurgerMenuOpen}
      isModalOpen={isBurgerMenuOpen}
      className={clsx(isBurgerMenuOpen && styles.blur)}
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
          <Link
            to="/catalog/"
            className={clsx(styles.menu__nav, "only-mobile")}
            onClick={setIsBurgerMenuOpen}
          >
            <CatalogIcon className={styles["menu__catalog-icon"]} />
            {t("burgerMenu.catalog")}
          </Link>
          <div
            className={clsx(styles.menu__nav, "only-mobile")}
            onClick={toggleCart}
          >
            <CartIcon className={styles["menu__cart-icon"]} />
            {t("burgerMenu.cart")}
          </div>
          <MCart isCartOpen={isCartOpen} toggleCart={toggleCart} />
          <div className={clsx(styles.menu__nav, "only-mobile")}>
            <ComparisonIcon className={styles["menu__comparison-icon"]} />
            {t("burgerMenu.comparison")}
          </div>
          <Link
            to="/user/?nav=wishlist"
            className={clsx(styles.menu__nav, "only-mobile")}
            onClick={setIsBurgerMenuOpen}
          >
            <LikeIcon className={styles["menu__like-icon"]} />
            {t("burgerMenu.likes")}
          </Link>
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
