import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CatalogIcon, LogoIcon, SearchIcon } from "../../../assets/icons";
import { UIButton, UIInputField } from "../../UI";
import { Contacts } from "./Contacts";
import { Navigation } from "./Navigation";
import styles from "./Utility.module.css";
import clsx from "clsx";

function Utility() {
  const [isCatalogLarge, setIsCatalogLarge] = useState(window.innerWidth > 900);
  const [isLogoSmall, setIsLogoSmall] = useState(window.innerWidth > 1124);

  const checkWindowSize = () => {
    setIsCatalogLarge(window.innerWidth > 900 || window.innerWidth < 767.8);
    setIsLogoSmall(window.innerWidth < 1124 || window.innerWidth < 767.8);
  };

  useEffect(() => {
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);
    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);

  const { t } = useTranslation("components");
  return (
    <div className={styles.utility}>
      <div className="utility__container">
        <div className={styles.utility__body}>
          <LogoIcon
            className={clsx(styles.utility__logo, "only-desktop")}
            isIconSmall={isLogoSmall}
          />
          <UIButton
            className={styles["utility__catalog-button"]}
            color="primary"
            size="m"
            style="filled"
            type="catalog"
          >
            {isCatalogLarge && t("header.catalog")}
            <CatalogIcon className={styles["utility__catalog-button-icon"]} />
          </UIButton>
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
