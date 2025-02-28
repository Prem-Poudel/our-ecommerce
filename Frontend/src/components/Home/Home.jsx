import React, { useEffect } from 'react';
import Producs from '../Products/Producs';
import SliderNavigation from '../SliderNavigation/SliderNavigation';
import CustomerServices from '../CustomerServices/CustomerServices';

const Home = () => {

  useEffect(() => {
    // Set the document title to "Home" when this component is mounted
    document.title = 'Manila Store';
  }, []); // Empty dependency array means this effect will run once when the component is mounted

  return (
    <div className='flex justify-center'>
      <div className='md:w-6xl xl:w-7xl max-w-7xl'>
        <SliderNavigation />
        <Producs />
        <CustomerServices />
      </div>
    </div>
  );
}

export default Home;
