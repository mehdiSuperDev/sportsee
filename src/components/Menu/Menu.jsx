import styles from './Menu.module.css';
import { useState } from 'react';

function Menu() {
  const [activeLink, setActiveLink] = useState('/');

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className={styles.menu}>
      <a
        href="/"
        className={activeLink === '/' ? 'active' : ''}
        onClick={() => handleClick('/')}
      >
        Accueil
      </a>
      <a
        href="/profil"
        className={activeLink === '/profil' ? 'active' : ''}
        onClick={() => handleClick('/profil')}
      >
        Profil
      </a>
      <a
        href="/reglages"
        className={activeLink === '/reglages' ? 'active' : ''}
        onClick={() => handleClick('/reglages')}
      >
        Réglages
      </a>
      <a
        href="/communaute"
        className={activeLink === '/communaute' ? 'active' : ''}
        onClick={() => handleClick('/communaute')}
      >
        Communauté
      </a>
    </nav>
  );
}

export default Menu;
