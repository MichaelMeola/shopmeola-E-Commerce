import React, { useState } from "react";
import { useCartProducts } from "../../state/ZustandState.jsx";
import "./Products.css";

const CardDisplay = ({ product }) => {
  const { addProduct } = useCartProducts();
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
    console.log("Selected Size:", size);
  };

  const isSizeSelected = selectedSize !== null;

  const handleAddToCart = () => {
    if (
      isSizeSelected ||
      product.s === null ||
      product.m === null ||
      product.l === null ||
      product.xl === null
    ) {
      addProduct({ ...product, size: selectedSize });
    }
  };

  return (
    <>
      <div className="card card-product">
        <div className="card-image">
          <figure className="image is-128x128">
            <img src={`${product.image}`} alt="Product Image" />
          </figure>
        </div>

        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{product.name}</p>
              <p className="subtitle is-6 has-text-weight-semibold price">
                {product.price}
              </p>
            </div>
          </div>

          <div className="content">
            <p className="has-text-grey">{product.description}</p>
          </div>

          <div className="content">
            {product.s !== null && (
              <div className="size-selection">
                <h5>Select Your Size</h5>
                <div className="button-group">
                  <button
                    className={`button is-black is-outlined ${
                      selectedSize === "S" ? "is-black" : ""
                    }`}
                    onClick={() => handleSizeSelection("S")}
                    disabled={product.s === 0}
                  >
                    S
                  </button>
                  {product.m !== null && (
                    <button
                      className={`button is-black is-outlined ${
                        selectedSize === "M" ? "is-black" : ""
                      }`}
                      onClick={() => handleSizeSelection("M")}
                      disabled={product.m === 0}
                    >
                      M
                    </button>
                  )}
                  {product.l !== null && (
                    <button
                      className={`button is-black is-outlined ${
                        selectedSize === "L" ? "is-black" : ""
                      }`}
                      onClick={() => handleSizeSelection("L")}
                      disabled={product.l === 0}
                    >
                      L
                    </button>
                  )}
                  {product.xl !== null && (
                    <button
                      className={`button is-black is-outlined ${
                        selectedSize === "XL" ? "is-black" : ""
                      }`}
                      onClick={() => handleSizeSelection("XL")}
                      disabled={product.xl === 0}
                    >
                      XL
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <footer className="card-footer">
          <button
            onClick={handleAddToCart}
            className="card-footer-item button is-success"
            disabled={
              !isSizeSelected &&
              product.s !== null &&
              product.m !== null &&
              product.l !== null &&
              product.xl !== null
            }
          >
            Add To Cart
          </button>
        </footer>
      </div>
    </>
  );
};

export default CardDisplay;