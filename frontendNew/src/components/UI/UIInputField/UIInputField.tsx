import clsx from "clsx";
import styles from "./UIInputField.module.css";

interface UIInputFieldProps {
  type: "text" | "password" | "email" | "url" | "search" | "tel" | "number";
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  placeholder?: string;
  required?: boolean;
  size?: "m" | "s";
  isError?: boolean;
  isWidth?: boolean;
}

function UIInputField({
  type,
  className,
  value,
  onChange,
  name,
  placeholder,
  required,
  size,
  isError,
  isWidth,
}: UIInputFieldProps) {
  return (
    <input
      className={clsx(
        className,
        styles.input,
        size && styles[`input_${size}`],
        isError && styles.input_error,
        isWidth && styles.input_width,
      )}
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      required={required}
    />
  );
}

export default UIInputField;
