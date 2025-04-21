import clsx from "clsx";
import { CartIcon, ComparisonIcon, LikeIcon } from "../../../../assets/icons";
import styles from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { useState } from "react";
import MCart from "../../../Modals/MCart/MCart";
import { Link } from "react-router-dom";

interface INavigationProps {
  isClassName?: string;
}

function Navigation({ isClassName }: INavigationProps) {
  const { cart, wishlist } = useSelector((state: RootState) => state.user);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <div className={clsx(styles.navigation, isClassName && isClassName)}>
      <div className={clsx(styles.navigation__comparison, "only-desktop")}>
        <ComparisonIcon className={styles.navigation__comparisonIcon} />
      </div>
      <Link
        to={"/user/?nav=wishlist"}
        className={clsx(
          styles.navigation__like,
          "only-desktop",
          wishlist?.items?.length > 0 && styles.navigation__like_active,
        )}
        wishlist-quantity={wishlist?.items?.length}
      >
        <LikeIcon className={styles.navigation__likeIcon} />
      </Link>
      <div
        className={clsx(
          styles.navigation__cart,
          cart?.items?.length > 0 && styles.navigation__cart_active,
        )}
        onClick={toggleCart}
        cart-quantity={cart.quantity}
      >
        <CartIcon className={clsx(styles.navigation__cartIcon)} />
      </div>
      <MCart isCartOpen={isCartOpen} toggleCart={toggleCart} />
    </div>
  );
}

export default Navigation;
