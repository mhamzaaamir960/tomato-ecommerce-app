import React from "react";
import MaxWidth from "../utils/MaxWidth";
import styles from "./ExploreMenu.module.css";
import { assets } from "../../assets/frontend_assets/assets";
import { menu_list } from "../../assets/frontend_assets/assets";


function ExploreMenu() {
  return (
    <MaxWidth>
      <div className={styles.container}>
        <h2 className={styles.heading2}>Explore our menu</h2>
        <p className={styles.paragrapgh}>
          Choose from a diverse menu featuring a delectable array of dishes. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <div className={styles.menuList}>
          {menu_list.map((item, index) => (
            <div key={index} className={styles.menuItem}>
              <img src={item.menu_image} alt="menu" className={styles.menuImg} />
              <span className={styles.menuName}>{item.menu_name}</span>
            </div>
          ))}
        </div>

        <div className={styles.horizantalLine} />
      </div>
    </MaxWidth>
  );
}

export default ExploreMenu;
