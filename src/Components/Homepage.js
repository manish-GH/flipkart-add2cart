// import React, { useState, useEffect } from "react";
import { useData } from "../Contexts/data";
import { Navbar } from "./Navbar";

export default function Homepage() {
  const { productInfo, setCart, cart } = useData();

  console.log(cart);
  const addToCart = (product) => {
    console.log(product);
    if (!cart?.includes(product)) {
      setCart([...cart, product]);
    }

    console.log(cart);
    localStorage.setItem("tempCart", cart);
  };
  return (
    <div>
      <div className="sticky">
        <Navbar />
      </div>
      <div className="products">
        {productInfo?.map((item) => (
          <div key={item.id} className="card">
            <img src={item.img} alt={item.brand} />
            <h2>{item.name}</h2>
            <h3>{item.brand}</h3>
            <h4>₹ {item.price}</h4>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
