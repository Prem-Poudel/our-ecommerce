import React, { useState, useEffect } from 'react';
import SliderNavigation from '../SliderNavigation/SliderNavigation';
import Productcard from '../Products/Productcard';

const HealthBeauty = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();

        // Ensure category matches "Health & Beauty"
        const filteredProducts = data.filter(product =>
          product.category.toLowerCase() === "health & beauty"
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="flex justify-center pb-36">
      <div className="max-w-7xl w-full px-4">
        <SliderNavigation />

        <div className="flex flex-col gap-3 mt-28">
          <div className="flex gap-3 items-center">
            <div className="py-6 px-3 bg-red-600"></div>
            <div className="text-lg font-semibold">Our Products</div>
          </div>
          <div className="text-xl font-bold">Health & Beauty Products</div>
        </div>

        <div>
          {products.length === 0 ? (
            <div className="text-center mt-6 mb-36 text-xl">No products available.</div>
          ) : (
            <>
              <div className="flex flex-wrap md:justify-between items-center gap-4">
                {products.slice(0, visibleCount).map((item, index) => (
                  <Productcard data={item} key={item.id || index} />
                ))}
              </div>

              {visibleCount < products.length && (
                <div className="text-center mt-10 mb-36">
                  <button
                    className="px-10 py-4 bg-secondary text-white rounded-lg hover:bg-red-700 transition"
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

export default HealthBeauty;
