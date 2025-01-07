import { useTranslation } from "react-i18next";
import { CatalogIcon, LogoIcon, SearchIcon } from "../../../assets/icons";
import { UIButton, UIInputField } from "../../UI";
import { Contacts } from "./Contacts";
import { Navigation } from "./Navigation";
import styles from "./Utility.module.css";

function Utility() {
  const { t } = useTranslation("components");
  return (
    <div className={styles.utility}>
      <div className="utility__container">
        <div className={styles.utility__body}>
          <LogoIcon className={styles.utility__logo} />
          <UIButton
            className={styles["utility__catalog-button"]}
            color="primary"
            size="m"
            style="filled"
            type="catalog"
          >
            {t("header.catalog")}
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
          <Contacts />
          <span className={styles.utility__separator}></span>
          <Navigation />
        </div>
      </div>
    </div>
  );
}

export default Utility;
