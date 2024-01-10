import React from "react";
import { useCartProducts } from "../../state/CartState.jsx";

const CartDisplay = ({ product }) => {
  const { removeProduct } = useCartProducts();

  console.log(product);

  return (  
    <div class="list has-visible-pointer-controls">
      <div class="list-item">
        <div class="list-item-image">
          <figure class="image is-96x96">
            <img src={`${product.image}`} alt="Product Image"/>
          </figure>
        </div>

        <div class="list-item-content">
          <div class="is-flex is-align-items-center">
            <span>{product.price}</span>
          </div>
        </div>
        
        <div class="list-item-controls">

          <div class="list-item-price">{product.price}</div>
          <div class="list-item-quantity">Quantity : {product.quantity}</div>
          <button onClick={() => {removeProduct(product.productId)}}>Remove Item</button>
        </div>
      </div>
    </div>
  );
};

export default CartDisplay;
