import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoCircle}>IB</div>
      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/project" className={({ isActive }) => isActive ? styles.active : ''}>
            Project
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''}>
            Contact
          </NavLink>
        </li>
      </ul>
      <div className={styles.rightSection}>
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
