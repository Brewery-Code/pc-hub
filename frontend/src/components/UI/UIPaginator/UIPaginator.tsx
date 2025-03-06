import { useTranslation } from "react-i18next";
import styles from "./UIPaginator.module.css";
import { PaginatorArrow, PaginatorArrowStraight } from "../../../assets/icons";
import clsx from "clsx";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

interface IUIPaginatorProps {
  className?: string;
  totalPages: number;
}

function UIPaginator({ className, totalPages }: IUIPaginatorProps) {
  const { t } = useTranslation();
  const { category, productList } = useParams();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  const navigate = useNavigate();
  let pageInt = 0;
  if (page === undefined) {
    pageInt = 1;
  } else {
    pageInt = parseInt(page);
  }
  const loadMoreProducts = () => {
    if (page === undefined) {
      navigate(`/home/catalog/${category}/${productList}?page=2`);
    } else {
      navigate(`/home/catalog/${category}/${productList}?page=${pageInt + 1}`);
    }
  };

  const generatePageList = (currentPage: number, totalPages: number) => {
    const range: (number | string)[] = [];

    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    range.push(1);

    if (currentPage > 4) {
      range.push("...");
    }

    for (
      let i = Math.max(2, currentPage - 2);
      i <= Math.min(totalPages - 1, currentPage + 2);
      i++
    ) {
      range.push(i);
    }

    if (currentPage < totalPages - 3) {
      range.push("...");
    }

    range.push(totalPages);

    return range;
  };

  return (
    <div className={clsx(styles.paginator, className)}>
      <div className={styles.paginator__more} onClick={loadMoreProducts}>
        <div className={styles.paginator__text}>{t("paginator.seeMore")}</div>
        <PaginatorArrow className={styles.paginator__arrow} />
      </div>
      <div className={styles.pages}>
        {totalPages > 3 ? (
          <div className={styles.pages__previous}>
            <PaginatorArrowStraight className={styles.pages__arrow_previous} />
            {t("paginator.previous")}
          </div>
        ) : null}
        {generatePageList(pageInt, totalPages).map((item, index) => (
          <Link
            key={index}
            className={clsx(
              styles.pages__page,
              item === pageInt && styles.pages__page_active,
            )}
            to={
              item === "..."
                ? `/home/catalog/${category}/${productList}?page=${page}`
                : `/home/catalog/${category}/${productList}?page=${item}`
            }
          >
            {item}
          </Link>
        ))}
        {totalPages > 3 ? (
          <div className={styles.pages__next}>
            {t("paginator.next")}
            <PaginatorArrowStraight className={styles.pages__arrow_next} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default UIPaginator;
