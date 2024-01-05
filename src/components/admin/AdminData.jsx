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



    const addProduct = async () => {
      
        await axios.post('/product', {})
          .then((res) => {
            console.log(res.data)
            setProductData(res.data)
          })
          .catch((err) => {
            console.log(err)
          })
      }

      const deleteProduct = async (productId) => {
    
        await axios.delete(`/product/${productId}`)
          .then((res) => {
            console.log(res.data)
            setProductData(res.data)
          })
          .catch((err) => {
            console.log(err)
          })
      }
      
    const productRows = productData.map((product) => <ProductsTable
    initialProductData={product}
    initialEditMode={false}
    key={product.productId}
    deleteProduct={() => deleteProduct(product.productId)}
    productData={productData}
    setProductData={setProductData}
    />)



    const deleteUser = async (userId) => {
    
        await axios.delete(`/user/${userId}`)
          .then((res) => {
            console.log(res.data)
            setUserData(res.data)
          })
          .catch((err) => {
            console.log(err)
          })
      }

    const userRows = userData.map((user) => <UsersTable
    initialUserData={user}
    key={user.userId}
    deleteUser={() => deleteUser(user.userId)}
    userData={userData}
    setUserData={setUserData}
    />)



  return (
    <div className="container">
        <h1>Products Table</h1>
    <table class='table is-bordered is-narrow is-hoverable is-fullwidth'>
        <thead>
            <tr>
                <th></th>
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
        <tfoot>
            <button onClick={addProduct} class="button is-success">Add Product</button>
        </tfoot>
    </table>

    <h1>Users Table</h1>
    <table className='table is-bordered is-narrow is-hoverable is-fullwidth'>
        <thead>
            <tr>
                <th></th>
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