import { useEffect, useState } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/store";
import { registerUser } from "../../../store/user/user.slice";
import { SignFormState } from "../../../store/types";
import { UIButton, UICross, UIInputField, UIModalBody } from "../../UI";
import { FacebookIcon, GoogleIcon, EyeIcon } from "../../../assets/icons";
import styles from "./MRegisterFrom.module.css";

interface MRegisterFormProps {
  isFormOpen: SignFormState;
  handleForm: (formState: SignFormState) => void;
}

function MRegisterForm({ isFormOpen, handleForm }: MRegisterFormProps) {
  const { access } = useSelector((state: RootState) => state.user);
  useEffect(() => {
    if (access != null) {
      handleForm(SignFormState.None);
    }
  }, [access]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isNameInvalid, setNameInvalid] = useState<boolean | string>(false);
  const [isEmailInvalid, setEmailInvalid] = useState(false);
  const [isPasswordInvalid, setPasswordInvalid] = useState<boolean | string>(
    false,
  );

  const dispatch = useAppDispatch();
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (!/^[a-zA-Zа-яА-Я]+$/.test(formData.name)) {
      setNameInvalid(t("signUp.onlyLetters"));
      return;
    }

    if (!/^[A-ZА-Я][a-zа-я]*$/.test(formData.name)) {
      setNameInvalid(t("signUp.firstCapital"));
      return;
    }

    if (!/^[a-zA-Z0-9._\\]+@[a-z]+(\.[a-z]+)+/.test(formData.email)) {
      setEmailInvalid(true);
      return;
    }
    if (formData.password.length < 8) {
      setPasswordInvalid(t("signUp.passwordShort"));
      return;
    }
    if (!/^[^а-яА-Я\s]*$/.test(formData.password)) {
      setPasswordInvalid(t("signUp.passwordOnlySymbols"));
      return;
    }

    dispatch(
      registerUser({
        userName: formData.name,
        userEmail: formData.email,
        userPassword: formData.password,
      }),
    );
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handlePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const { t } = useTranslation("modals");

  return createPortal(
    <UIModalBody
      className={styles.modal}
      isModalOpen={isFormOpen === SignFormState.SignUp}
      setIsModalOpen={() => handleForm(SignFormState.None)}
    >
      <div className={styles.modal__body}>
        <h6 className={styles.modal__title}>{t("signUp.title")}</h6>
        <UICross
          className={styles.modal__cross}
          closeMenu={() => handleForm(SignFormState.None)}
        />
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
              onClick={() => setNameInvalid(false)}
            />
            <div
              className={clsx(
                styles.modal__error,
                isNameInvalid && styles.modal__error_active,
              )}
            >
              {isNameInvalid}
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
              onClick={() => setEmailInvalid(false)}
            />
            <div
              className={clsx(
                styles.modal__error,
                isEmailInvalid && styles.modal__error_active,
              )}
            >
              {t("signUp.invalidEmail")}
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
            <EyeIcon
              className={clsx(
                styles.modal__passwordVisibility,
                isPasswordVisible && styles.modal__passwordVisibility_active,
              )}
              onClick={handlePasswordVisibility}
            />
            <div
              className={clsx(
                styles.modal__error,
                isPasswordInvalid && styles.modal__error_active,
              )}
            >
              {isPasswordInvalid}
            </div>
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
        <div
          className={styles.signIn}
          onClick={() => handleForm(SignFormState.SignIn)}
        >
          {t("signUp.alreadyRegistered")}? <span>{t("signUp.signIn")}</span>
        </div>
      </div>
    </UIModalBody>,
    document.getElementById("modals")!,
  );
}

export default MRegisterForm;
