import { useTranslation } from "react-i18next";
import avatarImg from "../../../../assets/img/avatar.png";
import styles from "./Reviews.module.css";
import { ArrowCommon } from "../../../../assets/icons";

function Reviews() {
  const reviewsData = [
    {
      id: 1,
      avatar: avatarImg,
      name: "Pro100rak",
      comment:
        "Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов.",
      mark: 5,
      date: "07.04.2021",
    },
    {
      id: 2,
      avatar: avatarImg,
      name: "DreamCatcher",
      comment:
        "Дуже сподобалося, все працює так, як і було заявлено! Рекомендую всім, хто сумнівається.",
      mark: 4,
      date: "15.05.2021",
    },
    {
      id: 3,
      avatar: avatarImg,
      name: "TechGuru",
      comment:
        "Не зовсім задоволений. Є певні нюанси, які потрібно врахувати. Можливо, це не для всіх.",
      mark: 3,
      date: "23.06.2021",
    },
    {
      id: 4,
      avatar: avatarImg,
      name: "Julia123",
      comment:
        "Чудова якість обслуговування! Все швидко, чітко, і без зайвих питань.",
      mark: 5,
      date: "12.07.2021",
    },
    {
      id: 5,
      avatar: avatarImg,
      name: "TravelerX",
      comment:
        "Місце дуже гарне, але трохи задовго чекали. Загалом залишилися позитивні враження.",
      mark: 4,
      date: "29.08.2021",
    },
    {
      id: 6,
      avatar: avatarImg,
      name: "Shopaholic",
      comment:
        "Замовлення прийшло вчасно, але якість не зовсім відповідала опису.",
      mark: 3,
      date: "10.09.2021",
    },
    {
      id: 7,
      avatar: avatarImg,
      name: "Alex22",
      comment: "Все просто супер! Я задоволений покупкою. Замовлятиму ще.",
      mark: 5,
      date: "17.10.2021",
    },
    {
      id: 8,
      avatar: avatarImg,
      name: "NatureLover",
      comment:
        "Загалом добре, але ціна могла б бути трохи нижчою. Сервіс на рівні.",
      mark: 4,
      date: "01.11.2021",
    },
    {
      id: 9,
      avatar: avatarImg,
      name: "Foodie",
      comment: "Дуже смачно і затишно! Обов'язково повернуся ще раз.",
      mark: 5,
      date: "18.12.2021",
    },
    {
      id: 10,
      avatar: avatarImg,
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
    return sumOfMarks / reviewsData.length;
  };

  const totalRating = totalRatingCounter();

  const totalStars = () => {};

  const { t } = useTranslation("home");

  return (
    <div className={styles.reviews}>
      <h4 className={styles.reviews__title}>{t("media.reviews")}</h4>
      <div className={styles.reviews__body}>
        <div className={styles.reviews__list}>
          <div className={styles.review}>
            <div className={styles.review__avatar}>
              <img src={avatarImg} alt="avatarImg" />
            </div>
            <div className={styles.comment}>
              <div className={styles.comment__name}>Pro100rak</div>
              <p className={styles.comment__text}>
                Lorem Ipsum не только успешно пережил без заметных изменений
                пять веков, но и перешагнул в электронный дизайн. Его
                популяризации в новое время послужили публикация листов.
              </p>
              <div className={styles.comment__bottom}>
                <div className={styles.stars}>
                  <div className={styles.stars__item}></div>
                </div>
                <div className={styles.comment__date}>test</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rating}>
          <div className={styles.rating__middle}>{totalRating}</div>
          <div className={styles.stars}>
            <div className={styles.stars__item}></div>
          </div>
          <div className={styles.rating__total}>
            577 {t("media.googleReviews")}
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
