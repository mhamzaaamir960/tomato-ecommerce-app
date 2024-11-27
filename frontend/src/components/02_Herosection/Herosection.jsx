import React from "react";
import styles from "./Herosection.module.css";
import MaxWidth from "../utils/MaxWidth";
import { Link } from "react-router-dom";

function Herosection() {
  return (
    <MaxWidth>
      <div className={styles.container}>
        <div className={styles.heroData}>
          <h1 className={styles.heading1}>Order your favourite food here</h1>
          <p className={styles.heroDesc}>
            Choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest ingredients and culinary expertise. Our
            mission is to satisfy your cravings and elevate your dining
            experience, one delicious meal at a time.
          </p>
          <Link to="/menu" className={styles.heroBtn}>View Menu</Link>
        </div>
      </div>
    </MaxWidth>
  );
}

export default Herosection;
