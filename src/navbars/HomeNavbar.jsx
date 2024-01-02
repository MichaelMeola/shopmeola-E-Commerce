import React from 'react'
import 'bulma/css/bulma.css'

const HomeNavbar = () => {
  return (
<nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src='../../pictures/MEOLA Sticker.png' />
    </a>
  </div>
    <a class="navbar-item" href='/music'>
      Music
    </a>
    <a class="navbar-item" href='/shop'>
      Shop
    </a>
    <a class="navbar-item" href='/signup'>
      Sign Up
    </a>
</nav>
  )
}

export default HomeNavbar