import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/HeaderTop/Header'
import Home from './components/Home/Home'
import Navbar from './components/NavBar/Navbar'
import Footer from './components/Footer/Footer'
import Cart from './components/Cart/Cart'


const App = () => {
  return (
    <div>
       <div>
      <div className=''>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      {/* <Footer /> */}
    </div>
    </div>
    </div>
  )
}

export default App