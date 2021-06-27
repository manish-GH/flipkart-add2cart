import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { useData } from "../Contexts/data";

export const Navbar = () => {
  const { cart } = useData();
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    setItemCount(cart.length);
  }, [cart]);

  return (
    <div>
      <div className="nav">
        <Link className="store" to="/">
          Flipkart
        </Link>
        <div className="nav-search">
          <input
            type="text"
            placeholder="Search for products, brands and more"
          />
        </div>
        <button>Login</button>
        <p>More</p>
        <Link className="cart-nav" to="/cart">
          Cart
          <Badge badgeContent={itemCount} color="secondary">
            <ShoppingCartIcon className="cart-icon" />
          </Badge>
        </Link>
      </div>
    </div>
  );
};
