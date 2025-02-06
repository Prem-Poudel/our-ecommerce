import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ scrollToSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`border-b border-gray-300 flex font-font-primary justify-center items-center sticky top-0 left-0 right-0 bg-white z-50 ${scrolled ? 'shadow-md' : ''}`}>
      {/* Laptop View */}
      <div className='md:w-6xl xl:w-7xl max-w-7xl w-full'>
        <div className='hidden md:flex justify-between py-5 items-center'>
          {/* Logo */}
          <div className='text-xl font-extrabold'>
            <NavLink to="/" onClick={scrollToTop}>Manila Store</NavLink>
          </div>

          {/* Navigation Links */}
          <div className='flex gap-14 items-center'>
            <div onClick={scrollToTop} className="cursor-pointer">
              <NavLink to="/">Home</NavLink>
            </div>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>

          {/* Search & Cart/User Icons */}
          <div className='flex gap-5 items-center'>
            {/* Search Bar */}
            <div className='relative'>
              <input type="search" name="search" id="search" className='border-none bg-gray-200 w-72 h-10 outline-none px-5' placeholder='What are you looking for?' />
              <div className='absolute right-3 top-2'>
                <img src="https://cdn-icons-png.flaticon.com/128/622/622669.png" alt="Search-icon" className='w-6' />
              </div>
            </div>
            {/* Cart & User Icons */}
            <NavLink to="/cart"><img src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" alt="Cart" className='w-7' /></NavLink>
            <NavLink to="/login"><img src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png" alt="User" className='w-7' /></NavLink>
          </div>
        </div>
      </div>

      {/* Mobile View Placeholder */}
      <div className='md:hidden'>
        {/* Implement mobile menu here */}
      </div>
    </div>
  );
}

export default Navbar;
