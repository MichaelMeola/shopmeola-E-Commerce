import React from "react";
import { Link } from "react-router-dom";
import { useCartProducts } from "../../state/ZustandState.jsx";

const OrderSummary = () => {
  const { cart, cartQuantity, cartTotalPrice } = useCartProducts();

  const quantityText = cartQuantity === 1 ? "item" : "items";

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
        <button className="button is-success">Checkout</button>
      </Link>
    </div>
  );
};

export default OrderSummary;
