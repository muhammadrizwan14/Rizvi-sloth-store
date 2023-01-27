import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './component/Footer/Footer'
import Navbar from './component/Navbar/Navbar'
import About from './pages/About/About'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Product from './pages/Product/Product'

function App() {
  return (
    <div className='main-app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home/>} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default App
