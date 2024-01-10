import React from "react";
import ShopNavbar from "../navbars/ShopNavbar";
import CartDisplay from "../components/cart/CartDisplay.jsx";
import { useCartProducts } from "../state/CartState.jsx";

const Cart = () => {
  const { cart, removeProduct, clearCart } = useCartProducts();
  console.log(cart);

  const productList = cart.map((product) => (
    <CartDisplay key={product.productId} product={product} />
  ));

  return (
    <>
      <ShopNavbar />
      <div class="box" id="cart">
        <h1 class="title is-4 mb-2">Your Shopping Cart</h1>
        
        {productList}
        <button onClick={() => {clearCart()}}>Clear Cart</button>
      </div>
      
    </>
  );
};

export default Cart;
