import styles from './Menu.module.css';
import menuIcon from '../../assets/images/logo.png';

function Menu() {
  return (
    <nav className="full-height">
      <ul className={`${styles.list} full-height`}>
        <li>
          <a href="#" className={styles.itemIcon}>
            <img src={menuIcon} alt="menu icon" />
            <span>Sportsee</span>
          </a>
        </li>
        <li>
          <a href="#">Accueil</a>
        </li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </nav>
  );
}

export default Menu;
