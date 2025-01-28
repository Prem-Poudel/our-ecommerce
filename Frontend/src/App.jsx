import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/HeaderTop/Header'
import Home from './components/Home/Home'
import Navbar from './components/NavBar/Navbar'


const App = () => {
  return (
    <div>
      <div className=''>
      <Header />
      <Navbar />
      <Home />
    </div>
    <div className='text-xl text-black bg-red-600'>App</div>
    </div>
  )
}

export default App