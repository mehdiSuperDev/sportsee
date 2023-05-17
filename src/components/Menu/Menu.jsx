import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';
// import { useState } from 'react';

function Menu() {
  return (
    <nav>
      <ul className={styles.menu}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : styles.unselected
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/t"
            className={({ isActive }) =>
              isActive ? styles.active : styles.unselected
            }
          >
            Test
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
