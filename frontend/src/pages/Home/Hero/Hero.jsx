import Advantages from './Advantages/Advantages';
import Catalog from './Catalog/Catalog';
import Slider from './Slider/Slider';

import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="hero__container">
        <div className={styles.hero__body}>
          <div className={styles.hero__catalog}>
            <Catalog />
          </div>
          <div className={styles.hero__slider}>
            <Slider />
          </div>
          <div className={styles.hero__advantages}>
            <Advantages />
          </div>
        </div>
      </div>
    </section>
  );
}