import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { ArrowCommon } from "../../../assets/icons";
import styles from "./UIProductNavigation.module.css";

interface IUIProductNavigationProps {
  className?: string;
  isListOpen?: boolean;
  toggleList?: () => void;
  type?: "common" | "white";
}

function UIProductNavigation({
  className,
  isListOpen,
  toggleList,
  type,
}: IUIProductNavigationProps) {
  const { t } = useTranslation("components");
  return (
    <div
      className={clsx(
        styles.navigation,
        className,
        type === "white" && styles.navigation_white,
      )}
    >
      <button
        className={clsx(
          styles.navigation__more,
          "only-mobile",
          isListOpen && styles.navigation__more_active,
        )}
        onClick={toggleList}
      >
        {t("productNavigation.more")}
        <ArrowCommon className={styles["navigation__more-icon"]} />
      </button>
      <button className={styles.navigation__all}>
        {t("productNavigation.all")}
        <ArrowCommon className={styles["navigation__all-icon"]} />
      </button>
    </div>
  );
}

export default UIProductNavigation;
