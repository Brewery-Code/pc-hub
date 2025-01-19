import clsx from "clsx";
import { ArrowBolt } from "../../../../assets/icons";
import Test from "../../../../assets/icons/Test";
import styles from "./Catalog.module.css";

interface ICatalogProps {
  className: string;
}

function Catalog({ className }: ICatalogProps) {
  return (
    <ul className={clsx(styles.catalog, className)}>
      <li className={styles.category}>
        <Test />
        <span className={styles.category__name}>Category item</span>
        <ArrowBolt className={clsx(styles.category__arrow, "only-desktop")} />
      </li>
      <li className={styles.category}>
        <Test />
        <span className={styles.category__name}>Category item</span>
        <ArrowBolt className={clsx(styles.category__arrow, "only-desktop")} />
      </li>
      <li className={styles.category}>
        <Test />
        <span className={styles.category__name}>Category item</span>
        <ArrowBolt className={clsx(styles.category__arrow, "only-desktop")} />
      </li>
      <li className={styles.category}>
        <Test />
        <span className={styles.category__name}>Category item</span>
        <ArrowBolt className={clsx(styles.category__arrow, "only-desktop")} />
      </li>
      <li className={styles.category}>
        <Test />
        <span className={styles.category__name}>Category item</span>
        <ArrowBolt className={clsx(styles.category__arrow, "only-desktop")} />
      </li>
      <li className={styles.category}>
        <Test />
        <span className={styles.category__name}>Category item</span>
        <ArrowBolt className={clsx(styles.category__arrow, "only-desktop")} />
      </li>
      <li className={styles.category}>
        <Test />
        <span className={styles.category__name}>Category item</span>
        <ArrowBolt className={clsx(styles.category__arrow, "only-desktop")} />
      </li>
      <li className={styles.category}>
        <Test />
        <span className={styles.category__name}>Category item</span>
        <ArrowBolt className={clsx(styles.category__arrow, "only-desktop")} />
      </li>
      <li className={styles.category}>
        <Test />
        <span className={styles.category__name}>Category item</span>
        <ArrowBolt className={clsx(styles.category__arrow, "only-desktop")} />
      </li>
      <li className={styles.category}>
        <Test />
        <span className={styles.category__name}>Category item</span>
        <ArrowBolt className={clsx(styles.category__arrow, "only-desktop")} />
      </li>
      <li className={styles.category}>
        <Test />
        <span className={styles.category__name}>Category item</span>
        <ArrowBolt className={clsx(styles.category__arrow, "only-desktop")} />
      </li>
      <li className={styles.category}>
        <Test />
        <span className={styles.category__name}>Category item</span>
        <ArrowBolt className={clsx(styles.category__arrow, "only-desktop")} />
      </li>
      <li className={styles.category}>
        <Test />
        <span className={styles.category__name}>Category item</span>
        <ArrowBolt className={clsx(styles.category__arrow, "only-desktop")} />
      </li>
      <li className={styles.category}>
        <Test />
        <span className={styles.category__name}>Category item</span>
        <ArrowBolt className={clsx(styles.category__arrow, "only-desktop")} />
      </li>
      <div className={clsx(styles.catalog__more, "only-desktop")}>
        <ArrowBolt className={clsx(styles["catalog__more-arrow"])} />
      </div>
    </ul>
  );
}

export default Catalog;
