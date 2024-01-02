import React from 'react'
import 'bulma/css/bulma.css'

const MusicNavbar = () => {
    return (
<nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src='../../pictures/MEOLA Sticker.png' />
    </a>
  </div>
    <div class="navbar-item has-dropdow is-hoverable">
    <a class="navbar-link">
      Music
    </a>
    <div class="navbar-dropdown">
      <a class="navbar-item">
        Listen Now
      </a>
      <a class="navbar-item">
        Music Videos
      </a>
      <a class="navbar-item">
        Concerts
      </a>
      <a class="navbar-item">
        Booking
      </a>
  </div>
  </div>
    <a class="navbar-item" href='/shop'>
      Shop
    </a>
    <a class="navbar-item" href='/signup'>
      Sign Up
    </a>
</nav>
    )
  }

export default MusicNavbar