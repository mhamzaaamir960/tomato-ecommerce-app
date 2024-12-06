import React from "react";
import MaxWidth from "../utils/MaxWidth";
import styles from "./MenuCards.module.css";
import MenuCard from "./MenuCard";
import { UseContext } from "../../context/ContextProvider";

function MenuCards({ category }) {
  const { food_list } = UseContext();
  return (
    <MaxWidth>
      <div className={styles.container}>
        <h2 className={styles.heading2}>Top dishes near you</h2>
        <div className={styles.menuCards}>
          {category &&
            food_list.map((item, index) => {
              return (
                (item.category === category || category === "All") && (
                  <MenuCard index={index} item={item} />
                )
              );
            })}
        </div>
      </div>
    </MaxWidth>
  );
}

export default MenuCards;
