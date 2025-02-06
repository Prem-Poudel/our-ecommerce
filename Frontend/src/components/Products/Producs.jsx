import React, { useEffect, useState } from 'react';
import Productcard from './Productcard';

const Producs = React.memo(() => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (products.length === 0) {
      getProducts();
    }
  }, [products.length]);

  return (
    <div className='mt-[140px]'>
      <div className='flex flex-col gap-3'>
        <div className='text-size-3 flex gap-3 items-center'>
          <div className='py-6 px-3 bg-red-600 font-3'></div>
          <div>Our Products</div>
        </div>  
        <div className='text-size-2 font-2'>Explore Our Products</div>
      </div>

      <div>
        <div className='flex flex-wrap md:justify-between items-center'>
          {products.slice(0, visibleCount).map((item, index) => {
           return <Productcard data={item} key={index} />
})}
        </div>

        {visibleCount < products.length && (
          <div className='text-center mt-[60px] mb-36'>
            <button 
              className='px-10 py-4 bg-secondary text-white rounded hover:bg-red-700 transition' 
              onClick={() => setVisibleCount(products.length)}
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
});

export default Producs;
