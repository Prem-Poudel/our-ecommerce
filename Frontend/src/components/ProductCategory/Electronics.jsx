import React, { useState, useEffect } from 'react';
import SliderNavigation from '../SliderNavigation/SliderNavigation';
import Productcard from '../Products/Productcard';

const Electronics = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        // Filter products to only include those with category "Electronics" (case-insensitive)
        const electronicsProducts = data.filter(product => 
          product.category.toLowerCase() === "electronics".toLowerCase()
        );
        setProducts(electronicsProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className='flex justify-center pb-36'>
      <div className='md:w-6xl xl:w-7xl max-w-7xl'>
        <SliderNavigation />
        <div className='flex flex-col gap-3 mt-28'>
          <div className='text-size-3 flex gap-3 items-center'>
            <div className='py-6 px-3 bg-red-600 font-3'></div>
            <div>Our Products</div>
          </div>  
          <div className='text-size-2 font-2'>Explore Our Electronics Products</div>
        </div>

        <div>
          {products.length === 0 ? (
            <div className='text-center mt-6 mb-36 text-xl'>
              No products available.
            </div>
          ) : (
            <>
              <div className='flex flex-wrap md:justify-between items-center'>
                {products.slice(0, visibleCount).map((item, index) => (
                  <Productcard data={item} key={index} />
                ))}
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Electronics;
