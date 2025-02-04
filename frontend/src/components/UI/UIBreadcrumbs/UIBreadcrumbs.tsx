import { useLocation, useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  return (
    <div className={clsx(className, styles.breadcrumbs)}>
      {breadcrumbs.map((crumb, index) => (
        <div
          key={index}
          className={styles.crumb}
          onClick={() => navigate(`/${crumb}`)}
        >
          <span className={styles.crumb__text}>{crumb}</span>
          <ArrowBold className={styles["crumb-arrow-icon"]} />
        </div>
      ))}
    </div>
  );
}

export default UIBreadcrumbs;
