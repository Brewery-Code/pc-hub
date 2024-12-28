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
  let autoPlayInterval = 3000;

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
      <button className={styles.slider__prev}
        onClick={prevSlide}
      >
        -
      </button>
      <div className={styles.slider__list}>
        {slides.map((slide) => (
          <div
            className={`${styles.slider__item} ${slide.id === currentSlide ? styles.slider__item_active : ''
              }`}
            key={slide.id}
            style={{
              transform: `translateX(${(slide.id - currentSlide) * 100}%)`,
              background: slide.background,
            }}
          >
            {slide.content}
          </div>
        ))}
      </div>
      <button className={styles.slider__next}
        onClick={nextSlide}
      >
        +
      </button>
    </div>
  );
}