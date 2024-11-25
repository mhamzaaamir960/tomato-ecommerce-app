import React from "react";
import { assets } from "../../assets/frontend_assets/assets";
import styles from "./Navbar.module.css";
import { navLinks } from "./NavLinks";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <a href="/">
        <img src={assets.logo} alt="Tomato logo" className={styles.navLogo} />
      </a>

      {/* Navbar Links */}
      <ul className={styles.navbarLinks}>
        {navLinks.map((link) => (
          <Link to={link.link} key={link.name}>
            <li >{link.name}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
