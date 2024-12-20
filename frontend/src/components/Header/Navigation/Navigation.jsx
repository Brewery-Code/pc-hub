import { useState } from 'react';
import profileImg from '../../../assets/icons/header-profile.svg';
import styles from './Navigation.module.css';

export default function () {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const toggleBurgerMenu = () => { setIsBurgerMenuOpen(prev => !prev) }

  return (
    <nav className={styles.navigation}>
      <div className="navigation__container">
        <div className={styles.navigation__body}>
          <ul className={styles.menu}>
            <li className={!isBurgerMenuOpen ? styles[`burger-menu`] : `${styles[`burger-menu`]} ${styles[`burger-menu_active`]}`}
              onClick={toggleBurgerMenu}
            >
              <span></span>
            </li>
            <li className={styles.menu__item}>Акції</li>
            <li className={styles.menu__item}>Кредит</li>
            <li className={styles.menu__item}>Оплата і доставка</li>
            <li className={styles.menu__item}>Допомога</li>
            <li className={styles.menu__item}>Покупка Б/У</li>
            <li className={styles.menu__item}>Контакти</li>
          </ul>
          <div className={styles.settings}>
            <div className={styles.language}>
              <div className={styles.language_uk}>UK</div>
              <span>/</span>
              <div className={`${styles.language_en} ${styles.language_inactive}`}>EN</div>
            </div>
            <div className={styles.settings__profile}>
              <img src={profileImg} alt="profileImg" />
            </div>
          </div>
        </div>
      </div>
    </nav >
  );
}