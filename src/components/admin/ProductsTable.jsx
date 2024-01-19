import React, { useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const ProductsTable = ({
  initialProductData,
  deleteProduct,
  initialEditMode,
  productData,
  setProductData,
}) => {
  const [isEditing, setIsEditing] = useState(initialEditMode);
  const [name, setName] = useState(initialProductData.name);
  const [description, setDescription] = useState(
    initialProductData.description
  );
  const [price, setPrice] = useState(initialProductData.price);
  const [s, setS] = useState(initialProductData.s);
  const [m, setM] = useState(initialProductData.m);
  const [l, setL] = useState(initialProductData.l);
  const [xl, setXl] = useState(initialProductData.xl);
  const [image, setImage] = useState(initialProductData.image);

  const changeEditMode = () => setIsEditing(true);
  const changeNormalMode = () => {
    const formData = new FormData();
    formData.append("image", image); // Append the image file directly
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("s", s);
    formData.append("m", m);
    formData.append("l", l);
    formData.append("xl", xl);

    axios
      .put(`/product/${initialProductData.productId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
        },
      })
      .then((res) => {
        console.log(res.data);
        setProductData(res.data);
        setIsEditing(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const saveProductData = (imageString) => {
    axios
      .put(`/product/${initialProductData.productId}`, {
        name,
        description,
        price,
        s,
        m,
        l,
        xl,
        image: imageString, // Store the image as a string
      })
      .then((res) => {
        console.log(res.data);
        setProductData(res.data);
        setIsEditing(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  console.log(image);

  return isEditing ? (
    <tr key={initialProductData.productId}>
      <td>
        <button
          onClick={changeNormalMode}
          className="button is-success is-outlined"
        >
          Save
        </button>
      </td>
      <th>{initialProductData.productId}</th>
      <td>
        <input
          className="input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </td>
      <td>
        <input
          className="input"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </td>
      <td>
        <input
          className="input"
          type="text"
          placeholder="$0.00"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </td>
      <td>
        <input
          className="input"
          type="number"
          placeholder="0"
          value={s}
          onChange={(e) => setS(e.target.value)}
        />
      </td>
      <td>
        <input
          className="input"
          type="number"
          placeholder="0"
          value={m}
          onChange={(e) => setM(e.target.value)}
        />
      </td>
      <td>
        <input
          className="input"
          type="number"
          placeholder="0"
          value={l}
          onChange={(e) => setL(e.target.value)}
        />
      </td>
      <td>
        <input
          className="input"
          type="number"
          placeholder="0"
          value={xl}
          onChange={(e) => setXl(e.target.value)}
        />
      </td>
      <td>
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          Upload file
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </Button>
      </td>
    </tr>
  ) : (
    <tr key={initialProductData.productId}>
      <td>
        <button onClick={deleteProduct} className="button is-danger">
          Delete
        </button>
        <button onClick={changeEditMode} className="button is-info">
          Edit
        </button>
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
