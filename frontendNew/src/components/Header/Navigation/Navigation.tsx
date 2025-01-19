import { useTranslation } from "react-i18next";
import { BurgerMenu } from "./BurgerMenu";
import { NavigationLink } from "./NavigationLink";
import { LogoIcon, PhoneIcon, ProfileIcon } from "../../../assets/icons";
import styles from "./Navigation.module.css";
import { UIChangeLanguage } from "../../UI";
import clsx from "clsx";

function Navigation() {
  const { t } = useTranslation<string>("components");

  return (
    <nav className={styles.navigation}>
      <div className="navigation__container">
        <div className={styles.navigation__body}>
          <BurgerMenu />
          <ul className={clsx("only-desktop", styles.navigation__list)}>
            <NavigationLink>{t("header.promotion")}</NavigationLink>
            <NavigationLink>{t("header.credit")}</NavigationLink>
            <NavigationLink>{t("header.payment")}</NavigationLink>
            <NavigationLink>{t("header.help")}</NavigationLink>
            <NavigationLink>{t("header.secondHand")}</NavigationLink>
            <NavigationLink>{t("header.contacts")}</NavigationLink>
          </ul>
          <LogoIcon className={clsx("only-mobile", styles.navigation__logo)} />
          <PhoneIcon
            className={clsx("only-mobile", styles["navigation__phone-icon"])}
          />
          <UIChangeLanguage
            className={clsx("only-desktop", styles.navigation__language)}
          />
          <ProfileIcon
            className={clsx("only-desktop", styles.navigation__profile)}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
