import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0,0)
  }, [pathname])

  return null
}

function App() {
  return <div>
    <BrowserRouter>
      <ScrollToTop />

      <Routes>

        <Route />
        
      </Routes>

    </BrowserRouter>
  </div>
}

export default App
