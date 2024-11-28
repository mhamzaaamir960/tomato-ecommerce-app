import React from "react";
import MaxWidth from "../utils/MaxWidth";
import styles from "./MenuCards.module.css";
import food_1 from "../../assets/frontend_assets/food_1.png";
import { food_list, assets } from "../../assets/frontend_assets/assets";

function MenuCards() {
  return (
    <MaxWidth>
      <div className={styles.container}>
        <h2 className={styles.heading2}>Top dishes near you</h2>
        <div className={styles.menuCards}>
          {food_list.map((item) => (
            <div className={styles.menuCard} key={item.id}>
              <img
                src={assets.add_icon_white}
                alt="Add icon"
                className={styles.addIcon}
              />
              <img
                src={item.image}
                alt={`${item.name} image`}
                className={styles.itemImg}
              />
              <div className={styles.itemData}>
                <h3 style={{ fontSize: "25px", fontWeight: "600" }}>
                  {item.name}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "400",
                    color: "rgb(46, 46, 46)",
                  }}
                >
                  {item.description}
                </p>
                <span
                  style={{
                    fontSize: "25px",
                    fontWeight: "600",
                    color: "#ff6347",
                  }}
                >
                  ${item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MaxWidth>
  );
}

export default MenuCards;
