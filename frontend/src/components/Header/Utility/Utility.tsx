import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CatalogIcon, LogoIcon, SearchIcon } from "../../../assets/icons";
import { UIButton, UIInputField } from "../../UI";
import { Contacts } from "./Contacts";
import { Navigation } from "./Navigation";
import styles from "./Utility.module.css";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";

function Utility() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleScreenWidth);

    return () => {
      window.removeEventListener("resize", handleScreenWidth);
    };
  }, []);

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const { t } = useTranslation("components");

  return (
    <div className={styles.utility}>
      <div className="utility__container">
        <div className={styles.utility__body}>
          <div className={"only-desktop"} onClick={handleLogoClick}>
            <LogoIcon
              className={clsx(styles.utility__logo, "only-desktop")}
              isIconSmall={screenWidth < 1124 || screenWidth < 767.8}
            />
          </div>
          <Link to="/catalog/">
            <UIButton
              className={styles["utility__catalog-button"]}
              color="primary"
              size="m"
              style="filled"
            >
              <div className={styles["utility__catalog-button-text"]}>
                {t("header.catalog")}
              </div>
              <CatalogIcon className={styles["utility__catalog-button-icon"]} />
            </UIButton>
          </Link>
          <form className={styles["search-form"]} action="">
            <UIInputField
              className={styles["search-form__input-field"]}
              type="text"
              size="m"
              isWidth
              placeholder={t("header.search")}
            />
            <UIButton
              className={styles["search-form__submit-button"]}
              color="secondary"
              style="filled"
            >
              <SearchIcon
                className={styles["search-form__submit-button-icon"]}
              />
            </UIButton>
          </form>
          <button className={styles["utility__search-button_mobile"]}>
            <SearchIcon
              className={styles["utility__search-button-icon_mobile"]}
            />
          </button>
          <Contacts
            isClassName={clsx(styles.utility__contacts, "only-desktop")}
          />
          <span
            className={clsx(styles.utility__separator, "only-desktop")}
          ></span>
          <Navigation isClassName={styles.utility__navigation} />
        </div>
      </div>
    </div>
  );
}

export default Utility;
