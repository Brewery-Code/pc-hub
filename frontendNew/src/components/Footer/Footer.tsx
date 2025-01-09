import {
  InstagramIcon,
  FacebookIcon,
  ViberIcon,
  TelegramIcon,
  YouTubeIcon,
  LinkedInIcon,
} from "../../assets/icons";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="footer__container">
        <div className={styles.footer__body}>
          <div className={styles.block}>
            <h6 className={styles.block__title}>Information</h6>
            <ul className={styles.blok__list}>
              <li className={styles["block__list-item"]}>Test</li>
              <li className={styles["block__list-item"]}>Test</li>
              <li className={styles["block__list-item"]}>Test</li>
              <li className={styles["block__list-item"]}>Test</li>
              <li className={styles["block__list-item"]}>Test</li>
              <li className={styles["block__list-item"]}>Test</li>
              <li className={styles["block__list-item"]}>Test</li>
              <li className={styles["block__list-item"]}>Test</li>
              <li className={styles["block__list-item"]}>Test</li>
              <li className={styles["block__list-item"]}>Test</li>
            </ul>
          </div>
          <div className={styles.block}>
            <h6 className={styles.block__title}>Information</h6>
            <ul className={styles.blok__list}>
              <li className={styles["block__list-item"]}>Test</li>
              <li className={styles["block__list-item"]}>Test</li>
              <li className={styles["block__list-item"]}>Test</li>
              <li className={styles["block__list-item"]}>Test</li>
              <li className={styles["block__list-item"]}>Test</li>
              <li className={styles["block__list-item"]}>Test</li>
              <li className={styles["block__list-item"]}>Test</li>
              <li className={styles["block__list-item"]}>Test</li>
              <li className={styles["block__list-item"]}>Test</li>
              <li className={styles["block__list-item"]}>Test</li>
            </ul>
          </div>
          <div className={styles.block}>
            <h6 className={styles.block__title}>Information</h6>
            <ul className={styles.blok__list}>
              <li className={styles["block__list-item"]}>Test</li>
              <li className={styles["block__list-item"]}>Test</li>
              <li className={styles["block__list-item"]}>Test</li>
              <li className={styles["block__list-item"]}>Test</li>
              <li className={styles["block__list-item"]}>Test</li>
              <li className={styles["block__list-item"]}>Test</li>
              <li className={styles["block__list-item"]}>Test</li>
              <li className={styles["block__list-item"]}>Test</li>
              <li className={styles["block__list-item"]}>Test</li>
              <li className={styles["block__list-item"]}>Test</li>
            </ul>
          </div>
          <div className={styles.block}>
            <h6 className={styles.block__title}>Information</h6>
            <ul className={styles["block__social-list"]}>
              <li className={styles["block__social-list-item"]}>
                <InstagramIcon />
              </li>
              <li className={styles["block__social-list-item"]}>
                <FacebookIcon />
              </li>
              <li className={styles["block__social-list-item"]}>
                <ViberIcon />
              </li>
              <li className={styles["block__social-list-item"]}>
                <TelegramIcon />
              </li>
              <li className={styles["block__social-list-item"]}>
                <YouTubeIcon />
              </li>
              <li className={styles["block__social-list-item"]}>
                <LinkedInIcon />
              </li>
            </ul>
            <h6 className={styles.block__title}>Information</h6>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
