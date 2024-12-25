import { useState } from 'react';
import { ReactComponent as LogoIcon } from '../../../../assets/icons/logo.svg';
import { ReactComponent as TelegramSmallIcon } from '../../../../assets/icons/telegram-small.svg'
import { ReactComponent as ViberSmallIcon } from '../../../../assets/icons/viber-small.svg'
import { ReactComponent as ViberIcon } from '../../../../assets/icons/viber.svg'
import { ReactComponent as TelegramIcon } from '../../../../assets/icons/telegram.svg'
import { ReactComponent as YoutubeIcon } from '../../../../assets/icons/youtube.svg'
import { ReactComponent as LinkedinIcon } from '../../../../assets/icons/linkedin.svg'
import { ReactComponent as InstagramIcon } from '../../../../assets/icons/instagram.svg'
import { ReactComponent as FacebookIcon } from '../../../../assets/icons/facebook.svg'
import Accordion from '../../../UI/Accordion/Accordion';
import styles from './BurgerMenu.module.css';

export default function BurgerMenu() {
  const [whichAccordionIsActive, setWhichAccordionIsActive] = useState('');
  const toggleAccordion = (accordion) => {
    if (whichAccordionIsActive === accordion) {
      setWhichAccordionIsActive('')
    } else {
      setWhichAccordionIsActive(accordion)
    }
  };

  const information = ['Акції', 'Кредит', 'Оплата і доставка', 'Гарантія', 'Часті запитння', 'Новини', 'Блог', 'Про нас', 'Політика конфінденційності', 'Контакти'];
  const services = ['Встановлення техніки', 'Ремонт техніки', 'Гарантійне обслуговування', 'Післягарантійне обслуговування', 'Налаштування програмного забезпечення', 'Діагностика несправностей', 'Заміна комплектуючих', 'Модернізація техніки', 'Консультації та підтримка', 'Утилізація старої техніки'];

  return (
    <div className={styles.menu}>
      <div className={styles.menu__body}>
        <div className={styles['top-bar']}>
          <div className={styles['top-bar__logo']}>
            <LogoIcon className={styles.logo} />
          </div>
          <div className={styles['top-bar__cross']}></div>
        </div>
        <div className={styles.content}>
          <div className={styles.account}>
            <h6 className={styles.account__enter}>Вхід</h6>
            <span>|</span>
            <h6 className={styles.account__register}>Реєстрація</h6>
          </div>
          <Accordion
            title={'Інформація'}
            list={information}
            whichAccordionIsActive={whichAccordionIsActive}
            toggleAccordion={toggleAccordion}
          />
          <Accordion
            title={'Наші сервіси'}
            list={services}
            whichAccordionIsActive={whichAccordionIsActive}
            toggleAccordion={toggleAccordion}
          />
          <div className={styles.contacts}>
            <h6 className={styles.contacts__title}>Контакти</h6>
            <ul className={styles.contacts__list}>
              <li className={styles.contacts__item}>(067) 11-12-485 - Відділ продажів</li>
              <li className={styles.contacts__item}>(066) 484-39-22 - Відділ продажів</li>
              <li className={styles.contacts__item}>
                (063) 747-33-48 - Відділ продажів
                <ViberSmallIcon />
                <TelegramSmallIcon />
              </li>
            </ul>
          </div>
          <div className={styles.social}>
            <h6 className={styles.social__title}>Слідкуйте за нами</h6>
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
    </div>
  );
}