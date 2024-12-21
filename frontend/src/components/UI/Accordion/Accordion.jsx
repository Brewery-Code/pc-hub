import styles from './Accordion.module.css';

export default function Accordion({ title, list }) {
  return (
    <div className={styles.accordion}>
      <div className={styles.accordion__title}>{title}</div>
      <ul className={styles.accordion__list}>
        {list?.map(item => (
          <li key={item} className={styles.accordion__item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
