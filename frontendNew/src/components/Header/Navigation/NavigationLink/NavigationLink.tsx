import { ReactNode } from "react";
import styles from "./Navigation.module.css";

interface Props {
  children?: ReactNode;
}

function NavigationLink({ children }: Props) {
  return (
    <li className={styles.link}>
      <a href="">{children}</a>
    </li>
  );
}

export default NavigationLink;
