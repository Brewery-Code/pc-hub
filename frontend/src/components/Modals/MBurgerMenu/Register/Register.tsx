import { useTranslation } from "react-i18next";
import styles from "./Register.module.css";
import clsx from "clsx";
import { ProfileIcon } from "../../../../assets/icons";

interface IRegisterProps {
  className?: string;
}

function Register({ className }: IRegisterProps) {
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
      <button className={styles["register__sign-up"]}>
        {t("burgerMenu.signUp")}
      </button>
    </h6>
  );
}

export default Register;
