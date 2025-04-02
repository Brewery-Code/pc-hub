import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../store/store";
import { fetchSiteReviews } from "../../../../store/siteReviews/siteReviews.slice";
import { ArrowCommon } from "../../../../assets/icons";
import UIRatingStars from "../../../../components/UI/UIRatingStars/UIRatingStars";
import styles from "./Reviews.module.css";

function Reviews() {
  const dispatch = useAppDispatch();
  const { reviews, status } = useSelector(
    (state: RootState) => state.siteReview,
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSiteReviews());
    }
  }, [dispatch, status]);

  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    if (currentReview + 1 !== reviews.length) {
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
    } else if (deltaX < -50 && currentReview < reviews.length - 1) {
      nextReview();
    }
  };

  const totalRatingCounter = () => {
    let sumOfMarks = 0;
    for (const review of reviews) {
      sumOfMarks += review.rating;
    }
    const result = parseFloat((sumOfMarks / reviews.length).toFixed(1));
    return result;
  };
  const totalRating = totalRatingCounter();

  const displayDate = (date: Date) => {
    let result =
      (date.getDay() < 10 ? "0" + date.getDay() : date.getDay()) + ".";
    result += (date.getDay() < 10 ? "0" + date.getDay() : date.getDay()) + ".";
    result += date.getFullYear().toString();
    return result;
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
          {reviews.map((review, index) => (
            <div
              className={clsx(styles.review)}
              key={index}
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
                  src={review.user.avatar}
                  alt="avatarImg"
                />
              </div>
              <div className={styles.comment}>
                <div className={styles.comment__name}>
                  {review.user.username}
                </div>
                <p className={styles.comment__text}>{review.content}</p>
                <div className={styles.comment__bottom}>
                  <UIRatingStars rating={review.rating} />
                  <div className={styles.comment__date}>
                    {displayDate(new Date(review.created_at))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className={clsx(styles.navigation, "only-desktop")}>
            <button className={styles.navigation__prev} onClick={prevReview}>
              <ArrowCommon className={styles["navigation__prev-arrow"]} />
            </button>
            {currentReview + 1} / {reviews.length}
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
            {reviews.length} {t("media.googleReviews")}
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
