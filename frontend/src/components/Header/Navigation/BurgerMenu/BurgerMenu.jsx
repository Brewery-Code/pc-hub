import logoImg from '../../../../assets/icons/logo-white.svg';
import Accordion from '../../../UI/Accordion/Accordion';
import styles from './BurgerMenu.module.css';

export default function BurgerMenu() {
  const information = ['Акції', 'Кредит', 'Оплата і доставка'];

  return (
    <div className={styles.menu}>
      <div className={styles.menu__body}>
        <div className={styles['top-bar']}>
          <div className={styles['top-bar__logo']}>
            <img src={logoImg} alt="logo" />
          </div>
          <div className={styles['top-bar__cross']}></div>
        </div>
        <div className={styles.account}>
          <div className={styles.account__enter}>Вхід</div>
          <span>|</span>
          <div className={styles.account__register}>Реєстрація</div>
        </div>
        <Accordion title={'Інформація'} list={information}></Accordion>
      </div>
    </div>
  );
}