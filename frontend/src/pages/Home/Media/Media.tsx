import Reviews from "./Reviews/Reviews";
import Instagram from "./Instagram/Instagram";
import styles from "./Media.module.css";

function Media() {
  return (
    <section className={styles.media}>
      <div className="media__container">
        <div className={styles.media__body}>
          <Reviews />
          <Instagram />
        </div>
      </div>
    </section>
  );
}

export default Media;
