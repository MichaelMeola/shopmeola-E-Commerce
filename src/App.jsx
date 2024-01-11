import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom'
import Cart from './pages/Cart.jsx'
import Home from './pages/Home.jsx'
import SignUp from './pages/SignUp.jsx'
import Shop from './pages/Shop.jsx'
import NoPage from './pages/NoPage.jsx'
import Admin from './pages/Admin.jsx'
import Checkout from './pages/Checkout.jsx'

import './App.css'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/shop' element={<Shop />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/checkout' element={<Checkout />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/admin' element={<Admin />}/>
          <Route path='*' element={<NoPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
