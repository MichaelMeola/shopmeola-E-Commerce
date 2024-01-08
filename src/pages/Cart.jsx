import React from "react";
import ShopNavbar from "../navbars/ShopNavbar";
import { useCartProducts } from "../state/CartState.jsx";

const Cart = () => {
  const { cart, removeProduct, clearCart } = useCartProducts();
  console.log(cart);

  return (
    <div>
      <ShopNavbar />
      <ul>
        {cart.map((product) => {
          return <li key={product.productId}>{product.name}</li>;
        })}
      </ul>
      <button
        onClick={() => {
          clearCart();
        }}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
