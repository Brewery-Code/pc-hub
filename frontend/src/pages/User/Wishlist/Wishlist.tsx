import { useTranslation } from "react-i18next";
import { CopyLinkIcon, LetterIcon, ShareIcon } from "../../../assets/icons";
import styles from "./Wishlist.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { UIProductCard } from "../../../components/UI";
import { IWishlist } from "../../../store/types";
import { TFunctionNonStrict } from "i18next";

function WishList({
  wishlist,
  t,
}: {
  wishlist: IWishlist;
  t: TFunctionNonStrict<"user", undefined>;
}) {
  if (wishlist.items.length > 0) {
    return (
      <ul className={styles.list}>
        {wishlist.items.map((product, index) => (
          <UIProductCard product={product} type="row" key={index} />
        ))}
      </ul>
    );
  } else return <div className={styles.list__empty}>{t("wishlist.empty")}</div>;
}

export default function Wishlist() {
  const { t } = useTranslation("user");
  const { wishlist } = useSelector((state: RootState) => state.user);

  return (
    <div className={styles.wishlist}>
      <h4 className={styles.wishlist__title}>{t("wishlist.title")}</h4>
      <div className={styles.nav}>
        <div className={styles.nav__item}>
          <ShareIcon className={styles.nav__itemIcon} />
          {t("wishlist.share")}
        </div>
        <div className={styles.nav__item}>
          <CopyLinkIcon className={styles.nav__itemIcon} />
          {t("wishlist.share")}
        </div>
        <div className={styles.nav__item}>
          <LetterIcon className={styles.nav__itemIcon} />
          {t("wishlist.share")}
        </div>
      </div>
      <WishList wishlist={wishlist} t={t} />
    </div>
  );
}
