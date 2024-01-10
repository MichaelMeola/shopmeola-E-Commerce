import React from "react";
import { useCartProducts } from "../../state/CartState.jsx";

const OrderSummary = () => {
    const { cartQuantity, cartTotalPrice } = useCartProducts();

    const quantityText = cartQuantity === 1 ? "item" : "items"

  return (
    <div className="box" id="order">
      <h1 className="title is-4 mb-2">Order Summary</h1>
      <div className="list">
        <div className="list-item">
          <div className="list-item-content">
            <div className="list-item-title">{cartQuantity} {quantityText} : {cartTotalPrice}</div>
          </div>
        </div>
      </div>
      <button>Checkout</button>
    </div>
  );
};

export default OrderSummary;
