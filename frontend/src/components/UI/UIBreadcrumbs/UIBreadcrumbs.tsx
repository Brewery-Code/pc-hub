import { Link, useLocation } from "react-router-dom";
import styles from "./UIBreadcrumbs.module.css";
import { ArrowBold } from "../../../assets/icons";
import clsx from "clsx";

interface IUIBreadcrumbsProps {
  className?: string;
}

function UIBreadcrumbs({ className }: IUIBreadcrumbsProps) {
  const breadcrumbs = useLocation()
    .pathname.split("/")
    .filter((crumb) => crumb !== "");

  return (
    <div className={clsx(className, styles.breadcrumbs)}>
      {breadcrumbs.map((crumb, index) => (
        <Link
          key={index}
          to={`/${breadcrumbs.slice(0, index + 1).join("/")}`}
          className={styles.crumb}
        >
          <span className={styles.crumb__text}>{crumb}</span>
          <ArrowBold className={styles["crumb-arrow-icon"]} />
        </Link>
      ))}
    </div>
  );
}

export default UIBreadcrumbs;
