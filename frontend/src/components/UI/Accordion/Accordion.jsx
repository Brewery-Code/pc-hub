import { ReactComponent as ArrowIcon } from '../../../assets/icons/arrow.svg';
import styles from './Accordion.module.css';

export default function Accordion({ title, list, whichAccordionIsActive, toggleAccordion }) {
  return (
    <div className={styles.accordion}>
      <div className={styles.accordion__title}
        onClick={() => toggleAccordion(title)}
      >
        <h6>{title}</h6>
        <ArrowIcon className={whichAccordionIsActive === title ? `${styles.title__arrow} ${styles.title__arrow_active}` : styles.title__arrow} />
      </div>
      <ul className={whichAccordionIsActive === title ? `${styles.accordion__list} ${styles.accordion__list_active}` : styles.accordion__list}>
        {list?.map(item => (
          <li key={item} className={styles.accordion__item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
