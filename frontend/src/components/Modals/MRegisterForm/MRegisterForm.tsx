import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { data, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { UIButton, UICross, UIInputField, UIModalBody } from "../../UI";
import {
  FacebookIcon,
  GoogleIcon,
  PasswordVisibilityIcon,
} from "../../../assets/icons";
import styles from "./MRegister.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/store";
import { registerUser } from "../../../store/user/user.slice";

interface MRegisterFormProps {
  isFormOpen: boolean;
  handleForm: () => void;
}

function MRegisterForm({ isFormOpen, handleForm }: MRegisterFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isEmailError, setEmailError] = useState(false);
  const [isNameError, setNameError] = useState<boolean | string>(false);
  const dispatch = useAppDispatch();
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (/^[A-ZА_Я]/.test(formData.name)) {
      if (/^[a-zA-Zа-яА-Я]+$/.test(formData.name)) {
        if (/^[a-zA-Z0-9._\\]+@[a-z]+(\.[a-z]+)+/.test(formData.email)) {
          dispatch(
            registerUser({
              userName: formData.name,
              userEmail: formData.email,
              userPassword: formData.password,
            }),
          );
        } else setEmailError(true);
      } else setNameError("Must have only one word and contain only latters");
    } else setNameError("First latter must be capital");
  };

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
        <form className={styles.modal__form} onSubmit={submitForm} noValidate>
          <div className={styles.modal__inputContainer}>
            <UIInputField
              className={styles.modal__input}
              type="text"
              placeholder={t("signUp.inputName")}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              onClick={() => setNameError(false)}
            />
            <div
              className={clsx(
                styles.modal__error,
                isNameError && styles.modal__error_active,
              )}
            >
              {isNameError}
            </div>
          </div>
          <div className={styles.modal__inputContainer}>
            <UIInputField
              className={styles.modal__input}
              type="email"
              placeholder={t("signUp.inputEmail")}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              onClick={() => setEmailError(false)}
            />
            <div
              className={clsx(
                styles.modal__error,
                isEmailError && styles.modal__error_active,
              )}
            >
              Email invalid
            </div>
          </div>
          <div className={styles.modal__inputContainer}>
            <UIInputField
              className={styles.modal__input}
              type={isPasswordVisible ? "text" : "password"}
              placeholder={t("signUp.inputPassword")}
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
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
            type="submit"
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
