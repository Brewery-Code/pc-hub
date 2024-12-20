import Navigation from './Navigation/Navigation';
import Utility from './Utility/Utility';
import styles from './Header.module.css';

export default function () {
  return (
    <div className={styles.header}>
      <div className={styles.header__body}>
        <Navigation></Navigation>
        <Utility></Utility>
      </div>
    </div>
  );
}