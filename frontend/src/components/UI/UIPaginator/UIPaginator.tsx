import { useTranslation } from "react-i18next";
import styles from "./UIPaginator.module.css";
import { PaginatorArrow } from "../../../assets/icons";
import clsx from "clsx";
import { useNavigate, useParams } from "react-router-dom";

interface IUIPaginatorProps {
  className?: string;
}

function UIPaginator({ className }: IUIPaginatorProps) {
  const { t } = useTranslation();
  const { category, productList, page } = useParams(); // Отримуємо параметри з URL
  const navigate = useNavigate();

  const loadMoreProducts = () => {
    // Якщо page не задано, починаємо з 2
    if (page === undefined) {
      navigate(`/home/catalog/${category}/${productList}/2`);
    } else {
      // Якщо page є, збільшуємо на 1
      navigate(
        `/home/catalog/${category}/${productList}/${parseInt(page) + 1}`,
      );
    }
  };

  return (
    <div className={clsx(styles.paginator, className)}>
      <div className={styles.paginator__more} onClick={loadMoreProducts}>
        <div className={styles.paginator__text}>{t("paginator.seeMore")}</div>
        <PaginatorArrow className={styles.paginator__arrow} />
      </div>
    </div>
  );
}

export default UIPaginator;
