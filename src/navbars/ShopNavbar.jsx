import React from "react";
import "bulma/css/bulma.css";
import { useCartProducts } from "../state/ZustandState.jsx";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ShopNavbar = () => {
  const { cart, cartQuantity } = useCartProducts();

  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="../../pictures/MEOLA Sticker.png" />
        </a>
      </div>
      <Link className="navbar-item has-dropdow is-hoverable" to="/shop">
        <a className="navbar-link">Shop</a>
        <div className="navbar-dropdown">
          <a className="navbar-item">Clothing</a>
          <a className="navbar-item">Accessories</a>
          <a className="navbar-item">Vinyls</a>
        </div>
      </Link>
      <Link className="navbar-item" to="/signup">
        Sign Up
      </Link>
      <Link className="navbar-item" to="/cart">
        Cart - {cartQuantity}
      </Link>
    </nav>
  );
};

export default ShopNavbar;
