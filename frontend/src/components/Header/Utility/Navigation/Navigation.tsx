import clsx from "clsx";
import { CartIcon, ComparisonIcon, LikeIcon } from "../../../../assets/icons";
import styles from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../store/store";
import { useEffect, useState } from "react";
import { fetchCart } from "../../../../store/user/user.slice";
import MCart from "../../../Modals/MCart/MCart";

interface INavigationProps {
  isClassName?: string;
}

function Navigation({ isClassName }: INavigationProps) {
  const { access, cart } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCart({ access }));
  }, [dispatch, access]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <div className={clsx(styles.navigation, isClassName && isClassName)}>
      <div className={clsx(styles.navigation__comparison, "only-desktop")}>
        <ComparisonIcon className={styles.navigation__comparisonIcon} />
      </div>
      <div className={clsx(styles.navigation__like, "only-desktop")}>
        <LikeIcon className={styles.navigation__likeIcon} />
      </div>
      <div
        className={clsx(
          styles.navigation__cart,
          cart.items.length > 0 && styles.navigation__cartIcon_active,
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
