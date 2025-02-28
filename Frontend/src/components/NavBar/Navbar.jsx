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
    <nav className={`border-b border-gray-300 flex font-font-primary justify-center items-center sticky top-0 left-0 right-0 bg-white z-50 ${scrolled ? 'shadow-md' : ''}`} role="navigation" aria-label="Main Navigation">
      {/* Laptop View */}
      <div className='md:w-6xl xl:w-7xl max-w-7xl w-full'>
        <div className='hidden md:flex justify-between py-5 items-center'>
          {/* Logo */}
          <div className='text-xl font-extrabold'>
            <NavLink to="/" onClick={scrollToTop} title="Go to Homepage">
              Manila Store
            </NavLink>
          </div>

          {/* Navigation Links */}
          <div className='flex gap-14 items-center'>
            <NavLink to="/" onClick={scrollToTop} className="cursor-pointer" title="Go to Home Page">
              Home
            </NavLink>
            <NavLink to="/contact" title="Visit our Contact Page">
              Contact
            </NavLink>
            <NavLink to="/about" title="Learn more about us">
              About
            </NavLink>
          </div>

          {/* Search & Cart/User Icons */}
          <div className='flex gap-5 items-center'>
            {/* Search Bar */}
            <div className='relative'>
              <input 
                type="search" 
                name="search" 
                id="search" 
                className='border-none bg-gray-200 w-72 h-10 outline-none px-5' 
                placeholder='What are you looking for?' 
                aria-label="Search for products"
              />
              <div className='absolute right-3 top-2'>
                <img 
                  src="https://cdn-icons-png.flaticon.com/128/622/622669.png" 
                  alt="Search Icon" 
                  className='w-6' 
                  aria-hidden="true"
                />
              </div>
            </div>
            {/* Cart & User Icons */}
            <NavLink to="/cart" aria-label="Go to Cart">
              <img 
                src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" 
                alt="Shopping Cart" 
                className='w-7' 
                loading="lazy"
              />
            </NavLink>
            <NavLink to="/login" aria-label="Go to Login Page">
              <img 
                src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png" 
                alt="User Login" 
                className='w-7' 
                loading="lazy"
              />
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile View Placeholder */}
      <div className='md:hidden'>
        {/* Implement mobile menu here */}
      </div>
    </nav>
  );
}

export default Navbar;
