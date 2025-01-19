import clsx from "clsx";
import { CartIcon, ComparisonIcon, LikeIcon } from "../../../../assets/icons";
import styles from "./Navigation.module.css";

interface INavigationProps {
  isClassName?: string;
}

function Navigation({ isClassName }: INavigationProps) {
  return (
    <div className={clsx(styles.navigation, isClassName && isClassName)}>
      <div className={clsx(styles.navigation__comparison, "only-desktop")}>
        <ComparisonIcon className={styles["navigation__comparison-icon"]} />
      </div>
      <div className={clsx(styles.navigation__like, "only-desktop")}>
        <LikeIcon className={styles["navigation__like-icon"]} />
      </div>
      <div className={styles.navigation__cart}>
        <CartIcon className={styles["navigation__cart-icon"]} />
      </div>
    </div>
  );
}

export default Navigation;
