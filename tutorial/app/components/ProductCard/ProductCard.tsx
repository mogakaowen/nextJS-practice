import React from "react";
import AddToCart from "../AddToCart/AddToCart";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <h1>Product Card</h1>
      <div className="p-5 my-5 bg-sky-400 text-white text-sm hover:bg-sky-100">
        <AddToCart />
      </div>
    </div>
  );
};

export default ProductCard;
