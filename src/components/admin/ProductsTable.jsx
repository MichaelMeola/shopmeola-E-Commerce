import React from 'react'

const ProductsTable = ({ initialProductData }) => {
  return (
  <tr key={initialProductData.productId}>
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
  )
}

export default ProductsTable