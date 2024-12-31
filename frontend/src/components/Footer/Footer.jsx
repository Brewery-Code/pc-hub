import { useTranslation } from 'react-i18next';
import { ReactComponent as ViberSmallIcon } from '../../assets/icons/viber-small.svg';
import { ReactComponent as TelegramSmallIcon } from '../../assets/icons/telegram-small.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg';
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg';
import { ReactComponent as ViberIcon } from '../../assets/icons/viber.svg';
import { ReactComponent as TelegramIcon } from '../../assets/icons/telegram.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/icons/youtube.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/icons/linkedin.svg';
import { ReactComponent as SendEmailButtonIcon } from '../../assets/icons/send-button.svg';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import { ReactComponent as MastercardIcon } from '../../assets/icons/mastercard.svg';
import { ReactComponent as VisaIcon } from '../../assets/icons/visa.svg';
import styles from './Footer.module.css';

export default function () {
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
  return (
    <footer className={styles.footer}>
      <div className="footer__container">
        <div className={styles.footer__body}>
          <div className={styles.block}>
            <h6 className={styles.block__title}>{t('information.information')}</h6>
            <ul className={styles.block__list}>
              {information?.map(item => {
                return <li key={item} className={styles.block__item}><a href="">{item}</a></li>;
              })}
            </ul>
          </div>
          <div className={styles.block}>
            <h6 className={styles.block__title}>{t('services.services')}</h6>
            <ul className={styles.block__list}>
              {services?.map(item => {
                return <li key={item} className={styles.block__item}><a href="">{item}</a></li>;
              })}
            </ul>
          </div>
          <div className={styles.block}>
            <h6 className={styles.block__title}>{t('contacts.contacts')}</h6>
            <div className={styles.block__list}>
              <ul className={styles.block}>
                <li className={styles.block__item}>(067) 11-12-485 - {t('contacts.salesDepartment')}</li>
                <li className={styles.block__item}>(066) 484-39-22 - {t('contacts.salesDepartment')}</li>
                <li className={styles.block__item}>
                  (063) 747-33-48 - {t('contacts.salesDepartment')}
                  <ViberSmallIcon />
                  <TelegramSmallIcon />
                </li>
              </ul>
              <div className={`${styles.block__item} ${styles.location}`}>
                {t('contacts.city')}<br />
                {t('contacts.street')}
              </div>
              <ul className={`${styles.block__item} ${styles.schedule}`}>
                {t('contacts.scheduleWeekdays')}<br />
                {t('contacts.scheduleWeekend')}
              </ul>
            </div>
          </div>
          <div className={styles.block}>
            <h6 className={styles.block__title}>{t('subscription.follow')}</h6>
            <ul className={styles.social}>
              <li className={styles.social__item}><InstagramIcon /></li>
              <li className={styles.social__item}><FacebookIcon /></li>
              <li className={styles.social__item}><ViberIcon /></li>
              <li className={styles.social__item}><TelegramIcon /></li>
              <li className={styles.social__item}><YoutubeIcon /></li>
              <li className={styles.social__item}><LinkedInIcon /></li>
            </ul>
            <div className={styles.subscription}>
              <div className={styles.subscription__title}>{t('subscription.subscription')}</div>
              <form className={styles.subscription__form}>
                <input
                  type="text"
                  placeholder={t('subscription.email')}
                />
                <button>
                  <SendEmailButtonIcon width='24px' height='24px' />
                </button>
              </form>
            </div>
          </div>
          <div className={styles.licenses}>
            <div className={styles.licenses__logo}><LogoIcon /></div>
            <div className={`${styles.subscription} ${styles['only-mobile']}`}>
              <div className={styles.subscription__title}>{t('subscription.subscription')}</div>
              <form className={styles.subscription__form}>
                <input
                  type="text"
                  placeholder={t('subscription.email')}
                />
                <button>
                  <SendEmailButtonIcon width='24px' height='24px' />
                </button>
              </form>
            </div>
            <div className={styles.licenses__text}>{t('footer.rights')}</div>
            <div className={styles.licenses__payment}>
              <div><MastercardIcon /></div>
              <div><VisaIcon /></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
