import { useTranslation } from "react-i18next";
import {
  InstagramIcon,
  FacebookIcon,
  ViberIcon,
  TelegramIcon,
  YouTubeIcon,
  LinkedInIcon,
  SendIcon,
} from "../../../assets/icons";
import { UIInputField } from "../../UI";
import styles from "./SocialBlock.module.css";

function SocialBlock() {
  const { t } = useTranslation("components");

  return (
    <div className={styles.social}>
      <div className={styles.social__block}>
        <h6 className={styles.social__title}>{t("subscription.follow")}</h6>
        <ul className={styles["social__list"]}>
          <li className={styles["social__list-item"]}>
            <InstagramIcon className={styles["social__list-instagram"]} />
          </li>
          <li className={styles["social__list-item"]}>
            <FacebookIcon className={styles["social__list-facebook"]} />
          </li>
          <li className={styles["social__list-item"]}>
            <ViberIcon className={styles["social__list-viber"]} />
          </li>
          <li className={styles["social__list-item"]}>
            <TelegramIcon className={styles["social__list-telegram"]} />
          </li>
          <li className={styles["social__list-item"]}>
            <YouTubeIcon className={styles["social__list-youtube"]} />
          </li>
          <li className={styles["social__list-item"]}>
            <LinkedInIcon className={styles["social__list-linkedin"]} />
          </li>
        </ul>
      </div>
      <div className={styles.social__block}>
        <h6 className={styles.social__title}>
          {t("subscription.subscription")}
        </h6>
        <form className={styles.subscription} action="">
          <UIInputField
            className={styles.subscription__field}
            type="text"
            placeholder={t("subscription.email")}
            isWidth
          />
          <button className={styles.subscription__submit}>
            <SendIcon className={styles["subscription__submit-icon"]} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default SocialBlock;
