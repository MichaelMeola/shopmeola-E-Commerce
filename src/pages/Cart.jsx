import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShopNavbar from "../navbars/ShopNavbar";
import { useCartProducts } from "../state/cart.jsx";

const Cart = () => {
  const { products } = useCartProducts();
  console.log(products);

  return (
    <div>
      <ShopNavbar />
      <h1>Cart</h1>
      <ul>
      {products.map((product) => {
        return <li key={product.productId}>{product.name}</li>;
      })}
      </ul>
    </div>
  );
};

export default Cart;
