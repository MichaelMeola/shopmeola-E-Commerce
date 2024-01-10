import React from "react";
import { useState } from "react";
import axios from "axios";

const ProductsTable = ({
  initialProductData,
  deleteProduct,
  initialEditMode,
  productData,
  setProductData,
}) => {
  const [isEditing, setIsEditing] = useState(initialEditMode);

  const changeEditMode = () => setIsEditing(true);
  const changeNormalMode = () => {
    axios
      .put(`/product/${initialProductData.productId}`, {})
      .then((res) => {
        console.log(res.data);
        setProductData(res.data);
        setIsEditing(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return isEditing ? (
    <tr key={initialProductData.productId}>
      <td>
        <button onClick={changeNormalMode} className="button is-success is-outlined">Save</button>
      </td>
      <th>{initialProductData.productId}</th>
      <td>
        <input
          className="input"
          type="text"
          placeholder="Name"
          value={initialProductData.name}
          onChange={() => {}}
        />
      </td>
      <td>
        <input className="input" type="text" placeholder="Description" />
      </td>
      <td>
        <input className="input" type="text" placeholder="$0.00" />
      </td>
      <td>
        <input className="input" type="number" placeholder="0" />
      </td>
      <td>
        <input className="input" type="number" placeholder="0" />
      </td>
      <td>
        <input className="input" type="number" placeholder="0" />
      </td>
      <td>
        <input className="input" type="number" placeholder="0" />
      </td>
      <td>
        <div className="file">
          <label className="file-label">
            <input className="file-input" type="file" name="resume" />
            <span className="file-cta">
              <span className="file-label">Choose a file…</span>
            </span>
          </label>
        </div>
      </td>
    </tr>
  ) : (
    <tr key={initialProductData.productId}>
      <td>
        <button onClick={deleteProduct} className="button is-danger">
          Delete
        </button>
        <button onClick={changeEditMode} className="button is-info">Edit</button>
      </td>
      <th>{initialProductData.productId}</th>
      <td>{initialProductData.name}</td>
      <td>{initialProductData.description}</td>
      <td>{initialProductData.price}</td>
      <td>{initialProductData.s}</td>
      <td>{initialProductData.m}</td>
      <td>{initialProductData.l}</td>
      <td>{initialProductData.xl}</td>
      <td>{initialProductData.image}</td>
    </tr>
  );
};

export default ProductsTable;
