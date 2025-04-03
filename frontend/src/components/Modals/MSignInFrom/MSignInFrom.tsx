import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/store";
import { SignFormState } from "../../../store/types";
import { UIButton, UICross, UIInputField, UIModalBody } from "../../UI";
import {
  FacebookIcon,
  GoogleIcon,
  PasswordVisibilityIcon,
} from "../../../assets/icons";
import styles from "./MSignInFrom.module.css";
import { fetchUserInfo, loginUser } from "../../../store/user/user.slice";

interface MRegisterFormProps {
  isFormOpen: SignFormState;
  handleForm: (formState: SignFormState) => void;
}

export default function MSignInForm({
  isFormOpen,
  handleForm,
}: MRegisterFormProps) {
  const { access } = useSelector((state: RootState) => state.user);
  useEffect(() => {
    if (access != null) {
      handleForm(SignFormState.None);
      dispatch(fetchUserInfo({ access: access }));
    }
  }, [access]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isEmailInvalid, setEmailInvalid] = useState(false);
  const [isPasswordInvalid, setPasswordInvalid] = useState<boolean | string>(
    false,
  );

  const dispatch = useAppDispatch();
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (!/^[a-zA-Z0-9._\\]+@[a-z]+(\.[a-z]+)+/.test(formData.email)) {
      setEmailInvalid(true);
      return;
    }
    if (formData.password.length < 8) {
      setPasswordInvalid(t("signIn.passwordShort"));
      return;
    }
    if (!/^[^а-яА-Я\s]*$/.test(formData.password)) {
      setPasswordInvalid(t("signIn.passwordOnlySymbols"));
      return;
    }

    dispatch(
      loginUser({
        email: formData.email,
        password: formData.password,
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
      isModalOpen={isFormOpen === SignFormState.SignIn}
      setIsModalOpen={() => handleForm(SignFormState.None)}
    >
      <div className={styles.modal__body}>
        <h6 className={styles.modal__title}>{t("signIn.title")}</h6>
        <UICross
          className={styles.modal__cross}
          closeMenu={() => handleForm(SignFormState.None)}
        />
        <form className={styles.modal__form} onSubmit={submitForm} noValidate>
          <div className={styles.modal__inputContainer}>
            <UIInputField
              className={styles.modal__input}
              type="email"
              placeholder={t("signIn.inputEmail")}
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
              {t("signIn.invalidEmail")}
            </div>
          </div>
          <div className={styles.modal__inputContainer}>
            <UIInputField
              className={styles.modal__input}
              type={isPasswordVisible ? "text" : "password"}
              placeholder={t("signIn.inputPassword")}
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
            <div
              className={clsx(
                styles.modal__error,
                isPasswordInvalid && styles.modal__error_active,
              )}
            >
              {isPasswordInvalid}
            </div>
          </div>
          <p className={styles.modal__forgotPassword}>
            {t("signIn.forgotPassword")}?
          </p>
          <UIButton
            className={styles.form__submit}
            color="secondary"
            style="filled"
            type="submit"
          >
            {t("signIn.register")}
          </UIButton>
        </form>
        <div className={styles.modal__row}>
          <span className={styles.modal__line}></span>
          <div className={styles.modal__registered}>
            {t("signIn.otherSignInWays")}
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
          onClick={() => handleForm(SignFormState.SignUp)}
        >
          {t("signIn.notRegister")}? <span>{t("signIn.register")}</span>
        </div>
      </div>
    </UIModalBody>,
    document.getElementById("modals")!,
  );
}
