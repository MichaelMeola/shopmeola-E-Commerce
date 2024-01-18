import React from 'react'
import ShopNavbar from '../navbars/ShopNavbar'
import Products from '../components/shop/Products'
import Footer from '../footer/Footer'

const Shop = () => {
  return (
    <div>
      <ShopNavbar />
      <Products />
      <Footer />
    </div>
  )
}

export default Shop