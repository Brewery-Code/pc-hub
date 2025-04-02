import { ReactNode } from "react";
import clsx from "clsx";
import styles from "./UIButton.module.css";
import { useNavigate } from "react-router-dom";

type UIButtonProps = {
  children?: ReactNode;
  className?: string;
  color: "primary" | "secondary";
  style: "filled" | "outline";
  size?: "m" | "s";
  width?: boolean;
  link?: string;
  onClick?: () => void;
  type: "submit";
};

function UIButton({
  children,
  className,
  color,
  size,
  style,
  width,
  onClick,
  type,
}: UIButtonProps) {
  return (
    <button
      className={clsx(
        className && className,
        styles.button,
        color && styles[`button__${color}`],
        style && styles[`button__${style}`],
        size && styles[`button__${size}`],
        width && styles.button__width,
      )}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default UIButton;
