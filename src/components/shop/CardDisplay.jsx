import React, { useState } from "react";
import { useCartProducts } from "../../state/ZustandState.jsx";

const CardDisplay = ({ product }) => {
  const { cart, addProduct } = useCartProducts();
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
    console.log("previously selectedSize state:", selectedSize);
    console.log("Selected Size:", size);
  };

  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-128x128">
            <img src={`${product.image}`} alt="Product Image" />
          </figure>
        </div>

        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{product.name}</p>
              <p className="subtitle is-6 has-text-weight-semibold">
                {product.price}
              </p>
            </div>
          </div>

          <div className="content">
            <p className="has-text-grey">{product.description}</p>
          </div>

          <div className="content">
            {product.s !== null && (
              <button
                className={`button is-black is-outlined ${
                  selectedSize === "S" ? "is-active" : ""
                }`}
                onClick={() => handleSizeSelection("S")}
              >
                S
              </button>
            )}
            {product.m !== null && (
              <button
                className={`button is-black is-outlined ${
                  selectedSize === "M" ? "is-active" : ""
                }`}
                onClick={() => handleSizeSelection("M")}
              >
                M
              </button>
            )}
            {product.l !== null && (
              <button
                className={`button is-black is-outlined ${
                  selectedSize === "L" ? "is-active" : ""
                }`}
                onClick={() => handleSizeSelection("L")}
              >
                L
              </button>
            )}
            {product.xl !== null && (
              <button
                className={`button is-black is-outlined ${
                  selectedSize === "XL" ? "is-active" : ""
                }`}
                onClick={() => handleSizeSelection("XL")}
              >
                XL
              </button>
            )}
          </div>

          <div className="card-footer">
            <button
              onClick={() => {
                addProduct({ ...product, size: selectedSize });
              }}
              className="card-footer-item button is-success"
            >
              Quick Add To Cart
            </button>
            <button className="card-footer-item button is-focused">
              View Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDisplay;
