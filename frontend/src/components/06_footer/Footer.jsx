import React from "react";
import styles from "./Footer.module.css";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.footerData}>
          <div className={styles.footerCol1}>
            <img src={assets.logo} alt="Tomato logo" className={styles.logo} />
            <p className={styles.footerDesc}>
              Choose from a diverse menu featuring a delectable array of dishes
              crafted with the finest ingredients and culinary expertise. Our
              mission is to satisfy your cravings and elevate your dining
              experience, one delicious meal at a time.
            </p>
            <div className={styles.footerSocialIcons}>
              <a href="/">
                <img
                  src={assets.facebook_icon}
                  alt="Facebook icon"
                  className={styles.socialIcon}
                />
              </a>
              <a href="/">
                <img
                  src={assets.twitter_icon}
                  alt="Facebook icon"
                  className={styles.socialIcon}
                />
              </a>
              <a href="/">
                <img
                  src={assets.linkedin_icon}
                  alt="Facebook icon"
                  className={styles.socialIcon}
                />
              </a>
            </div>
          </div>

          <div className={styles.footerCol2}>
            <h3 className={styles.heading3}>Company</h3>
            <Link to={"/"} className={styles.link}>Home</Link>
            <Link to={"/"} className={styles.link}>About Us</Link>
            <Link to={"/"} className={styles.link}>Delivery</Link>
            <Link to={"/"} className={styles.link}>Privacy Policy</Link>
          </div>

          <div className={styles.footerCol3}>
            <h3 className={styles.heading3}>Get In touch</h3>
            <Link to={"/"} className={styles.link}>+123456789</Link>
            <Link to={"/"} className={styles.link}>tomato@gmail.com</Link>
            
          </div>
        </div>

        <div className={styles.horizantalLine} />
        <p className={styles.copyrightText}>
          copyright 2024 &copy; Tomato.com - All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
