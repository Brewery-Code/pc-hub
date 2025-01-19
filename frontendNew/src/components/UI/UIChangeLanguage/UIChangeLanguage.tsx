import clsx from "clsx";
import styles from "./UIChangeLanguage.module.css";
import { useState } from "react";
import i18next from "i18next";

interface ILanguageChangeProps {
  className?: string;
}

function LanguageChange({ className }: ILanguageChangeProps) {
  const [chosenLanguage, setChosenLanguage] = useState(
    i18next.language || window.localStorage.i18nextLng,
  );
  const toggleLanguage = () => {
    i18next.changeLanguage(chosenLanguage === "en" ? "uk" : "en");
    setChosenLanguage(i18next.language || window.localStorage.i18nextLng);
    window.location.reload();
  };

  return (
    <button
      className={clsx(styles["language-button"], className && className)}
      onClick={toggleLanguage}
    >
      <div
        className={clsx(styles["language-button__language"], {
          [styles["language-button__language_active"]]: chosenLanguage === "en",
        })}
      >
        EN
      </div>
      <span className={styles["language-button__separator"]}>/</span>
      <div
        className={clsx(styles["language-button__language"], {
          [styles["language-button__language_active"]]: chosenLanguage === "uk",
        })}
      >
        UA
      </div>
    </button>
  );
}
export default LanguageChange;
