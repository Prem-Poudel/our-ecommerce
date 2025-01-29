import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='border-b border-b-gray-300 flex font-font-primary justify-center items-center'>
        {/* For Laptop responsive */}
        <div className='md:4xl lg:5xl md:w-6xl xl:w-7xl max-w-7xl'>
        <div className='hidden md:flex justify-between align-middle py-5 items-center'>
            {/* logo */}
            <div className='text-xl  font-extrabold'>
                <NavLink to="/">Manila Store</NavLink>    
            </div>
            {/* Navlink */}
            <div className='flex gap-14 items-center'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">Contact</NavLink>
                <NavLink to="/">About</NavLink>
            </div>
            {/* Carts */}
            <div className='flex gap-5 items-center'>
                {/* search */}
            <div className='relative'>
                <div>
                <input type="search" name="search" id="search" className='border-none bg-gray-200 w-72 h-10 outline-none px-5' placeholder='What are you looking for ?' />
                </div>
                <div className='absolute right-3 top-2'>
                <img src="https://cdn-icons-png.flaticon.com/128/622/622669.png" alt="Cart-image" className='w-6' />
                </div>
            </div>

                <div><NavLink to="/cart"><img src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" alt="Cart-image" className='w-7' /></NavLink></div>
                <div><img src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png" alt="User-image" className='w-7' /></div>
            </div>
        </div>
        </div>

        {/* For Mobile responsive */}
        <div className='hidden'>

        </div>
    </div>
  )
}

export default Navbar