import clsx from "clsx";
import {
  CartIcon,
  CommentIcon,
  EyeIcon,
  LikeIcon,
  ProfileIcon,
} from "../../assets/icons";
import styles from "./User.module.css";
import { useTranslation } from "react-i18next";
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";
import Wishlist from "./Wishlist/Wishlist";
import { useEffect } from "react";
import Profile from "./Profile/Profile";

const PrintContent = ({
  nav,
  setSearchParams,
}: {
  nav: string | null;
  setSearchParams: (params: URLSearchParamsInit) => void;
}) => {
  if (nav === "history") return <div className="">Later</div>;
  else if (nav === "wishlist") return <Wishlist />;
  else if (nav === "viewed") return <div className="">Later</div>;
  else if (nav === "reviews") return <div className="">Later</div>;
  else if (nav === "profile") return <Profile />;
  else setSearchParams({ nav: "profile" });
};

export default function User() {
  const { t } = useTranslation("user");
  const [searchParams, setSearchParams] = useSearchParams();
  const nav = searchParams.get("nav");

  useEffect(() => {
    if (!nav) setSearchParams({ nav: "profile" });
  }, []);

  return (
    <div className={styles.user}>
      <div className="user__container">
        <div className={styles.user__body}>
          <ul className={styles.nav}>
            <li
              className={clsx(
                styles.nav__item,
                nav === "history" && styles.nav__item_active,
              )}
              onClick={() => setSearchParams({ nav: "history" })}
            >
              <CartIcon className={styles.nav__itemIcon} />
              {t("nav.history")}
            </li>
            <li
              className={clsx(
                styles.nav__item,
                nav === "wishlist" && styles.nav__item_active,
              )}
              onClick={() => setSearchParams({ nav: "wishlist" })}
            >
              <LikeIcon
                className={clsx(styles.nav__itemIcon, styles.nav__itemIconLike)}
              />
              {t("nav.wishlist")}
            </li>
            <li
              className={clsx(
                styles.nav__item,
                nav === "viewed" && styles.nav__item_active,
              )}
              onClick={() => setSearchParams({ nav: "viewed" })}
            >
              <EyeIcon className={styles.nav__itemIcon} />
              {t("nav.viewed")}
            </li>
            <li
              className={clsx(
                styles.nav__item,
                nav === "reviews" && styles.nav__item_active,
              )}
              onClick={() => setSearchParams({ nav: "reviews" })}
            >
              <CommentIcon className={styles.nav__itemIcon} />
              {t("nav.reviews")}
            </li>
            <li
              className={clsx(
                styles.nav__item,
                nav === "profile" && styles.nav__item_active,
              )}
              onClick={() => setSearchParams({ nav: "profile" })}
            >
              <ProfileIcon className={styles.nav__itemIcon} />
              {t("nav.profile")}
            </li>
          </ul>
          <PrintContent nav={nav} setSearchParams={setSearchParams} />
        </div>
      </div>
    </div>
  );
}
