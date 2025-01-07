import clsx from "clsx";
import styles from "./UIChangeLanguage.module.css";
import { useState } from "react";
function LanguageChange() {
  const [chosenLanguage, setChosenLanguage] = useState<string>("en");
  const toggleLanguage = () => {
    setChosenLanguage((prev: string) => (prev === "en" ? "uk" : "en"));
  };

  return (
    <button className={styles["language-button"]} onClick={toggleLanguage}>
      <span
        className={clsx(styles["language-button__language"], {
          [styles["language-button__language_active"]]: chosenLanguage === "en",
        })}
      >
        EN
      </span>
      <span className={styles["language-button__separator"]}>/</span>
      <span
        className={clsx(styles["language-button__language"], {
          [styles["language-button__language_active"]]: chosenLanguage === "uk",
        })}
      >
        UA
      </span>
    </button>
  );
}
export default LanguageChange;
