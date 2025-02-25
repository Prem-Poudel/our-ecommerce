import React from 'react'
import Producs from '../Products/Producs'
import SliderNavigation from '../SliderNavigation/SliderNavigation'
import CustomerServices from '../CustomerServices/CustomerServices'

const Home = () => {
  return (
    <div className='flex justify-center'>
        <div className='md:w-6xl xl:w-7xl max-w-7xl'>
          <SliderNavigation />
          <Producs />
          <CustomerServices />
        </div>
    </div>
  )
}

export default Home
