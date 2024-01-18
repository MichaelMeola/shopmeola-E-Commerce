import React from "react";
import "bulma/css/bulma.css";
import { Badge } from "@mui/material/";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCartProducts } from "../state/ZustandState.jsx";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const ShopNavbar = () => {
  const { cart, cartQuantity } = useCartProducts();

  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src="../../pictures/MEOLA Sticker.png" alt="Logo" />
        </Link>
      </div>
      <Link className="navbar-item" to="/shop">
        Shop
      </Link>
      <Link className="navbar-item" to="/signup">
        Sign Up
      </Link>
      <Link className="navbar-item" to="/cart">
        <a>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={cartQuantity} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </a>
      </Link>
    </nav>
  );
};

export default ShopNavbar;
