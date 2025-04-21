import clsx from "clsx";
import UIProductCard from "../UIProductCard/UIProductCard";
import styles from "./UIProductList.module.css";
import { IProduct } from "../../../store/types";

interface IUIProductListProps {
  list: IProduct[];
  className?: string;
  style?: React.CSSProperties;
  childClassName?: string;
  childType?: "light" | "dark";
  isListOpen?: boolean;
}

function UIProductList({
  list,
  className,
  style,
  childClassName,
  childType,
  isListOpen,
}: IUIProductListProps) {
  return (
    <div
      className={clsx(styles.list, className, isListOpen && styles.list_open)}
      style={style}
    >
      {list?.map((item) => (
        <UIProductCard
          key={item.id}
          product={item}
          className={childClassName}
          color={childType}
        />
      ))}
    </div>
  );
}

export default UIProductList;
