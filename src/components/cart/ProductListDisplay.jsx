import React from "react";
import { useCartProducts } from "../../state/CartState.jsx";

const ProductListDisplay = ({ product }) => {
  const { removeProduct, changeQuantity } = useCartProducts();

  return (
    <div className="list has-visible-pointer-controls">
      <div className="list-item">
        <div className="list-item-image">
          <figure className="image is-96x96">
            <img src={`${product.image}`} alt="Product Image" />
          </figure>
        </div>

        <div className="list-item-content">
          <div className="list-item-title">{product.name}</div>
        </div>

        <div className="list-item-controls">
          <div className="is-flex is-align-items-center">
            <span>{product.price}</span>

            <div className="control ml-3">
              <input className="input" type="number" value={product.quantity} onChange={(event) => changeQuantity(event, product.productId)}/>
            </div>
          </div>

          <button className="button is-danger"
            onClick={() => {
              removeProduct(product.productId);
            }}
          >
            Remove Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListDisplay;
