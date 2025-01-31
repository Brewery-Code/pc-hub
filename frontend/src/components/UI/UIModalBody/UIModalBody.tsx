import React from "react";
import styles from "./UIModalBody.module.css";
import clsx from "clsx";

interface IModalBodyProps {
  children: React.ReactNode;
  className?: string;
  isModalOpen: boolean;
  setIsModalOpen: () => void;
}

function UIModalBody({
  children,
  className,
  isModalOpen,
  setIsModalOpen,
}: IModalBodyProps) {
  return (
    <div
      className={clsx(
        className,
        styles.blur,
        isModalOpen && styles.blur_active,
      )}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          setIsModalOpen();
        }
      }}
    >
      {children}
    </div>
  );
}

export default UIModalBody;
