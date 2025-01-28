import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='border-b flex justify-center'>
        {/* For Laptop responsive */}
        <div className='md:4xl lg:5xl md:w-6xl xl:w-7xl max-w-7xl'>
        <div className='hidden sm:flex justify-between align-middle py-5'>
            {/* logo */}
            <div>
                Logo
            </div>
            {/* Navlink */}
            <div className='flex gap-14'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">Contact</NavLink>
                <NavLink to="/">About</NavLink>
            </div>
            {/* Carts */}
            <div>
                Carts
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