import React from 'react'
import HomeNavbar from '../navbars/HomeNavbar.jsx'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <HomeNavbar />
      <Link to='/shop'>
      <button className='button is-focused is-medium'>Enter</button>
      </Link>
    </div>
  )
}

export default Home