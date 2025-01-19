import clsx from "clsx";
import { IProduct } from "../../../store/topSales/topSales.slice";
import UIProductCard from "../UIProductCard/UIProductCard";
import styles from "./UIProductList.module.css";

interface IUIProductListProps {
  list: IProduct[];
  className?: string;
  style?: React.CSSProperties;
  childClassName?: string;
  childType?: "common" | "dark";
}

function UIProductList({
  list,
  className,
  style,
  childClassName,
  childType,
}: IUIProductListProps) {
  return (
    <div className={clsx(styles.list, className)} style={style}>
      {list?.map((item) => (
        <UIProductCard
          key={item.id}
          product={item}
          className={childClassName}
          type={childType}
        />
      ))}
    </div>
  );
}

export default UIProductList;
