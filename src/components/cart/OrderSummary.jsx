import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartProducts } from "../../state/ZustandState.jsx";
import Checkout from "../../pages/Checkout.jsx";

const OrderSummary = () => {
  const { cart, cartQuantity, cartTotalPrice } = useCartProducts();
  const [order, setOrder] = useState([]);

  const quantityText = cartQuantity === 1 ? "item" : "items";

  const handleCheckout = () => {
    setOrder(cart);
  };

  return (
    <div className="box" id="order">
      <h1 className="title is-4 mb-2">Order Summary</h1>
      <div className="list">
        <div className="list-item">
          <div className="list-item-content">
            <div className="list-item-title">
              {cartQuantity} {quantityText} : {cartTotalPrice}
            </div>
          </div>
        </div>
      </div>
      <Link to="/checkout">
        <button onClick={handleCheckout}>Checkout</button>
      </Link>
    </div>
  );
};

export default OrderSummary;
