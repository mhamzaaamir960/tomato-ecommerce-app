import React from "react";
import { assets } from "../../assets/frontend_assets/assets";
import styles from "./Navbar.module.css";
import { navLinks } from "./NavLinks";
import { Link } from "react-router-dom";

function Navbar({setShowLogin}) {
  return (
    <header
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <nav className={styles.navbar}>
        <a href="/">
          <img src={assets.logo} alt="Tomato logo" className={styles.navLogo} />
        </a>

        {/* Navbar Links */}
        <ul className={styles.navbarLinks}>
          {navLinks.map((link) => (
            <Link className={styles.navLink} to={link.link} key={link.name}>
              <li>{link.name}</li>
            </Link>
          ))}
        </ul>

        {/* Login Button */}
        <div className={styles.container}>
          <Link to={"/"}>
            <img src={assets.search_icon} alt="search icon" />
          </Link>
          <Link to={"/cart"}>
            <img src={assets.basket_icon} alt="basket icon" />
          </Link>
          <button onClick={() => setShowLogin(true)} className={styles.btn}>Sign Up</button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
