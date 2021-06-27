import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { useData } from "../Contexts/data";

export default function Cart() {
  const { setCart, cart, saveForLater, setSaveForLater } = useData();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    cart.forEach((item) => (sum += item.price));
    setTotal(sum);
  }, [cart]);

  const handleRemove = (product) => {
    const tempCart = cart.filter((item) => item !== product);
    setCart(tempCart);
  };

  const handleLater = (product) => {
    setSaveForLater([...saveForLater, product]);
    const tempCart = cart.filter((item) => item !== product);
    setCart(tempCart);
    console.log(saveForLater);
  };

  const handleCart = (product) => {
    setCart([...cart, product]);
    const tempLater = saveForLater.filter((item) => item !== product);
    setSaveForLater(tempLater);
  };

  const handleRemoveLater = (product) => {
    const tempLater = saveForLater.filter((item) => item !== product);
    setSaveForLater(tempLater);
  };

  return (
    <div>
      <div className="sticky">
        <Navbar />
      </div>
      <h2>My Cart</h2>
      <div className="products">
        {cart?.map((item) => (
          <div key={item.id} className="card">
            <img src={item.img} alt={item.brand} />
            <h2>{item.name}</h2>
            <h3>{item.brand}</h3>
            <h4>₹ {item.price}</h4>
            <button onClick={() => handleLater(item)}>Save for Later</button>
            <button onClick={() => handleRemove(item)}>Remove</button>
          </div>
        ))}
      </div>
      <h2>Subtotal:₹ {total}</h2>
      <h2>Save for Later</h2>
      <div className="products">
        {saveForLater?.map((item) => (
          <div key={item.id} className="card">
            <img src={item.img} alt={item.brand} />
            <h2>{item.name}</h2>
            <h3>{item.brand}</h3>
            <h4>₹ {item.price}</h4>
            <button onClick={() => handleCart(item)}>Move to Cart</button>
            <button onClick={() => handleRemoveLater(item)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
