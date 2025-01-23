import { useTranslation } from "react-i18next";
import avatarImg1 from "../../../../assets/img/avatar1.png";
import avatarImg2 from "../../../../assets/img/avatar2.jpg";
import avatarImg3 from "../../../../assets/img/avatar3.jpg";
import styles from "./Reviews.module.css";
import { ArrowCommon } from "../../../../assets/icons";
import UIRatingStars from "../../../../components/UI/UIRatingStars/UIRatingStars";
import { useRef, useState } from "react";
import clsx from "clsx";

function Reviews() {
  const reviewsData = [
    {
      id: 1,
      avatar: avatarImg2,
      name: "Pro100rak",
      comment:
        "Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов.",
      mark: 5,
      date: "07.04.2021",
    },
    {
      id: 2,
      avatar: avatarImg1,
      name: "DreamCatcher",
      comment:
        "Дуже сподобалося, все працює так, як і було заявлено! Рекомендую всім, хто сумнівається.",
      mark: 4,
      date: "15.05.2021",
    },
    {
      id: 3,
      avatar: avatarImg3,
      name: "TechGuru",
      comment:
        "Не зовсім задоволений. Є певні нюанси, які потрібно врахувати. Можливо, це не для всіх.",
      mark: 3,
      date: "23.06.2021",
    },
    {
      id: 4,
      avatar: avatarImg2,
      name: "Julia123",
      comment:
        "Чудова якість обслуговування! Все швидко, чітко, і без зайвих питань.",
      mark: 5,
      date: "12.07.2021",
    },
    {
      id: 5,
      avatar: avatarImg1,
      name: "TravelerX",
      comment:
        "Місце дуже гарне, але трохи задовго чекали. Загалом залишилися позитивні враження.",
      mark: 4,
      date: "29.08.2021",
    },
    {
      id: 6,
      avatar: avatarImg3,
      name: "Shopaholic",
      comment:
        "Замовлення прийшло вчасно, але якість не зовсім відповідала опису.",
      mark: 3,
      date: "10.09.2021",
    },
    {
      id: 7,
      avatar: avatarImg2,
      name: "Alex22",
      comment: "Все просто супер! Я задоволений покупкою. Замовлятиму ще.",
      mark: 5,
      date: "17.10.2021",
    },
    {
      id: 8,
      avatar: avatarImg1,
      name: "NatureLover",
      comment:
        "Загалом добре, але ціна могла б бути трохи нижчою. Сервіс на рівні.",
      mark: 4,
      date: "01.11.2021",
    },
    {
      id: 9,
      avatar: avatarImg3,
      name: "Foodie",
      comment: "Дуже смачно і затишно! Обов'язково повернуся ще раз.",
      mark: 5,
      date: "18.12.2021",
    },
    {
      id: 10,
      avatar: avatarImg1,
      name: "MaxCoder",
      comment:
        "Не рекомендую. Виникли проблеми з обслуговуванням, а служба підтримки не відповідає.",
      mark: 2,
      date: "03.01.2022",
    },
  ];

  const totalRatingCounter = () => {
    let sumOfMarks = 0;
    for (const review of reviewsData) {
      sumOfMarks += review.mark;
    }
    const result = parseFloat((sumOfMarks / reviewsData.length).toFixed(1));
    return result;
  };
  const totalRating = totalRatingCounter();

  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    if (currentReview + 1 !== reviewsData.length) {
      setCurrentReview((prev) => prev + 1);
    }
  };

  const prevReview = () => {
    if (currentReview !== 0) {
      setCurrentReview((prev) => prev - 1);
    }
  };

  const sliderState = useRef({ startX: 0, currentX: 0 });

  const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    sliderState.current.startX = e.touches[0].clientX;
  };
  const handleTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    sliderState.current.currentX = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const deltaX = sliderState.current.currentX - sliderState.current.startX;
    if (deltaX > 50 && currentReview > 0) {
      prevReview();
    } else if (deltaX < -50 && currentReview < reviewsData.length - 1) {
      nextReview();
    }
  };

  const { t } = useTranslation("home");

  return (
    <div className={styles.reviews}>
      <h4 className={styles.reviews__title}>{t("media.reviews")}</h4>
      <div className={styles.reviews__body}>
        <div
          className={styles.reviews__list}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {reviewsData.map((review, index) => (
            <div
              className={clsx(styles.review)}
              style={
                {
                  "--translateReview": `${(index - currentReview) * 100}%`,
                  "--scaleReview": index === currentReview ? 1 : 0.8,
                } as React.CSSProperties
              }
            >
              <div className={styles.review__avatar}>
                <img
                  className={styles["review__avatar-img"]}
                  src={review.avatar}
                  alt="avatarImg"
                />
              </div>
              <div className={styles.comment}>
                <div className={styles.comment__name}>{review.name}</div>
                <p className={styles.comment__text}>{review.comment}</p>
                <div className={styles.comment__bottom}>
                  <UIRatingStars rating={review.mark} />
                  <div className={styles.comment__date}>{review.date}</div>
                </div>
              </div>
            </div>
          ))}
          <div className={clsx(styles.navigation, "only-desktop")}>
            <button className={styles.navigation__prev} onClick={prevReview}>
              <ArrowCommon className={styles["navigation__prev-arrow"]} />
            </button>
            {currentReview + 1} / {reviewsData.length}
            <button className={styles.navigation__next} onClick={nextReview}>
              <ArrowCommon className={styles["navigation__next-arrow"]} />
            </button>
          </div>
        </div>
        <div className={styles.rating}>
          <div className={styles.rating__middle}>
            {totalRating.toFixed(1).replace(".", ",")}
          </div>
          <UIRatingStars
            className={styles.rating__stars}
            rating={totalRating}
          />
          <div className={styles.rating__total}>
            {reviewsData.length} {t("media.googleReviews")}
          </div>
        </div>
      </div>
      <div className={styles.reviews__more}>
        {t("media.allReviews")}
        <ArrowCommon className={styles["reviews__more-arrow"]} />
      </div>
    </div>
  );
}

export default Reviews;
