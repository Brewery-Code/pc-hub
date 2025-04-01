import { useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { ProfileIcon } from "../../../../assets/icons";
import styles from "./Register.module.css";
import MRegisterForm from "../../MRegisterForm/MRegisterForm";

interface IRegisterProps {
  className?: string;
}

function Register({ className }: IRegisterProps) {
  const [isRegisterFormOpen, setIsRegisterFormOpen] = useState(false);
  const handleRegisterForm = () => {
    setIsRegisterFormOpen((prev) => !prev);
  };

  const { t } = useTranslation("modals");

  return (
    <h6 className={clsx(className, styles.register)}>
      <ProfileIcon
        className={clsx(styles["register__profile-icon"], "only-mobile")}
      />
      <button className={styles["register__sign-in"]}>
        {t("burgerMenu.signIn")}
      </button>
      <span className={styles.register__separator}>|</span>
      <button
        className={styles["register__sign-up"]}
        onClick={handleRegisterForm}
      >
        {t("burgerMenu.signUp")}
      </button>
      <MRegisterForm
        isFormOpen={isRegisterFormOpen}
        handleForm={handleRegisterForm}
      />
    </h6>
  );
}

export default Register;
