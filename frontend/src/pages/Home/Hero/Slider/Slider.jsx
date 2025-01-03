import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Slider.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSliderData } from '../../../../features/slider/sliderSlice';

export default function Slider() {
  const dispatch = useDispatch();
  const { loading, error, slider } = useSelector((state) => state.slider);
  console.log(slider)

  useEffect(() => {
    dispatch(fetchSliderData());
  }, [dispatch]);

  const { t } = useTranslation('home');

  const slides = [
    { id: 0, content: "Слайд 1: Вітальний текст", background: "grey" },
    { id: 1, content: "Слайд 2: Опис продукту", background: "yellow" },
    { id: 2, content: "Слайд 3: Особливості", background: "green" },
    { id: 3, content: "Слайд 4: Відгуки клієнтів", background: "purple" },
    { id: 4, content: "Слайд 5: Контактна інформація", background: "orange" },
  ];

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

  return (
    <div className={styles.slider}>
      <img src={slider[0].image} alt="" />
      <div className={styles.slider__list}>
        {slider.map((slide) => (
          <div
            className={`${styles.slide} ${slide.id === currentSlide ? styles.slide_active : ''
              }`}
            key={slide.title}
            style={{
              transform: `translateX(${(slide.id - currentSlide) * 100}%)`,
              backgroundImage: slide.image,
            }}
          >
            <h4 className={styles.slide__title}>{slide.title}</h4>
            <p className={styles.slide__description}>{slide.description}</p>
            <button className={styles.slide__button}>{t('slider.button')}</button>
          </div>
        ))}
        <div className={styles.counter}>
          {slides.map((slide) => (
            <div className={currentSlide === slide.id ?
              `${styles.counter__item} ${styles.counter__item_active}` :
              styles.counter__item}
              key={slide.id}
            >
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}