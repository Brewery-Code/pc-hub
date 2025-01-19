import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Slider.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchSliderData } from "../../../../features/slider/sliderSlice";

export default function Slider() {
  const dispatch = useDispatch();
  const { loading, error, slider } = useSelector((state) => state.slider);

  useEffect(() => {
    dispatch(fetchSliderData());
  }, [dispatch]);

  const { t } = useTranslation("home");

  let autoPlay = true;
  let autoPlayInterval = 5000;

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slider.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slider.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(nextSlide, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, currentSlide]);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className={styles.slider}>
        <div className={styles.slider__list}>
          {slider.map((slide, index) => (
            <div
              className={`${styles.slide} ${
                index + 1 === currentSlide ? styles.slide_active : ""
              }`}
              key={slide.id}
              style={{
                transform: `translateX(${(index - currentSlide) * 100}%)`,
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <h4 className={styles.slide__title}>{slide.title}</h4>
              <p className={styles.slide__description}>{slide.description}</p>
              <button className={styles.slide__button}>
                {t("slider.button")}
              </button>
            </div>
          ))}
          <div className={styles.counter}>
            {slider.map((slide, index) => (
              <div
                className={
                  currentSlide === index
                    ? `${styles.counter__item} ${styles.counter__item_active}`
                    : styles.counter__item
                }
                key={slide.id}
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
