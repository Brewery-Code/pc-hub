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
};

function UIButton({
  children,
  className,
  color,
  size,
  style,
  width,
  link,
}: UIButtonProps) {
  const navigate = useNavigate();

  const navigation = () => {
    navigate(link || "/", { replace: false });
  };

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
      onClick={navigation}
    >
      {children}
    </button>
  );
}

export default UIButton;
