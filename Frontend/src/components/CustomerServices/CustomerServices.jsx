import React from 'react';

const CustomerServices = () => {
  return (
    <div className='pb-36 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 lg:gap-20'>
      {/* Free & safety delivery */}
      <div className='delivery flex flex-col items-center gap-4 text-center'>
        <div className='bg-gray-200 p-3 rounded-full w-20 flex justify-center items-center'>
          <img src='https://cdn-icons-png.flaticon.com/128/2787/2787368.png' alt='delivery icon' className='w-14 bg-white rounded-full p-2' />
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='text-lg md:text-xl font-bold'>FREE AND FAST DELIVERY</div>
          <div className='text-sm md:text-base text-gray-600'>Free delivery for all orders over $150</div>
        </div>
      </div>

      {/* Customer-service */}
      <div className='customer-service flex flex-col items-center gap-4 text-center'>
        <div className='bg-gray-200 p-3 rounded-full w-20 flex justify-center items-center'>
          <img src='https://cdn-icons-png.flaticon.com/128/3249/3249904.png' alt='customer service icon' className='w-14 bg-white rounded-full p-2' />
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='text-lg md:text-xl font-bold'>24/7 CUSTOMER SERVICE</div>
          <div className='text-sm md:text-base text-gray-600'>Friendly 24/7 customer support</div>
        </div>
      </div>

      {/* Money-back guarantee */}
      <div className='money flex flex-col items-center gap-4 text-center'>
        <div className='bg-gray-200 p-3 rounded-full w-20 flex justify-center items-center'>
          <img src='https://cdn-icons-png.flaticon.com/128/18133/18133956.png' alt='money back icon' className='w-14 bg-white rounded-full p-2' />
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='text-lg md:text-xl font-bold'>MONEY BACK GUARANTEE</div>
          <div className='text-sm md:text-base text-gray-600'>We return money within 30 days</div>
        </div>
      </div>
    </div>
  );
};

export default CustomerServices;
