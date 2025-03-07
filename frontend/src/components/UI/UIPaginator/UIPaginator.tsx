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
  const page = searchParams.get("page");
  const length = searchParams.get("length");
  const navigate = useNavigate();
  let pageInt = 1;
  if (typeof page === "string") {
    pageInt = parseInt(page);
  }
  let lengthInt = 1;
  if (typeof length === "string") {
    lengthInt = parseInt(length);
  }

  const loadMoreProducts = () => {
    if (page === undefined) {
      navigate(`/home/catalog/${category}/${productList}?page=2&length=2`);
    } else {
      navigate(
        `/home/catalog/${category}/${productList}?page=${pageInt + 1}&length=${lengthInt + 1}`,
      );
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
      {totalPages > pageInt && (
        <div className={styles.paginator__more} onClick={loadMoreProducts}>
          <div className={styles.paginator__text}>{t("paginator.seeMore")}</div>
          <PaginatorArrow className={styles.paginator__arrow} />
        </div>
      )}
      <div className={styles.pages}>
        {pageInt !== 1 ? (
          <Link
            className={styles.pages__previous}
            to={`/home/catalog/${category}/${productList}?page=${pageInt - 1}`}
          >
            <PaginatorArrowStraight className={styles.pages__arrow_previous} />
            {t("paginator.previous")}
          </Link>
        ) : null}
        {generatePageList(pageInt, totalPages).map((item, index) => (
          <Link
            key={index}
            className={clsx(
              styles.pages__page,
              typeof item === "number" &&
                item <= pageInt &&
                styles.pages__page_active &&
                item >= pageInt - lengthInt + 1 &&
                styles.pages__page_active,
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
        {totalPages > pageInt ? (
          <Link
            className={styles.pages__next}
            to={`/home/catalog/${category}/${productList}?page=${pageInt + 1}`}
          >
            {t("paginator.next")}
            <PaginatorArrowStraight className={styles.pages__arrow_next} />
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default UIPaginator;
