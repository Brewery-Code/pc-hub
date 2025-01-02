import GameZone from './GameZone/GameZone';
import Hero from './Hero/Hero';
import styles from './Home.module.css';
import Selling from './Selling/Selling';

export default function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <Selling />
      <GameZone />
    </div>
  );
}