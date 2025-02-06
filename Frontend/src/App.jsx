import React, { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/HeaderTop/Header';
import Home from './components/Home/Home';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import Login from './components/Account/Login';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const homeRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === 'home' && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Toaster />
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home ref={homeRef} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
