import { useSelector } from "react-redux";
import styles from "./Profile.module.css";
import { RootState } from "../../../store/store";
import { useTranslation } from "react-i18next";
import {
  FacebookIcon,
  GoogleColorfulIcon,
  PenIcon,
} from "../../../assets/icons";

export default function Profile() {
  const { photo, name, surname, phone, email } = useSelector(
    (state: RootState) => state.user,
  );
  const { t } = useTranslation("user");

  return (
    <div className={styles.profile}>
      <h4 className={styles.profile__title}>{t("profile.title")}</h4>
      <div className={styles.profile__body}>
        <div className={styles.avatar}>
          <img src={photo} alt="profileImg" className={styles.avatar__img} />
          <button className={styles.avatar__imgUpload}>
            {t("profile.uploadImg")}
          </button>
        </div>
        <div className={styles.profile__main}>
          <div className={styles.info}>
            <div className={styles.info__item}>
              <div className={styles.info__title}>{t("profile.fullName")}</div>
              <div className={styles.info__data}>
                {name} {surname}
              </div>
              <PenIcon />
            </div>
            <div className={styles.info__item}>
              <div className={styles.info__title}>{t("profile.phone")}</div>
              <div className={styles.info__data}>{phone ? phone : "Empty"}</div>
              <PenIcon />
            </div>
            <div className={styles.info__item}>
              <div className={styles.info__title}>{t("profile.email")}</div>
              <div className={styles.info__data}>{email}</div>
              <PenIcon />
            </div>
            <div className={styles.info__item}>
              <div className={styles.info__title}>{t("profile.delivery")}</div>
              <div className={styles.info__data}>Empty</div>
              <PenIcon />
            </div>
          </div>
          <div className={styles.profile__separator}></div>
          <div className={styles.social}>
            <div className={styles.profile__subtitle}>
              {t("profile.social")}
            </div>
            <div className={styles.social__row}>
              <div className={styles.social__item}>
                <div className={styles.social__iconContainer}>
                  <FacebookIcon className={styles.social__facebook} />
                </div>
                <div className={styles.social__buttonCol}>
                  <div className={styles.social__name}>Facebook</div>
                  <button className={styles.social__link}>
                    {t("profile.linkAccount")}
                  </button>
                </div>
              </div>
              <div className={styles.social__item}>
                <div className={styles.social__iconContainer}>
                  <GoogleColorfulIcon className={styles.social__google} />
                </div>
                <div className={styles.social__buttonCol}>
                  <div className={styles.social__name}>Google</div>
                  <button className={styles.social__link}>
                    {t("profile.linkAccount")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.profile__separator}></div>
          <div className={styles.notification}>
            <div className={styles.profile__subtitle}>
              {t("profile.notification")}
            </div>
            <div className={styles.notification__body}>
              <div className={styles.notification__item}>
                <div className={styles.notification__checkbox}></div>
                {t("profile.notificationSys")}
              </div>
              <div className={styles.notification__item}>
                <div className={styles.notification__checkbox}></div>
                {t("profile.companyNews")}
              </div>
              <div className={styles.notification__item}>
                <div className={styles.notification__checkbox}></div>
                {t("profile.promotions")}
              </div>
              <div className={styles.notification__item}>
                <div className={styles.notification__checkbox}></div>
                {t("profile.industryNews")}
              </div>
            </div>
          </div>
          <div className={styles.profile__separator}></div>
          <div className={styles.nav}>
            <button className={styles.nav__button}>
              {t("profile.changePassword")}
            </button>
            <button className={styles.nav__button}>
              {t("profile.logOut")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
