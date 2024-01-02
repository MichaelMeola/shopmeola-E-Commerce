import React from 'react'
import 'bulma/css/bulma.css'

const ShopNavbar = () => {
  return (
<nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src='../../pictures/MEOLA Sticker.png' />
    </a>
  </div>
    <div class="navbar-item has-dropdow is-hoverable">
    <a class="navbar-link">
      Shop
    </a>
    <div class="navbar-dropdown">
      <a class="navbar-item">
        Clothing
      </a>
      <a class="navbar-item">
        Accessories
      </a>
      <a class="navbar-item">
        Vinyls
      </a>
  </div>
  </div>
    <a class="navbar-item" href='/music'>
      Music
    </a>
    <a class="navbar-item" href='/signup'>
      Sign Up
    </a>
    <a class="navbar-item" href='/cart'>
      Cart
    </a>
</nav>
  )
}

export default ShopNavbar