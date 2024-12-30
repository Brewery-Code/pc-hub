import { ReactComponent as AssemblyIcon } from '../../../../assets/icons/advantages-assembly.svg';
import { ReactComponent as ConsultationIcon } from '../../../../assets/icons/advantages-consultation.svg';
import { ReactComponent as DeliveryIcon } from '../../../../assets/icons/advantages-delivery.svg';
import { ReactComponent as InstallmentIcon } from '../../../../assets/icons/advantages-installment.svg';
import { ReactComponent as PriceIcon } from '../../../../assets/icons/advantages-price.svg';
import { ReactComponent as WarrantyIcon } from '../../../../assets/icons/advantages-warranty.svg';
import { ReactComponent as YearsIcon } from '../../../../assets/icons/advantages-years.svg';
import styles from './Advantages.module.css';

export default function Advantages() {
  return (
    <div className={styles.advantages}>
      <div className={styles.advantages__row}>
        <div className={styles.advantages__item}>
          <AssemblyIcon />
          <p>Безкоштовна збірка</p>
        </div>
        <div className={styles.advantages__item}>
          <InstallmentIcon />
          <p>Розстрочка 4 міс./0% без переплат</p>
        </div>
        <div className={styles.advantages__item}>
          <DeliveryIcon />
          <p>Безкоштовна доставка</p>
        </div>
        <div className={styles.advantages__item}>
          <WarrantyIcon />
          <p>Офіційна гарантія</p>
        </div>
      </div>
      <div className={styles.advantages__row}>
        <div className={styles.advantages__item}>
          <PriceIcon />
          <p>Краща ціна</p>
        </div>
        <div className={styles.advantages__item}>
          <YearsIcon />
          <p>11 років на ринку</p>
        </div>
        <div className={styles.advantages__item}>
          <ConsultationIcon />
          <p>Професійна консультація</p>
        </div>
      </div>
    </div>
  );
}