import { useTranslation } from "react-i18next";
import styles from "./Register.module.css";
import clsx from "clsx";

interface IRegisterProps {
  className?: string;
}

function Register({ className }: IRegisterProps) {
  const { t } = useTranslation("modals");

  return (
    <h6 className={clsx(className, styles.register)}>
      <button className={styles["register__sign-in"]}>
        {t("register.signIn")}
      </button>
      <span className={styles.register__separator}>|</span>
      <button className={styles["register__sign-up"]}>
        {t("register.signUp")}
      </button>
    </h6>
  );
}

export default Register;
