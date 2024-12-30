import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as ProfileIcon } from '../../../assets/icons/header-profile.svg';
import { ReactComponent as PhoneIcon } from '../../../assets/icons/header-phone.svg';
import { ReactComponent as LogoIcon } from '../../../assets/icons/logo.svg'
import BurgerMenu from './BurgerMenu/BurgerMenu';
import styles from './Navigation.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLanguage } from '../../../features/language/languageSlice';

export default function Navigation() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const toggleBurgerMenu = () => { setIsBurgerMenuOpen(prev => !prev) }

  const language = useSelector((state) => state.language.value);
  const dispatch = useDispatch();
  const handleLanguage = () => { dispatch(toggleLanguage()); };


  const { t } = useTranslation();

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
            <li className={styles.menu__item}>{t('header.promotion')}</li>
            <li className={styles.menu__item}>{t('header.credit')}</li>
            <li className={styles.menu__item}>{t('header.payment')}</li>
            <li className={styles.menu__item}>{t('header.help')}</li>
            <li className={styles.menu__item}>{t('header.secondHand')}</li>
            <li className={styles.menu__item}>{t('header.catalog')}</li>
          </ul>
          <div className={styles.settings}>
            <div className={styles.language}
              onClick={handleLanguage}
            >
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