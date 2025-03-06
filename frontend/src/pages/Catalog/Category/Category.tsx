import { Link, useParams } from "react-router-dom";
import {
  ICategory,
  ICategoryChildren,
} from "../../../store/catalog/catalog.slider";
import styles from "./Category.module.css";

interface ICategoryProps {
  category: ICategory | ICategoryChildren;
  isCatalog: boolean;
}

function Category({ category, isCatalog }: ICategoryProps) {
  const { category: categoryParam } = useParams();

  return (
    <Link
      to={
        isCatalog
          ? `/home/catalog/${category.slug}`
          : `/home/catalog/${categoryParam}/${category.slug}`
      }
    >
      <div className={styles.category}>
        <div className={styles["category__img-container"]}>
          <img
            className={styles.category__img}
            src={category.image}
            alt="categoryImg"
          />
        </div>
        <div className={styles.category__name}>{category.name}</div>
      </div>
    </Link>
  );
}

export default Category;
