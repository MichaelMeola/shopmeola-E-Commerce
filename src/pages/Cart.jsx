import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ShopNavbar from '../navbars/ShopNavbar'

const Cart = () => {

  return (
    <div>
      <ShopNavbar />
      <h1>Cart</h1>
    </div>
  )
}

export default Cart