import { useEffect, useState } from 'react';
import styles from './Slider.module.css';

export default function Slider() {
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
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
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
      <div className={styles.slider__list}>
        {slides.map((slide) => (
          <div
            className={`${styles.slide} ${slide.id === currentSlide ? styles.slide_active : ''
              }`}
            key={slide.id}
            style={{
              transform: `translateX(${(slide.id - currentSlide) * 100}%)`,
              background: slide.background,
            }}
          >
            <div className={styles.slide__title}>TEXT BANNER</div>
            <div className={styles.slide__description}>BANNER DESCRIPTION SMALL TEXT</div>
            <button className={styles.slide__button}>BANNER BUTTON</button>
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