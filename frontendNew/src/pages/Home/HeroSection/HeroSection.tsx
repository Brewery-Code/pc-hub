import Advantage from "./Advantage/Advantage";
import Catalog from "./Catalog/Catalog";
import styles from "./HeroSection.module.css";
import Slider from "./Slider/Slider";

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className="hero__container">
        <div className={styles.hero__body}>
          <Catalog className={styles.hero__catalog} />
          <Slider className={styles.hero__slider} />
          <Advantage className={styles.hero__advantages} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
