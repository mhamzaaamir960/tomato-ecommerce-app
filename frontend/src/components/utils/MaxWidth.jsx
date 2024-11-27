import React from "react";
import styles from "./MaxWidth.module.css";

function MaxWidth({children}) {
  return <section className={styles.container}>{children}</section>;
}

export default MaxWidth;
