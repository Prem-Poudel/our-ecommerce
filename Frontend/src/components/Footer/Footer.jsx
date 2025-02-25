import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className='bg-black text-white p-10 md:p-20'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10'>
        
        {/* Logo & Subscription */}
        <div className='flex flex-col gap-10 md:gap-10'>
          <div className='text-2xl font-extrabold'>Manila Store</div>
          <div className='text-lg font-light'>Subscribe</div>
          <div className='flex flex-col gap-7'>
          <p className='text-sm font-extralight text-gray-200'>
            Get 10% discount off your first order
          </p>
          <input
            type='email'
            className='outline-none border border-gray-300 bg-black text-white py-2 px-3 rounded-md'
            placeholder='Enter your email'
          />
          </div>
        </div>

        {/* Category */}
        <div className='flex flex-col gap-2 md:gap-10'>
          <div className='text-xl font-semibold'>Category</div>
          <div className='flex flex-col gap-2 md:gap-5 text-sm font-extralight'>
            <NavLink to='/womenfashion'>Women's Fashion</NavLink>
            <NavLink to='/menfashion'>Men's Fashion</NavLink>
            <NavLink to='/electronics'>Electronics</NavLink>
            <NavLink to='/homeappliances'>Home & Lifestyle</NavLink>
            <NavLink to='/medicine'>Medicine</NavLink>
            <NavLink to='/sports'>Sports & Outdoor</NavLink>
            <NavLink to='/babytoy'>Baby's Toy</NavLink>
            <NavLink to='/groceries'>Groceries & Pets</NavLink>
            <NavLink to='/healthandbeauty'>Health & Beauty</NavLink>
          </div>
        </div>

        {/* Account */}
        <div className='flex flex-col gap-10'>
          <div className='text-xl font-semibold'>Account</div>
          <div className='flex flex-col gap-5 text-sm font-extralight'>
            <NavLink to='/account'>My Account</NavLink>
            <NavLink to='/login'>Login / Register</NavLink>
            <NavLink to='/cart'>Cart</NavLink>
            <NavLink to='/shop'>Shop</NavLink>
            <NavLink to='/wishlist'>Wishlist</NavLink>
          </div>
        </div>

        {/* Quick Link */}
        <div className='flex flex-col gap-6 md:gap-10'>
          <div className='text-xl font-semibold'>Quick Links</div>
          <div className='flex flex-col gap-2 md:gap-5 text-sm font-extralight'>
            <NavLink to='/privacy-policy'>Privacy Policy</NavLink>
            <NavLink to='/terms-of-use'>Terms Of Use</NavLink>
            <NavLink to='/faq'>FAQ</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
          </div>
        </div>

        {/* Support */}
        <div className='flex flex-col gap-6 md:gap-10'>
          <div className='text-xl font-semibold'>Support</div>
          <div className='text-sm font-extralight flex  flex-col gap-4'>
            <div>
            <p>Bharatpur, Chitwan</p>
            <p>Nepal</p>
            </div>
            <a href='mailto:lawarjames67929@gmail.com' className='block'>lawarjames67929@gmail.com</a>
            <a href='tel:+9779765954771' className='block'>+977 9765954771</a>
          </div>
          <div className='flex gap-4'>
            <a href='#'><img src='https://cdn-icons-png.flaticon.com/128/3128/3128304.png' alt='Facebook' className='w-6' /></a>
            <a href='#'><img src='https://cdn-icons-png.flaticon.com/128/174/174855.png' alt='Instagram' className='w-6' /></a>
            <a href='#'><img src='https://cdn-icons-png.flaticon.com/128/2111/2111499.png' alt='LinkedIn' className='w-6' /></a>
            <a href='#'><img src='https://cdn-icons-png.flaticon.com/128/733/733579.png' alt='Twitter' className='w-6' /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
