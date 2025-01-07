import { ReactNode } from "react";
import clsx from "clsx";
import styles from "./UIButton.module.css";

type UIButtonPrimaryProps = {
  children?: ReactNode;
  className?: string;
  type?: "cart" | "catalog";
  color: "primary" | "secondary";
  style: "filled" | "outline";
  size?: "m" | "s" | "xs";
  width?: boolean;
};

function UIButtonPrimary({
  children,
  className,
  // type,
  color,
  size,
  style,
  width,
}: UIButtonPrimaryProps) {
  return (
    <button
      className={clsx(
        className && className,
        styles.button,
        color && styles[`button__${color}`],
        style && styles[`button__${style}`],
        size && styles[`button__${size}`],
        // type && styles[`button__${type}`],
        width && styles.button__width,
      )}
    >
      {children}
    </button>
  );
}

export default UIButtonPrimary;
