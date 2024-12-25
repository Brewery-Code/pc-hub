import { useState } from 'react';
import { ReactComponent as ProfileIcon } from '../../../assets/icons/header-profile.svg';
import { ReactComponent as PhoneIcon } from '../../../assets/icons/header-phone.svg';
import { ReactComponent as LogoIcon } from '../../../assets/icons/logo.svg'
import styles from './Navigation.module.css';
import BurgerMenu from './BurgerMenu/BurgerMenu';

export default function Navigation() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const toggleBurgerMenu = () => { setIsBurgerMenuOpen(prev => !prev) }

  return (
    <nav className={styles.navigation}>
      <div className="navigation__container">
        <div className={styles.navigation__body}>
          <ul className={styles.menu}>
            <li
              className={`${styles['burger-menu']} ${isBurgerMenuOpen ? styles['burger-menu_active'] : ''}`}
              onClick={toggleBurgerMenu}
            >
              <span className={styles['burger-menu_icon']}></span>
            </li>
            <BurgerMenu isBurgerMenuOpen={isBurgerMenuOpen} toggleBurgerMenu={toggleBurgerMenu} />
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
              <ProfileIcon />
            </div>
          </div>
          <div className={styles.logo}>
            <LogoIcon fill='white' />
          </div>
          <div className={styles.phone}>
            <PhoneIcon />
          </div>
        </div>
      </div>
    </nav >
  );
}