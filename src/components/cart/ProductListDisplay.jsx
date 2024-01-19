import React from "react";
import { useCartProducts } from "../../state/ZustandState.jsx";
import "./ProductListDisplay.css";

const ProductListDisplay = ({ product }) => {
  const { removeProduct, changeQuantity } = useCartProducts();

  console.log(product);

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
          <div className="list-item-title">
            {product.size !== null && <>Size: {product.size}</>}
          </div>
        </div>

        <div className="list-item-controls">
          <div className="is-flex is-align-items-center">
            <span className="item-price">
              $
              {(+(product.price.slice(1)) * product.quantity).toFixed(2)}
            </span>

            <div className="control ml-3 quantity-select">
              <div className="select">
                <select
                  value={product.quantity}
                  onChange={(event) =>
                    changeQuantity(event, product.productId, product.size)
                  }
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
          </div>

          <button
            className="button is-danger remove-button"
            onClick={() => {
              removeProduct(product.productId, product.size);
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