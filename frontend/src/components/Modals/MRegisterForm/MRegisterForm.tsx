import { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { UIButton, UICross, UIInputField, UIModalBody } from "../../UI";
import {
  FacebookIcon,
  GoogleIcon,
  PasswordVisibilityIcon,
} from "../../../assets/icons";
import styles from "./MRegister.module.css";
import clsx from "clsx";

interface MRegisterFormProps {
  isFormOpen: boolean;
  handleForm: () => void;
}

function MRegisterForm({ isFormOpen, handleForm }: MRegisterFormProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handlePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const { t } = useTranslation("modals");

  return createPortal(
    <UIModalBody
      className={styles.modal}
      isModalOpen={isFormOpen}
      setIsModalOpen={handleForm}
    >
      <div className={styles.modal__body}>
        <h6 className={styles.modal__title}>{t("signUp.title")}</h6>
        <UICross className={styles.modal__cross} closeMenu={handleForm} />
        <form className={styles.modal__form} action="" method="post">
          <UIInputField
            className={styles.modal__input}
            type="tel"
            placeholder={t("signUp.inputPhone")}
          />
          <div className={styles.modal__inputContainer}>
            <UIInputField
              className={styles.modal__input}
              type={isPasswordVisible ? "text" : "password"}
              placeholder={t("signUp.inputPassword")}
            />
            <PasswordVisibilityIcon
              className={clsx(
                styles.modal__passwordVisibility,
                isPasswordVisible && styles.modal__passwordVisibility_active,
              )}
              onClick={handlePasswordVisibility}
            />
          </div>
          <p className={styles.modal__terms}>
            {t("signUp.agreement")}{" "}
            <Link to="/" className={styles.modal__termsLink}>
              {t("signUp.termsAndConditions")}
            </Link>
          </p>
          <UIButton
            className={styles.form__submit}
            color="secondary"
            style="filled"
          >
            {t("signUp.register")}
          </UIButton>
        </form>
        <div className={styles.modal__row}>
          <span className={styles.modal__line}></span>
          <div className={styles.modal__registered}>
            {t("signUp.otherRegisterWays")}
          </div>
          <span className={styles.modal__line}></span>
        </div>
        <div className={styles.social}>
          <button className={styles.social__item}>
            <GoogleIcon className={styles.social__google} />
            Google
          </button>
          <button className={styles.social__item}>
            <FacebookIcon className={styles.social__facebook} />
            Facebook
          </button>
        </div>
        <div className={styles.signIn}>
          {t("signUp.alreadyRegistered")}? <span>{t("signUp.signIn")}</span>
        </div>
      </div>
    </UIModalBody>,
    document.getElementById("modals")!,
  );
}

export default MRegisterForm;
