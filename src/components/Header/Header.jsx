import Menu from '../Menu/Menu';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Menu />
    </header>
  );
}

export default Header;
