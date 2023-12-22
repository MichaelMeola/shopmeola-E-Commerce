import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setIsCartOpen } from '../state/CartState'
import { Badge, Box, IconButton } from '@mui/material'


const StoreNavbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.cart)

  return (
    
    <Badge 
    badgeContent={cart.length}
    invisible={cart.length === 0}
    >
    <button onClick={() => dispatch(setIsCartOpen({}))}>
        Cart
    </button>
    </Badge>
  )
}

export default StoreNavbar