import Hero from './Hero/Hero';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <Hero />
    </div>
  );
}