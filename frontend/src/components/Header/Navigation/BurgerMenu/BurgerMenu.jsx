import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { ReactComponent as LogoIcon } from '../../../../assets/icons/logo.svg';
import { ReactComponent as TelegramSmallIcon } from '../../../../assets/icons/telegram-small.svg';
import { ReactComponent as ViberSmallIcon } from '../../../../assets/icons/viber-small.svg';
import { ReactComponent as ViberIcon } from '../../../../assets/icons/viber.svg';
import { ReactComponent as TelegramIcon } from '../../../../assets/icons/telegram.svg';
import { ReactComponent as YoutubeIcon } from '../../../../assets/icons/youtube.svg';
import { ReactComponent as LinkedinIcon } from '../../../../assets/icons/linkedin.svg';
import { ReactComponent as InstagramIcon } from '../../../../assets/icons/instagram.svg';
import { ReactComponent as FacebookIcon } from '../../../../assets/icons/facebook.svg';
import { ReactComponent as ProfileIcon } from '../../../../assets/icons/header-profile.svg';
import { ReactComponent as CatalogIcon } from '../../../../assets/icons/header-product-catalog.svg';
import { ReactComponent as CartIcon } from '../../../../assets/icons/header-cart.svg';
import { ReactComponent as ComparisonIcon } from '../../../../assets/icons/comparison.svg';
import { ReactComponent as LikeIcon } from '../../../../assets/icons/like.svg';
import Accordion from '../../../UI/Accordion/Accordion';
import styles from './BurgerMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLanguage } from '../../../../features/language/languageSlice';

export default function BurgerMenu({ isBurgerMenuOpen, toggleBurgerMenu }) {
  const [whichAccordionIsActive, setWhichAccordionIsActive] = useState('');
  const toggleAccordion = (accordion) => {
    if (whichAccordionIsActive === accordion) {
      setWhichAccordionIsActive('')
    } else {
      setWhichAccordionIsActive(accordion)
    }
  };

  const language = useSelector((state) => state.language.value);
  const dispatch = useDispatch();
  const handleLanguage = () => { dispatch(toggleLanguage()); };

  const { t } = useTranslation('components');

  const information = [
    t('information.promotion'),
    t('information.credit'),
    t('information.payment'),
    t('information.warranty'),
    t('information.questions'),
    t('information.news'),
    t('information.blog'),
    t('information.about'),
    t('information.privacy'),
    t('information.contacts'),
  ];

  const services = [
    t('services.serviceCenter'),
    t('services.secondHandStore'),
    t('services.secondHand'),
    t('services.repair'),
    t('services.help'),
    t('services.cooperation'),
    t('services.home'),
  ];

  return createPortal(
    <div className={isBurgerMenuOpen ? `${styles.menu} ${styles.menu_active}` : styles.menu}
      onClick={toggleBurgerMenu}
    >
      <div className={isBurgerMenuOpen ? `${styles.menu__body} ${styles.menu__body_active}` : styles.menu__body}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles['top-bar']}>
          <div className={styles['top-bar__logo']}>
            <LogoIcon className={styles.logo} />
          </div>
          <div
            className={styles['top-bar__cross']}
            onClick={toggleBurgerMenu}
          >
          </div>
        </div>
        <div className={styles.content}>
          <div className={`${styles.language} ${styles['only-mobile']}`}
            onClick={handleLanguage}
          >
            <div className={`${styles.language} ${language === 'uk' ? '' : styles.language_inactive}`}>UK</div>
            <span>/</span>
            <div className={`${styles.language} ${language === 'en' ? '' : styles.language_inactive}`}>EN</div>
          </div>
          <div className={styles.account}>
            <ProfileIcon className={`${styles.account__icon} ${styles['only-mobile']}`} />
            <h6 className={styles.account__enter}>{t('burgerMenu.signIn')}</h6>
            <span>|</span>
            <h6 className={styles.account__register}>{t('burgerMenu.register')}</h6>
          </div>
          <div className={`${styles.content__mobile} ${styles['only-mobile']}`}>
            <CatalogIcon />
            <h6>{t('header.catalog')}</h6>
          </div>
          <div className={`${styles.content__mobile} ${styles['only-mobile']}`}>
            <CartIcon stroke="white" fill='white' width='24px' height='24px' />
            <h6>{t('burgerMenu.cart')}</h6>
          </div>
          <div className={`${styles.content__mobile} ${styles['only-mobile']}`}>
            <ComparisonIcon stroke="white" width='24px' height='24px' />
            <h6>{t('burgerMenu.comparison')}</h6>
          </div>
          <div className={`${styles.content__mobile} ${styles['only-mobile']}`}>
            <LikeIcon stroke="white" fill='white' width='24px' height='24px' />
            <h6>{t('burgerMenu.selected')}</h6>
          </div>
          <Accordion
            title={t('information.information')}
            list={information}
            whichAccordionIsActive={whichAccordionIsActive}
            toggleAccordion={toggleAccordion}
          />
          <Accordion
            title={t('services.services')}
            list={services}
            whichAccordionIsActive={whichAccordionIsActive}
            toggleAccordion={toggleAccordion}
          />
          <div className={styles.contacts}>
            <h6 className={styles.contacts__title}>{t('contacts.contacts')}</h6>
            <ul className={styles.contacts__list}>
              <li className={styles.contacts__item}>(067) 11-12-485 - {t('contacts.salesDepartment')}</li>
              <li className={styles.contacts__item}>(066) 484-39-22 - {t('contacts.salesDepartment')}</li>
              <li className={styles.contacts__item}>
                (063) 747-33-48 - {t('contacts.salesDepartment')}
                <ViberSmallIcon />
                <TelegramSmallIcon />
              </li>
            </ul>
          </div>
          <div className={styles.social}>
            <h6 className={styles.social__title}>{t('subscription.follow')}</h6>
            <ul className={styles.social__list}>
              <li className={styles.social__item}><InstagramIcon /></li>
              <li className={styles.social__item}><FacebookIcon /></li>
              <li className={styles.social__item}><ViberIcon /></li>
              <li className={styles.social__item}><TelegramIcon /></li>
              <li className={styles.social__item}><YoutubeIcon /></li>
              <li className={styles.social__item}><LinkedinIcon /></li>
            </ul>
          </div>
        </div>
      </div>
    </div >, document.getElementById('modals')
  );
}