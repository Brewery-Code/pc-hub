import clsx from "clsx";
import styles from "./Body.module.css";
import { useTranslation } from "react-i18next";
import { IProduct } from "../../../store/product/product.slice";
import { useEffect, useState } from "react";
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

interface IBodyProps {
  product: IProduct;
  className?: string;
}

function Body({ className, product }: IBodyProps) {
  const { t } = useTranslation("product");

  const [activeImg, setActiveImg] = useState("");
  useEffect(() => {
    if (product && product.images.length > 0) {
      setActiveImg(product.images[0].image);
    }
  }, [product]);

  const changeActiveImg = (src: string) => setActiveImg(src);

  return (
    <div className={clsx(className, styles.body)}>
      <div className={styles.left}>
        <div className={styles.images}>
          <div className={styles.images__container}>
            <div className={styles.images__list}>
              {product.images.map((image) => (
                <img
                  src={image.image}
                  alt="productImg"
                  onClick={() => changeActiveImg(image.image)}
                />
              ))}
            </div>
          </div>
          <div className={styles.image__main}>
            <img src={activeImg} alt="productImg" />
          </div>
        </div>
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
          <button className={styles["characteristics__show-all"]}>
            {t("characteristics.showAll")}
            <ArrowCommon
              className={styles["characteristics__show-all-arrow"]}
            />
          </button>
          <div className={styles.description}>
            <h4 className={styles.description__title}>
              {t("description.title")}
            </h4>
            <p className={styles.description__text}>{product.description}</p>
            <button className={styles.description__more}>
              {t("description.showAll")}
              <ArrowBold className={styles["description__more-arrow"]} />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.head}>
          <div className={styles.head__new}>{t("banners.isNew")}</div>
          <div className={styles.head__hit}>{t("banners.topSales")}</div>
          <div className={styles.head__comparison}>
            <ComparisonIcon className={styles["head__comparison-icon"]} />
          </div>
          <div className={styles.head__like}>
            <LikeIcon className={styles["head__like-icon"]} />
          </div>
        </div>
        <div className={styles.buy}>
          <div className={styles.buy__price}>
            <span className={styles.buy__numbers}>{product.price}</span>
            <span className={styles.buy__currency}>{t("buy.uah")}.</span>
          </div>
          <UIButton
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
                {t("guarantee.month")}
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

export default Body;
