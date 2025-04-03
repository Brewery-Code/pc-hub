import { useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { ProfileIcon } from "../../../../assets/icons";
import styles from "./Register.module.css";
import MRegisterForm from "../../MRegisterForm/MRegisterForm";
import MSignInFrom from "../../MSignInFrom/MSignInFrom";
import { SignFormState } from "../../../../store/types";

interface IRegisterProps {
  className?: string;
}

export default function Register({ className }: IRegisterProps) {
  const [whichFormIsOpen, setWhichFormIsOpen] = useState<SignFormState>(
    SignFormState.None,
  );
  const handleForm = (formState: SignFormState) => {
    setWhichFormIsOpen(formState);
  };

  const { t } = useTranslation("modals");

  return (
    <h6 className={clsx(className, styles.register)}>
      <ProfileIcon
        className={clsx(styles["register__profile-icon"], "only-mobile")}
      />
      <button
        className={styles["register__sign-in"]}
        onClick={() => handleForm(SignFormState.SignIn)}
      >
        {t("burgerMenu.signIn")}
      </button>
      <MSignInFrom isFormOpen={whichFormIsOpen} handleForm={handleForm} />
      <span className={styles.register__separator}>|</span>
      <button
        className={styles["register__sign-up"]}
        onClick={() => handleForm(SignFormState.SignUp)}
      >
        {t("burgerMenu.signUp")}
      </button>
      <MRegisterForm isFormOpen={whichFormIsOpen} handleForm={handleForm} />
    </h6>
  );
}
