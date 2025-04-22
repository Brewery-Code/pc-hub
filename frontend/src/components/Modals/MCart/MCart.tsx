import styles from "./MCart.module.css";
import { createPortal } from "react-dom";
import { UIButton, UICross, UIModalBody, UIProductPrice } from "../../UI";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../store/store";
import { useEffect } from "react";
import { changeCartQuantity, fetchCart } from "../../../store/user/user.slice";
import { BasketIcon } from "../../../assets/icons";

interface IMCartProps {
  isCartOpen: boolean;
  toggleCart: () => void;
}

export default function MCart({ isCartOpen, toggleCart }: IMCartProps) {
  const { t } = useTranslation("modals");
  const { access, cart } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCart({ access }));
  }, [dispatch, access]);

  const changeQuantity = async (product_id: string, quantity: number) => {
    await dispatch(changeCartQuantity({ access, product_id, quantity }));
    dispatch(fetchCart({ access }));
  };
  return createPortal(
    <UIModalBody
      isModalOpen={isCartOpen}
      setIsModalOpen={toggleCart}
      className={styles.modal}
    >
      <div className={styles.modal__body}>
        <div className={styles.modal__head}>
          <h6 className={styles.modal__title}>{t("cart.title")}</h6>
          <UICross className={styles.modal__cross} closeMenu={toggleCart} />
        </div>
        <ul className={styles.modal__list}>
          {cart.items.map((product, index) => (
            <li key={index} className={styles.product}>
              <img
                src={product.main_image}
                alt="productImg"
                className={styles.product__img}
              />
              <div className={styles.product__name}>{product.name}</div>
              <div className={styles.quantity}>
                <button
                  className={styles.quantity__subtract}
                  onClick={() => changeQuantity(product.id, -1)}
                ></button>
                <div className={styles.quantity__number}>
                  {product.quantity}
                </div>
                <button
                  className={styles.quantity__add}
                  onClick={() => changeQuantity(product.id, 1)}
                ></button>
              </div>
              <div className={styles.product__price}>
                {
                  <UIProductPrice
                    price={product.price * product.quantity}
                    discount_price={
                      product.discounted_price &&
                      product.discounted_price * product.quantity
                    }
                  />
                }
              </div>
              <button
                className={styles.product__delete}
                onClick={() => changeQuantity(product.id, -product.quantity)}
              >
                <BasketIcon />
              </button>
            </li>
          ))}
        </ul>
        <div className={styles.modal__buttons}>
          <UIButton
            color="secondary"
            style="outline"
            className={styles.modal__continueButton}
            onClick={toggleCart}
          >
            {t("cart.continue")}
          </UIButton>
          <div className={styles.modal__price}>
            <div className={styles.modal__sum}>{t("cart.sum")}</div>
            <UIProductPrice price={cart.total_price} />
          </div>
          <UIButton
            color="primary"
            style="filled"
            className={styles.modal__oderButton}
          >
            {t("cart.order")}
          </UIButton>
        </div>
      </div>
    </UIModalBody>,
    document.getElementById("modals")!,
  );
}
