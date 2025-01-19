import clsx from "clsx";
import {
  AdvantageAssembly,
  AdvantageConsultation,
  AdvantageDelivery,
  AdvantageExperience,
  AdvantageInstallment,
  AdvantagePrice,
  AdvantageWarranty,
} from "../../../../assets/icons";
import styles from "./Advantage.module.css";
import { useTranslation } from "react-i18next";

interface IAdvantageProps {
  className: string;
}

function Advantage({ className }: IAdvantageProps) {
  const { t } = useTranslation("home");
  return (
    <div className={clsx(className, styles.advantage)}>
      <AdvantageAssembly />
      <AdvantageInstallment />
      <AdvantageDelivery />
      <AdvantageWarranty />
      <AdvantagePrice />
      <AdvantageExperience />
      <AdvantageConsultation />
      <div className={styles.advantage__text}>{t("advantage.assembly")}</div>
      <div className={styles.advantage__text}>{t("advantage.installment")}</div>
      <div className={styles.advantage__text}>{t("advantage.delivery")}</div>
      <div className={styles.advantage__text}>{t("advantage.warranty")}</div>
      <div className={styles.advantage__text}>{t("advantage.price")}</div>
      <div className={styles.advantage__text}>{t("advantage.experience")}</div>
      <div className={styles.advantage__text}>
        {t("advantage.consultation")}
      </div>
    </div>
  );
}

export default Advantage;
