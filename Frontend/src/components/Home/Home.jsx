import React from 'react'
import Producs from '../Products/Producs'
import SliderNavigation from '../SliderNavigation/SliderNavigation'

const Home = () => {
  return (
    <div className='flex justify-center'>
        <div className='md:w-6xl xl:w-7xl max-w-7xl'> {/* ✅ Removed incorrect Tailwind classes */}
          <SliderNavigation />
          <Producs />
        </div>
    </div>
  )
}

export default Home
