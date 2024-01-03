import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import ProductsTable from './ProductsTable.jsx'
import UsersTable from './UsersTable.jsx'

const AdminData = () => {

    const [currentData, setCurrentData] = useState([])

    useEffect(() => {
        axios.get('/products')
        .then((res) => {
            setCurrentData(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    useEffect(() => {
        axios.get('/users')
        .then((res) => {
            setCurrentData(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    const productRows = currentData.map((product) => <ProductsTable
    initialProductData={product}
    key={product.productId}
    />)

    const userRows = currentData.map((user) => <UsersTable
    initialUserData={user}
    key={user.userId}
    />)


  return (
    <body>
        <div>
            {productRows}
        </div>
        <div>
            {userRows}
        </div>
    </body>
  )
}

export default AdminData