import { BurgerMenu } from "./BurgerMenu";
import { NavigationLink } from "./NavigationLink";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className="navigation__container">
        <div className={styles.navigation__body}>
          <BurgerMenu />
          <ul className={styles.navigation__list}>
            <NavigationLink>Test</NavigationLink>
            <NavigationLink>Test</NavigationLink>
            <NavigationLink>Test</NavigationLink>
            <NavigationLink>Test</NavigationLink>
            <NavigationLink>Test</NavigationLink>
            <NavigationLink>Test</NavigationLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
