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
import Mens from './components/ProductCategory/Mens';
import Womens from './components/ProductCategory/Womens';
import BabyToy from './components/ProductCategory/BabyToy';
import Electronics from './components/ProductCategory/Electronics';
import HomeLifestyle from './components/ProductCategory/HomeLifestyle';
import Medicine from './components/ProductCategory/Medicine';
import SportsOutdoor from './components/ProductCategory/SportsOutdoor';
import Grocery from './components/ProductCategory/Grocery';
import HealthBeauty from './components/ProductCategory/HealthBeauty';

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
        <Route path='/Menfashion' element={<Mens />} />
        <Route path='/womenfashion' element={<Womens />} />
        <Route path='/babytoy' element={<BabyToy />} />
        <Route path='/Electronics' element={<Electronics />} />
        <Route path='/homeappliences' element={<HomeLifestyle />} />
        <Route path='/medicine' element={<Medicine />} />
        <Route path='/sports' element={<SportsOutdoor />} />
        <Route path='/groceries' element={<Grocery />} />
        <Route path='/healthadnbeauty' element={<HealthBeauty />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
