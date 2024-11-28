import React from "react";
import MaxWidth from "../utils/MaxWidth";
import { assets } from "../../assets/frontend_assets/assets";
import styles from "./AppDownload.module.css";

function AppDownload() {
  return (
    <MaxWidth>
      <div className={styles.container}>
        <h2 className={styles.heading2}>For Better Experience Download Tomato Food App</h2>
        <div className={styles.appIcons}>
          <img src={assets.play_store} alt="Play store icon"  className={styles.appIcon}/>
          <img src={assets.app_store} alt="App store icon" className={styles.appIcon} />
        </div>
      </div>
    </MaxWidth>
  );
}

export default AppDownload;
