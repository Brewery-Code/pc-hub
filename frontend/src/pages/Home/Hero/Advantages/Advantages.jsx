import { useTranslation } from 'react-i18next';
import { ReactComponent as AssemblyIcon } from '../../../../assets/icons/advantages-assembly.svg';
import { ReactComponent as ConsultationIcon } from '../../../../assets/icons/advantages-consultation.svg';
import { ReactComponent as DeliveryIcon } from '../../../../assets/icons/advantages-delivery.svg';
import { ReactComponent as InstallmentIcon } from '../../../../assets/icons/advantages-installment.svg';
import { ReactComponent as PriceIcon } from '../../../../assets/icons/advantages-price.svg';
import { ReactComponent as WarrantyIcon } from '../../../../assets/icons/advantages-warranty.svg';
import { ReactComponent as YearsIcon } from '../../../../assets/icons/advantages-years.svg';
import styles from './Advantages.module.css';

export default function Advantages() {
  const { t } = useTranslation('home');
  return (
    <div className={styles.advantages}>
      <div className={styles.advantages__item}>
        <AssemblyIcon />
        <p>{t('advantage.assembly')}</p>
      </div>
      <div className={styles.advantages__item}>
        <InstallmentIcon />
        <p>{t('advantage.installment')}</p>
      </div>
      <div className={styles.advantages__item}>
        <DeliveryIcon />
        <p>{t('advantage.delivery')}</p>
      </div>
      <div className={styles.advantages__item}>
        <WarrantyIcon />
        <p>{t('advantage.warranty')}</p>
      </div>
      <div className={styles.advantages__item}>
        <PriceIcon />
        <p>{t('advantage.price')}</p>
      </div>
      <div className={styles.advantages__item}>
        <YearsIcon />
        <p>{t('advantage.experience')}</p>
      </div>
      <div className={styles.advantages__item}>
        <ConsultationIcon />
        <p>{t('advantage.consultation')}</p>
      </div>
    </div>
  );
}