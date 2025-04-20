import clsx from "clsx";
import styles from "./AllInfo.module.css";
import { useTranslation } from "react-i18next";
import { IProduct } from "../../../store/product/product.slice";
import { useEffect, useRef, useState } from "react";
import {
  ArrowBold,
  ArrowCommon,
  ComparisonIcon,
  Credit,
  DeliveryJustin,
  DeliveryLocal,
  DeliveryNovaposhta,
  DeliveryParcel,
  DeliveryUkrposhta,
  Exchange,
  Guarantee,
  LikeIcon,
  PaymentCash,
  Time,
} from "../../../assets/icons";
import { UIButton } from "../../../components/UI";
import { MProductImagesList } from "../../../components/Modals";

interface IAllInfoProps {
  product: IProduct;
  className?: string;
  handleSection: (section: string) => () => void;
  addProductToCart: () => void;
  toggleProductWishlist: () => void;
  isProductLiked: boolean;
}

function AllInfo({
  className,
  product,
  handleSection,
  addProductToCart,
  toggleProductWishlist,
  isProductLiked,
}: IAllInfoProps) {
  const { t } = useTranslation("product");

  const imagesViewportRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [currentImg, setCurrentImg] = useState(0);
  const [numberOfDisplayedImages, setNumberOfDisplayedImages] = useState(0);

  const getNumberOfDisplayedImages = () => {
    if (imagesViewportRef.current && imageRef.current) {
      setNumberOfDisplayedImages(
        Math.round(
          imagesViewportRef.current.clientHeight /
            imageRef.current.clientHeight,
        ),
      );
    }
  };

  useEffect(() => {
    getNumberOfDisplayedImages();
  }, [currentImg]);

  const nextImg = () => {
    if (currentImg + 1 < product.images.length) {
      setCurrentImg((prev) => prev + 1);
    } else {
      setCurrentImg(0);
    }
  };

  const prevImg = () => {
    if (currentImg > 0) {
      setCurrentImg((prev) => prev - 1);
    } else {
      setCurrentImg(product.images.length - 1);
    }
  };

  const setImg = (index: number) => {
    setCurrentImg(index);
  };

  const imgSliderState = useRef({ startX: 0, currentX: 0 });

  const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    imgSliderState.current.startX = e.touches[0].clientX;
  };

  const handleTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    imgSliderState.current.currentX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX =
      imgSliderState.current.currentX - imgSliderState.current.startX;
    if (deltaX > 40 && currentImg > 0) {
      prevImg();
    } else if (deltaX < -40 && currentImg < product.images.length - 1) {
      nextImg();
    }
  };

  const listTransform = () => {
    if (window.innerWidth <= 767.8) return undefined;

    if (imageRef.current && numberOfDisplayedImages > 0) {
      if (currentImg + 2 >= numberOfDisplayedImages) {
        if (currentImg + 1 == product.images.length) {
          return `translateY(${
            -(currentImg - numberOfDisplayedImages + 1) *
            imageRef.current.clientHeight
          }px)`;
        } else {
          return `translateY(${
            -(currentImg - numberOfDisplayedImages + 2) *
            imageRef.current.clientHeight
          }px)`;
        }
      }
    }
    return undefined;
  };

  const [isModalImageListOpen, setIsModalImageListOpen] = useState(false);
  const handleModalImageList = () => {
    setIsModalImageListOpen((prev) => !prev);
  };

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const handleDescription = () => {
    setIsDescriptionOpen((prev) => !prev);
  };

  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const getScrollHeight = () => {
    if (descriptionRef.current) {
      return descriptionRef.current.scrollHeight;
    }
  };

  return (
    <div className={clsx(className, styles.body)}>
      <div className={styles.images}>
        <div className={styles.images__container} ref={imagesViewportRef}>
          <button className={styles.image__prev} onClick={prevImg}>
            <ArrowBold className={styles["image__prev-icon"]} />
          </button>
          <div
            className={styles.images__list}
            style={
              imageRef.current
                ? {
                    transform: listTransform(),
                  }
                : {}
            }
          >
            {product.images.map((image, index) => (
              <img
                key={index}
                ref={index == 0 ? imageRef : null}
                src={image.image}
                alt="productImg"
                onClick={() => setImg(index)}
              />
            ))}
          </div>
          <button className={styles.image__next} onClick={nextImg}>
            <ArrowBold className={styles["image__next-icon"]} />
          </button>
        </div>
        <div
          className={styles.image__main}
          onClick={handleModalImageList}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {product.images.length > 0 && (
            <img src={product.images[currentImg]?.image} alt="productImg" />
          )}
        </div>
        <MProductImagesList
          isModalOpen={isModalImageListOpen}
          setIsModalOpen={() => handleModalImageList()}
          product={product}
          nextImg={nextImg}
          prevImg={prevImg}
          currentImg={currentImg}
          handleTouchEnd={handleTouchEnd}
          handleTouchMove={handleTouchMove}
          handleTouchStart={handleTouchStart}
        />
      </div>
      <div className={styles.left}>
        <div className={styles.characteristics}>
          <h4 className={styles.characteristics__title}>
            {t("characteristics.title")}
          </h4>
          <ul className={styles.characteristics__list}>
            {product.attributes.map((attribute, index) => (
              <li key={index} className={styles.characteristics__item}>
                <div>{attribute.attribute_name}</div>
                <div>{attribute.value}</div>
              </li>
            ))}
          </ul>
          <button
            className={styles["characteristics__show-all"]}
            onClick={handleSection("Characteristics")}
          >
            {t("characteristics.showAll")}
            <ArrowCommon
              className={styles["characteristics__show-all-arrow"]}
            />
          </button>
          <div className={styles.description}>
            <h4 className={styles.description__title}>
              {t("description.title")}
            </h4>
            <p
              className={styles.description__text}
              ref={descriptionRef}
              style={{
                maxHeight: isDescriptionOpen ? `${getScrollHeight()}px` : "",
              }}
            >
              {product.description}
            </p>
            <button
              className={styles.description__more}
              onClick={handleDescription}
            >
              {t("description.showAll")}
              <ArrowBold
                className={clsx(
                  styles["description__more-arrow"],
                  isDescriptionOpen && styles["description__more-arrow_active"],
                )}
              />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.head}>
          {product.is_new && (
            <div className={styles.head__new}>{t("banners.isNew")}</div>
          )}
          <div className={styles.head__hit}>{t("banners.topSales")}</div>
          <div className={styles.head__comparison}>
            <ComparisonIcon className={styles["head__comparison-icon"]} />
          </div>
          <div
            className={clsx(styles.head__like)}
            onClick={toggleProductWishlist}
          >
            <LikeIcon
              className={clsx(
                styles["head__like-icon"],
                isProductLiked && styles["head__like-icon_active"],
              )}
            />
          </div>
        </div>
        <div
          className={styles.buy}
          style={{
            paddingTop: product.discounted_price != 0 ? `${28}px` : "",
          }}
        >
          <div
            className={clsx(
              styles.buy__price,
              product.discounted_price != 0 && styles.buy__price_discount,
            )}
          >
            {product.discounted_price != 0 && (
              <div className={styles.buy__price_old}>
                <span>{product.price}</span>
                <span>{t("buy.uah")}</span>
              </div>
            )}
            <span className={clsx(styles.buy__numbers)}>
              {product.discounted_price == 0
                ? product.price
                : product.discounted_price}
            </span>
            <span className={styles.buy__currency}>{t("buy.uah")}.</span>
          </div>
          <UIButton
            onClick={addProductToCart}
            color="primary"
            style="filled"
            className={styles.buy__common}
          >
            {t("buy.buyCommon")}
          </UIButton>
          <UIButton
            color="primary"
            style="outline"
            className={styles.buy__credit}
          >
            {t("buy.buyCredit")}
          </UIButton>
        </div>
        <div className={styles.right__line}></div>
        <div className={styles.delivery}>
          <h6 className={styles.delivery__title}>{t("delivery.title")}</h6>
          <div className={styles.delivery__row}>
            <DeliveryLocal className={styles.delivery__icon} />
            <div className={styles.delivery__name}>{t("delivery.local")}</div>
            <div className={styles.delivery__date}>{t("delivery.date")}</div>
            <div className={styles.delivery__price}>{t("delivery.free")}</div>
          </div>
          <div className={styles.delivery__row}>
            <DeliveryJustin className={styles.delivery__icon} />
            <div className={styles.delivery__name}>{t("delivery.justin")}</div>
            <div className={styles.delivery__date}>{t("delivery.date")}</div>
            <div className={styles.delivery__price}>{t("delivery.free")}</div>
          </div>
          <div className={styles.delivery__row}>
            <DeliveryUkrposhta className={styles.delivery__icon} />
            <div className={styles.delivery__name}>
              {t("delivery.ukrposhta")}
            </div>
            <div className={styles.delivery__date}>{t("delivery.date")}</div>
            <div className={styles.delivery__price}>{t("delivery.free")}</div>
          </div>
          <div className={styles.delivery__row}>
            <DeliveryNovaposhta className={styles.delivery__icon} />
            <div className={styles.delivery__name}>
              {t("delivery.novaposhta")}
            </div>
            <div className={styles.delivery__date}>{t("delivery.date")}</div>
            <div className={styles.delivery__price}>{t("delivery.free")}</div>
          </div>
          <div className={styles.delivery__row}>
            <DeliveryParcel className={styles.delivery__icon} />
            <div className={styles.delivery__name}>{t("delivery.home")}</div>
            <div className={styles.delivery__date}>{t("delivery.date")}</div>
            <div className={styles.delivery__price}>{t("delivery.free")}</div>
          </div>
        </div>
        <div className={styles.payment}>
          <h6 className={styles.payment__title}>{t("payment.title")}</h6>
          <div className={styles.payment__block}>
            <div className={styles.payment__row}>
              <PaymentCash className={styles.payment__icon} />
              <div className={styles.payment__text}>{t("payment.cash")}</div>
            </div>
            <div className={styles.payment__row}>
              <Time className={styles.payment__icon} />
              <div className={styles.payment__text}>
                {t("payment.installment")}
              </div>
            </div>
            <div className={styles.payment__row}>
              <Credit className={styles.payment__icon} />
              <div className={styles.payment__text}>{t("payment.credit")}</div>
            </div>
          </div>
        </div>
        <div className={styles.guarantee}>
          <h6 className={styles.guarantee__title}>{t("guarantee.title")}</h6>
          <div className={styles.guarantee__block}>
            <div className={styles.guarantee__row}>
              <Guarantee className={styles.guarantee__icon} />
              <div className={styles.guarantee__text}>
                {`${product.warranty} ${t("guarantee.month")}`}
              </div>
            </div>
            <div className={styles.guarantee__row}>
              <Exchange className={styles.guarantee__icon} />
              <div className={styles.guarantee__text}>
                {t("guarantee.exchange")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllInfo;
