import { createPortal } from "react-dom";
import { UIButton, UICross, UIModalBody } from "../../UI";
import styles from "./MProductImagesList.module.css";
import { IProduct } from "../../../store/product/product.slice";
import { ArrowThin } from "../../../assets/icons";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { TouchEventHandler } from "react";

interface MProductImagesListProps {
  isModalOpen: boolean;
  setIsModalOpen: () => void;
  product: IProduct;
  nextImg: () => void;
  prevImg: () => void;
  currentImg: number;
  handleTouchStart: TouchEventHandler<HTMLDivElement>;
  handleTouchMove: TouchEventHandler<HTMLDivElement>;
  handleTouchEnd: () => void;
}

function MProductImagesList({
  isModalOpen,
  setIsModalOpen,
  product,
  nextImg,
  prevImg,
  currentImg,
  handleTouchEnd,
  handleTouchMove,
  handleTouchStart,
}: MProductImagesListProps) {
  const { t } = useTranslation("product");
  return createPortal(
    <UIModalBody
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      className={styles.modal}
    >
      <div className={styles.modal__body}>
        <UICross className={styles.modal__close} closeMenu={setIsModalOpen} />
        <h6 className={styles.modal__title}>{product.name}</h6>
        <div className={styles.list}>
          <button className={styles.list__prev} onClick={prevImg}>
            <ArrowThin />
          </button>
          <div
            className={styles.list__container}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={styles.list__body}
              style={{
                transform: `translateX(-${currentImg * 100}%)`,
              }}
            >
              {product.images.map((image, index) => (
                <img
                  key={index}
                  className={styles.list__img}
                  src={image.image}
                />
              ))}
            </div>
          </div>
          <button className={styles.list__next} onClick={nextImg}>
            <ArrowThin />
          </button>
        </div>
        <div className={styles.dots}>
          {product.images.map((image, index) => (
            <div
              className={clsx(
                styles.dots__item,
                currentImg == index && styles.dots__item_active,
              )}
            ></div>
          ))}
        </div>
        <div className={styles.buy}>
          <div className={styles.buy__price}>
            {product.price}
            <span>{t("buy.uah")}.</span>
          </div>
          <UIButton
            color="primary"
            style="filled"
            className={styles.buy__button}
          >
            {t("buy.buyCommon")}
          </UIButton>
        </div>
      </div>
    </UIModalBody>,
    document.getElementById("modals")!,
  );
}

export default MProductImagesList;
