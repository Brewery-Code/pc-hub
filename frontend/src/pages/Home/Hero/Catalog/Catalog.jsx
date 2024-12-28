import { ReactComponent as LikeIcon } from '../../../../assets/icons/like.svg';
import { ReactComponent as ArrowIcon } from '../../../../assets/icons/arrow.svg';
import styles from './Catalog.module.css';

export default function Catalog() {
  return (
    <div className={styles.catalog}>
      <ul className={styles.catalog__list}>
        <li className={styles.catalog__item}><LikeIcon /><div>Комплектуючі ПК</div><ArrowIcon /></li>
        <li className={styles.catalog__item}><LikeIcon /><div>Комплектуючі ПК</div><ArrowIcon /></li>
        <li className={styles.catalog__item}><LikeIcon /><div>Комплектуючі ПК</div><ArrowIcon /></li>
        <li className={styles.catalog__item}><LikeIcon /><div>Комплектуючі ПК</div><ArrowIcon /></li>
        <li className={styles.catalog__item}><LikeIcon /><div>Комплектуючі ПК</div><ArrowIcon /></li>
        <li className={styles.catalog__item}><LikeIcon /><div>Комплектуючі ПК</div><ArrowIcon /></li>
        <li className={styles.catalog__item}><LikeIcon /><div>Комплектуючі ПК</div><ArrowIcon /></li>
        <li className={styles.catalog__item}><LikeIcon /><div>Комплектуючі ПК</div><ArrowIcon /></li>
        <li className={styles.catalog__item}><LikeIcon /><div>Комплектуючі ПК</div><ArrowIcon /></li>
        <li className={styles.catalog__item}><LikeIcon /><div>Комплектуючі ПК</div><ArrowIcon /></li>
        <li className={styles.catalog__item}><LikeIcon /><div>Комплектуючі ПК</div><ArrowIcon /></li>
        <li className={styles.catalog__item}><LikeIcon /><div>Комплектуючі ПК</div><ArrowIcon /></li>
        <li className={styles.catalog__item}><LikeIcon /><div>Комплектуючі ПК</div><ArrowIcon /></li>
        <li className={styles.catalog__item}><LikeIcon /><div>Комплектуючі ПК</div><ArrowIcon /></li>
        <li className={styles.catalog__item}><LikeIcon /><div>Комплектуючі ПК</div><ArrowIcon /></li>
        <li className={styles.catalog__item}><LikeIcon /><div>Комплектуючі ПК</div><ArrowIcon /></li>
        <button className={styles.catalog__open}><ArrowIcon /></button>
      </ul>
    </div>
  );
}