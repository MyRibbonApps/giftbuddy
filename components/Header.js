import styles from '../styles/nav.module.scss';
const Header = () => {
  return (
    <nav className={styles.nav}>
      <div>Logo</div>
      <ul className={styles.nav__items}>
        <li className={styles.nav__items__item}>Our blog</li>
        <li className={styles.nav__items__item}>Gift reccomendations</li>
      </ul>
    </nav>
  );
};

export default Header;
