import { useTranslation } from "react-i18next";
import styles from "./Social.module.css";
import {
  InstagramIcon,
  FacebookIcon,
  ViberIcon,
  TelegramIcon,
  YouTubeIcon,
  LinkedInIcon,
} from "../../../../assets/icons";
import clsx from "clsx";

interface ISocialProps {
  className: string;
}

function Social({ className }: ISocialProps) {
  const { t } = useTranslation();

  return (
    <div className={clsx(className, styles.social)}>
      <h6 className={styles.social__title}>{t("subscription.follow")}</h6>
      <div className={styles.social__list}>
        <div className={styles.social__item}>
          <InstagramIcon className={styles["social__icon-instagram"]} />
        </div>
        <div className={styles.social__item}>
          <FacebookIcon className={styles["social__icon-facebook"]} />
        </div>
        <div className={styles.social__item}>
          <ViberIcon className={styles["social__icon-viber"]} />
        </div>
        <div className={styles.social__item}>
          <TelegramIcon className={styles["social__icon-telegram"]} />
        </div>
        <div className={styles.social__item}>
          <YouTubeIcon className={styles["social__icon-youtube"]} />
        </div>
        <div className={styles.social__item}>
          <LinkedInIcon className={styles["social__icon-linkedin"]} />
        </div>
      </div>
    </div>
  );
}

export default Social;
