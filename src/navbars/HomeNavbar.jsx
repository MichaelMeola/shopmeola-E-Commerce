import React from 'react'
import 'bulma/css/bulma.css'
import { Link } from 'react-router-dom'

const HomeNavbar = () => {
  return (
<nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <Link className="navbar-item" to="/">
      <img src='../../pictures/MEOLA Sticker.png' />
    </Link>
  </div>
    <Link className="navbar-item" to='/shop'>
      Shop
    </Link>
    <Link className="navbar-item" to='/signup'>
      Sign Up
    </Link>
</nav>
  )
}

export default HomeNavbar