import { useTranslation } from "react-i18next";
import { IProduct } from "../../../store/product/product.slice";
import ProductSmall from "../ProductSmall/ProductSmall";
import styles from "./Reviews.module.css";
import { UIButton, UIRatingStars } from "../../../components/UI";
import reviewerIcon from "../../../assets/img/avatar1.png";
import { CartIcon, CommentIcon, LikeFingerIcon } from "../../../assets/icons";
import clsx from "clsx";

interface IReviewsProps {
  product: IProduct;
}

function Reviews({ product }: IReviewsProps) {
  const { t } = useTranslation("product");

  return (
    <div className={styles.block}>
      <div className={styles.reviews}>
        <h4 className={styles.reviews__title}>{t("reviews.title")} (45)</h4>
        <div className={styles.reviews__head}>
          <span className={styles.reviews__subtitle}>
            {t("reviews.subtitle")}
          </span>
          <UIButton
            color="secondary"
            style="filled"
            className={styles["reviews__leave-review"]}
          >
            {t("reviews.leaveReview")}
          </UIButton>
        </div>
        <ul className={styles.reviews__list}>
          <li className={styles.review}>
            <img
              className={clsx(styles.review__icon, "only-desktop")}
              src={reviewerIcon}
              alt="reviewerIcon"
            />
            <div className={styles.review__body}>
              <div className={styles.review__head}>
                <img
                  className={clsx(styles.review__icon, "only-mobile")}
                  src={reviewerIcon}
                  alt="reviewerIcon"
                />
                <div className={styles.review__name}>Сергійко</div>
                <div className={styles["review__is-bought"]}>
                  <CartIcon className={styles["review__cart-icon"]} />
                  {t("reviews.isBought")}
                </div>
                <UIRatingStars
                  rating={product.rating}
                  className={styles.review__rating}
                />
                <div className={styles.review__date}>07.04.2021</div>
              </div>
              <div className={styles.review__comment}>
                Lorem Ipsum не только успешно пережил без заметных изменений
                пять веков, но и перешагнул в электронный дизайн. Его
                популяризации в новое время послужили публикация листов.
              </div>
              <div className={styles.review__title}>
                {t("reviews.advantage")}:
              </div>
              <div className={styles.review__comment}>
                Абсолютно не шумит, пока не смогл найти задачу, при которой
                Lorem Ipsum потребовалось бы подключить куллеры для охлаждения
              </div>
              <div className={styles.review__title}>
                {t("reviews.disadvantage")}:
              </div>
              <div className={styles.review__comment}>Не має</div>
              <div className={styles.review__bottom}>
                <div className={styles.review__answer}>
                  <CommentIcon className={styles["review__comment-icon"]} />
                  {t("reviews.answer")}
                </div>
                <div className={styles.review__like}>
                  <LikeFingerIcon className={styles["review__like-icon"]} />
                  12
                </div>
              </div>
            </div>
          </li>
          <li className={styles.review}>
            <img
              className={styles.review__icon}
              src={reviewerIcon}
              alt="reviewerIcon"
            />
            <div className={styles.review__body}>
              <div className={styles.review__head}>
                <div className={styles.review__name}>Сергійко</div>
                <div className={styles["review__is-bought"]}>
                  <CartIcon className={styles["review__cart-icon"]} />
                  {t("reviews.isBought")}
                </div>
                <UIRatingStars
                  rating={product.rating}
                  className={styles.review__rating}
                />
                <div className={styles.review__date}>07.04.2021</div>
              </div>
              <div className={styles.review__comment}>
                Lorem Ipsum не только успешно пережил без заметных изменений
                пять веков, но и перешагнул в электронный дизайн. Его
                популяризации в новое время послужили публикация листов.
              </div>
              <div className={styles.review__title}>
                {t("reviews.advantage")}:
              </div>
              <div className={styles.review__comment}>
                Абсолютно не шумит, пока не смогл найти задачу, при которой
                Lorem Ipsum потребовалось бы подключить куллеры для охлаждения
              </div>
              <div className={styles.review__title}>
                {t("reviews.disadvantage")}:
              </div>
              <div className={styles.review__comment}>Не має</div>
              <div className={styles.review__bottom}>
                <div className={styles.review__answer}>
                  <CommentIcon className={styles["review__comment-icon"]} />
                  {t("reviews.answer")}
                </div>
                <div className={styles.review__like}>
                  <LikeFingerIcon className={styles["review__like-icon"]} />
                  12
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <ProductSmall product={product} className="only-desktop" />
    </div>
  );
}

export default Reviews;
