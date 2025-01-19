import { useTranslation } from "react-i18next";
import { LogoIcon, Mastercard, VisaIcon } from "../../../assets/icons";
import styles from "./RightsBlock.module.css";
import clsx from "clsx";

function RightsBlock() {
  const { t } = useTranslation("components");
  return (
    <div className={styles.block}>
      <div className={clsx("only-desktop", styles.block__logo)}>
        <LogoIcon className={styles["block__logo-icon"]} />
      </div>
      <div className={styles.block__text}>{t("footer.rights")}</div>
      <div className={styles.block__payment}>
        <Mastercard className={styles["block__payment-mastercard"]} />
        <VisaIcon className={styles["block__payment-visa"]} />
      </div>
    </div>
  );
}

export default RightsBlock;
