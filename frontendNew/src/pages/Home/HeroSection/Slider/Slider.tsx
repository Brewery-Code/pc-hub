import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../store/store";
import { fetchSlider } from "../../../../store/slider/slider.slice";
import styles from "./Slider.module.css";
import { useTranslation } from "react-i18next";

interface ISliderProps {
  className?: string;
}

function Slider({ className }: ISliderProps) {
  const { status, slides } = useSelector((state: RootState) => state.slider);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSlider());
    }
  }, [status, dispatch]);

  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  const [currentSlide, setCurrentSlide] = useState(1);
  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    if (currentSlide === 0) {
      setTimeout(() => setCurrentSlide(extendedSlides.length - 1), 800);
    } else if (currentSlide === extendedSlides.length - 1) {
      setTimeout(() => setCurrentSlide(1), 800);
    }
  }, [currentSlide, extendedSlides.length]);

  const { t } = useTranslation("home");

  return (
    <div className={clsx(className && className, styles.slider)}>
      {extendedSlides[0] !== undefined &&
        extendedSlides.map((slide, index) => (
          <div
            className={styles.slider__item}
            key={index}
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: `translateX(${(index - currentSlide) * 100}%)`,
              transition:
                currentSlide === 1 || currentSlide === extendedSlides.length
                  ? "none"
                  : "transform 0.8s ease",
            }}
          >
            <h4 className={styles.slider__title}>{slide.title}</h4>
            <p className={styles.slider__description}>{slide.description}</p>
            <button className={styles.slider__button}>
              {t("slider.button")}
            </button>
          </div>
        ))}
      <div className={styles.counter}>
        {slides.map((slide, index) => (
          <div
            className={clsx(
              styles.counter__item,
              (currentSlide === index + 1 ||
                (currentSlide === extendedSlides.length - 1 && index === 0)) &&
                styles.counter__item_active,
            )}
            key={slide.id}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
