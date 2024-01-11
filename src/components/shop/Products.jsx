import React, { useEffect } from 'react';
import { useProductStore } from "../../state/ZustandState.jsx";
import axios from 'axios';
import CardDisplay from './CardDisplay';

const Products = () => {
  const { products, setProducts } = useProductStore();

  useEffect(() => {
    axios
      .get('/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setProducts]);

  const cards = products.map((product) => (
    <CardDisplay product={product} key={product.productId} />
  ));


  return <div>{cards}</div>;
};

export default Products;