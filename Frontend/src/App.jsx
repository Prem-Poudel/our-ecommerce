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
import SignUp from './components/Signup/SignUp';

const App = () => {
  const homeRef = useRef(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster />
      <Header />
      <Navbar />
      
      <div className="flex-grow">
        <Routes>
          <Route path='/' element={<Home ref={homeRef} />} />
          <Route path='/menfashion' element={<Mens />} />
          <Route path='/womenfashion' element={<Womens />} />
          <Route path='/babytoy' element={<BabyToy />} />
          <Route path='/electronics' element={<Electronics />} />
          <Route path='/homeappliances' element={<HomeLifestyle />} />
          <Route path='/medicine' element={<Medicine />} />
          <Route path='/sports' element={<SportsOutdoor />} />
          <Route path='/groceries' element={<Grocery />} />
          <Route path='/healthandbeauty' element={<HealthBeauty />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
