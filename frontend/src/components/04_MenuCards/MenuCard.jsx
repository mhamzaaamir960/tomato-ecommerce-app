import React, { useState } from "react";
import styles from "./MenuCard.module.css";
import { assets } from "../../assets/frontend_assets/assets";

function MenuCard({ item, index }) {
  const [itemsCart, setItemsCart] = useState(0);
  return (
    <div className={styles.menuCard} key={index}>
      {!itemsCart ? (
        <img
          onClick={() => setItemsCart((prev) => prev + 1)}
          src={assets.add_icon_white}
          alt="Add icon"
          className={styles.addIconWhite}
        />
      ) : (
        <div className={styles.cartCounter}>
          <img
            onClick={() => setItemsCart((prev) => prev - 1)}
            src={assets .remove_icon_red}
            alt="Add icon"
            className={styles.removeIcon}
          />
          <span style={{ width: "fit-content" }}>{itemsCart}</span>
          <img
            onClick={() => setItemsCart((prev) => prev + 1)}
            src={assets.add_icon_green}
            alt="Add icon"
            className={styles.addIconGreen}
          />
        </div>
      )}
      <img
        src={item.image}
        alt={`${item.name} image`}
        className={styles.itemImg}
      />
      <div className={styles.itemData}>
        <h3 style={{ fontSize: "25px", fontWeight: "600" }}>{item.name}</h3>
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
  );
}

export default MenuCard;
