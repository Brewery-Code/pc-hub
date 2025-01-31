import clsx from "clsx";
import styles from "./UICross.module.css";

interface IUICrossProps {
  className?: string;
  closeMenu?: () => void;
}

function UICross({ className, closeMenu }: IUICrossProps) {
  return (
    <div className={clsx(className, styles.cross)} onClick={closeMenu}></div>
  );
}

export default UICross;
