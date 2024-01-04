import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import ProductsTable from './ProductsTable.jsx'
import UsersTable from './UsersTable.jsx'

const AdminData = () => {

    const [productData, setProductData] = useState([])
    const [userData, setUserData] = useState([])

    useEffect(() => {
        axios.get('/products')
        .then((res) => {
            setProductData(res.data)
        })
        .catch((err) => {
            console.log(err);
        })

        axios.get('/users')
        .then((res) => {
            setUserData(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    const productRows = productData.map((product) => <ProductsTable
    initialProductData={product}
    key={product.productId}
    />)

    const userRows = userData.map((user) => <UsersTable
    initialUserData={user}
    key={user.userId}
    />)


  return (
    <div className="container">
        <h1>Products Table</h1>
    <table class='table is-bordered is-narrow is-hoverable is-fullwidth'>
        <thead>
            <tr>
                <th>Product Id</th>
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
            {productRows}
        </tbody>
    </table>

    <h1>Users Table</h1>
    <table className='table is-bordered is-narrow is-hoverable is-fullwidth'>
        <thead>
            <tr>
                <th>User Id</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>
            {userRows}
        </tbody>
    </table>
    </div>
  )
}

export default AdminData