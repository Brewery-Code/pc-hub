import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { RootState } from "../../../store/store";
import { useAuth } from "../../../hooks";
import { BurgerMenu } from "./BurgerMenu";
import { NavigationLink } from "./NavigationLink";
import { UIChangeLanguage } from "../../UI";
import { LogoIcon, PhoneIcon, ProfileIcon } from "../../../assets/icons";
import styles from "./Navigation.module.css";

function Navigation() {
  const { isAuth } = useAuth();
  const { photo } = useSelector((state: RootState) => state.user);

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
          <Link to="">
            <LogoIcon
              className={clsx("only-mobile", styles.navigation__logo)}
            />
          </Link>
          <PhoneIcon
            className={clsx("only-mobile", styles["navigation__phone-icon"])}
          />
          <UIChangeLanguage
            className={clsx("only-desktop", styles.navigation__language)}
          />
          {!isAuth ? (
            <ProfileIcon
              className={clsx("only-desktop", styles.navigation__profile)}
            />
          ) : (
            <img
              className={clsx(styles.navigation__profile, "only-desktop")}
              src={photo}
            />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
