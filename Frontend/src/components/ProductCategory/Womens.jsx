import React, { useState, useEffect } from 'react';
import SliderNavigation from '../SliderNavigation/SliderNavigation';
import Productcard from '../Products/Productcard';

const Womens = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    // SEO-Friendly Title & Meta Description
    document.title = "Women's Fashion - Trendy & Affordable Styles";

    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Discover the latest trends in women's fashion. Shop stylish clothing, accessories, and more at affordable prices."
    );

    const getProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();

        // Filter products for "Women's Fashion" (case-insensitive)
        const filteredProducts = data.filter(product =>
          product.category.toLowerCase() === "women's fashion"
        );
        setProducts(filteredProducts);

        // Adding Structured Data (Schema Markup)
        const jsonLd = {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Women's Fashion Collection",
          "description": "Trendy and stylish clothing, accessories, and more.",
          "brand": {
            "@type": "Brand",
            "name": "Your Brand Name"
          },
          "offers": filteredProducts.map(product => ({
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": product.price,
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock"
          }))
        };

        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(jsonLd);
        document.head.appendChild(script);
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

        {/* Breadcrumb for SEO */}
        <nav aria-label="breadcrumb">
          <ol className="flex text-gray-500 text-sm mt-4">
            <li className="mr-2">
              <a href="/" className="hover:underline">Home</a> /
            </li>
            <li>Women's Fashion</li>
          </ol>
        </nav>

        {/* SEO-Optimized Headings */}
        <section className="flex flex-col gap-3 mt-28">
        <div className='text-size-3 flex gap-3 items-center'>
            <div className='py-6 px-3 bg-red-600 font-3'></div>
            <div>Our Products</div>
          </div>
          <h1 className="text-size-2 font-2">Women's Fashion Products</h1>
        </section>

        <div>
          {products.length === 0 ? (
            <div className="text-center mt-6 mb-36 text-xl text-gray-500">
              No products available.
            </div>
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

export default Womens;
