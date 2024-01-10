import React from "react";
import HomeNavbar from "../navbars/HomeNavbar.jsx";
import CartDisplay from "../components/cart/CartDisplay.jsx";
import { Link } from "react-router-dom";
import { useCartProducts } from "../state/CartState.jsx";

const Cart = () => {
  const { cart, removeProduct, clearCart } = useCartProducts();
  // console.log(cart);

  const productList = cart.map((product) => (
    <CartDisplay key={product.productId} product={product} />
  ));

  return (
    <>
      <HomeNavbar />
      <div className="box" id="cart">
        <h1 className="title is-4 mb-2">Your Shopping Cart</h1>
        {cart.length === 0 ? (
          <>
            <p>Your cart is empty :(</p>
            <Link className="button is-black is-medium" to="/shop">
              Shop
            </Link>
          </>
        ) : (
          <>
            {productList}
            <button onClick={() => clearCart()}>Clear Cart</button>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
