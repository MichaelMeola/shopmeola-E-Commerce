import React from "react";
import { useCart, useCartProducts } from "../../state/cart.jsx";

const CardDisplay = ({ initialProductData }) => {
  const { products, addProduct } = useCartProducts()
  console.log('p', products)

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-128x128">
          <img src={`${initialProductData.image}`} alt="Product Image" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{initialProductData.name}</p>
            <p className="subtitle is-6 has-text-weight-semibold">
              {initialProductData.price}
            </p>
          </div>
        </div>

        <div className="content">
          <p className="has-text-grey">{initialProductData.description}</p>
        </div>
      </div>

      <div className="card-footer">
        <button
          onClick={() => {
            addProduct(initialProductData)
          }}
          className="card-footer-item has-text-primary"
        >
          Add to Cart
        </button>
        <a href="#" className="card-footer-item has-text-grey">
          View Details
        </a>
      </div>
    </div>
  );
};

export default CardDisplay;
