import { createPortal } from "react-dom";
import styles from "./MBurgerMenu.module.css";
import { UIModalBody } from "../../UI";

interface IBurgerMenuProps {
  isBurgerMenuOpen: boolean;
  setIsBurgerMenuOpen: () => void;
}

function MBurgerMenu({
  isBurgerMenuOpen,
  setIsBurgerMenuOpen,
}: IBurgerMenuProps) {
  return createPortal(
    <UIModalBody
      setIsModalOpen={setIsBurgerMenuOpen}
      isModalOpen={isBurgerMenuOpen}
    >
      <div className={styles.menu}></div>
    </UIModalBody>,
    document.getElementById("modals")!,
  );
}

export default MBurgerMenu;
