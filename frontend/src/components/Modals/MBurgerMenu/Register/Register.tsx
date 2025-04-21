import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import {
  ArrowBold,
  CartIcon,
  CommentIcon,
  EyeIcon,
  LikeIcon,
  ProfileIcon,
} from "../../../../assets/icons";
import styles from "./Register.module.css";
import MRegisterForm from "../../MRegisterForm/MRegisterForm";
import MSignInFrom from "../../MSignInFrom/MSignInFrom";
import { SignFormState } from "../../../../store/types";
import { useAuth } from "../../../../hooks";
import { RootState, useAppDispatch } from "../../../../store/store";
import { signOutUser } from "../../../../store/user/user.slice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RenderAccordionItem = ({
  Icon,
  text,
  link,
}: {
  Icon: React.ElementType;
  text: string;
  link: string;
}) => (
  <Link to={`${link}`} className={styles.accordion__item}>
    <Icon className={styles.accordion__itemIcon} />
    {text}
  </Link>
);

interface IRegisterProps {
  className?: string;
}

export default function Register({ className }: IRegisterProps) {
  const { email } = useSelector((state: RootState) => state.user);
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();
  const { t } = useTranslation("modals");

  const accordionRef = useRef<HTMLUListElement>(null);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [whichFormIsOpen, setWhichFormIsOpen] = useState<SignFormState>(
    SignFormState.None,
  );

  useEffect(() => {
    if (isAuth) {
      closeForms();
    }
  }, [isAuth]);

  const toggleAccordion = () => setIsAccordionOpen((prev) => !prev);

  const openForm = (form: SignFormState) => setWhichFormIsOpen(form);
  const closeForms = () => setWhichFormIsOpen(SignFormState.None);

  return (
    <div className={clsx(className, styles.register)}>
      <div
        className={styles.register__row}
        onClick={() => {
          if (isAuth) toggleAccordion();
        }}
      >
        <ProfileIcon
          className={clsx(styles["register__profile-icon"], {
            "only-mobile": !isAuth,
          })}
        />

        {!isAuth ? (
          <>
            <button
              className={styles["register__sign-in"]}
              onClick={() => openForm(SignFormState.SignIn)}
            >
              {t("burgerMenu.signIn")}
            </button>
            <MSignInFrom isFormOpen={whichFormIsOpen} handleForm={openForm} />

            <span className={styles.register__separator}>|</span>

            <button
              className={styles["register__sign-up"]}
              onClick={() => openForm(SignFormState.SignUp)}
            >
              {t("burgerMenu.signUp")}
            </button>
            <MRegisterForm isFormOpen={whichFormIsOpen} handleForm={openForm} />
          </>
        ) : (
          <>
            <div className={styles.user}>
              <div className={styles.user__email}>{email}</div>
              <button
                className={styles.user__signOut}
                onClick={() => dispatch(signOutUser())}
              >
                {t("burgerMenu.signOut")}
              </button>
            </div>
            <ArrowBold
              className={clsx(
                "only-mobile",
                styles["user__arrowIcon"],
                isAccordionOpen && styles["user__arrowIcon_active"],
              )}
            />
          </>
        )}
      </div>

      {isAuth && (
        <div className="only-mobile">
          <ul
            className={clsx(styles.accordion, "only-mobile")}
            ref={accordionRef}
            style={{
              maxHeight: isAccordionOpen
                ? accordionRef.current?.scrollHeight
                : 0,
              marginTop: isAccordionOpen ? 12 : 0,
            }}
          >
            <RenderAccordionItem
              Icon={CartIcon}
              text={t("burgerMenu.orderHistory")}
              link={"/user/?nav=history"}
            />
            <RenderAccordionItem
              Icon={LikeIcon}
              text={t("burgerMenu.liked")}
              link={"/user/?nav=wishlist"}
            />
            <RenderAccordionItem
              Icon={EyeIcon}
              text={t("burgerMenu.viewed")}
              link={"/user/?nav=viewed"}
            />
            <RenderAccordionItem
              Icon={CommentIcon}
              text={t("burgerMenu.myReviews")}
              link={"/user/?nav=reviews"}
            />
            <RenderAccordionItem
              Icon={ProfileIcon}
              text={t("burgerMenu.profile")}
              link={"/user/?nav=profile"}
            />
          </ul>
          <div className={styles.register__line}></div>
        </div>
      )}
    </div>
  );
}
