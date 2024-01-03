import React from 'react'

const ProductsTable = ({ initialProductData }) => {
  return (
    <body>
        <div className="container">
            <h1>Products Table</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>S</th>
                    <th>M</th>
                    <th>L</th>
                    <th>XL</th>
                    <th>Image</th>
                </tr>
            </thead>
            
            <tbody>
                <tr>
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
            </tbody>
        </table>
        </div>
    </body>
  )
}

export default ProductsTable