import React, { memo, useMemo, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink } from 'react-router-dom';

const SliderNavigation = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:3000/images");
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    getData();
  }, []);

  const settings = useMemo(() => ({
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    lazyLoad: 'ondemand',
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  }), []);

  return (
    <div className="flex gap-10 font-font-primary">
      {/* Navigation */}
      <nav className="w-[20%] border-r border-gray-300 pt-10 hidden md:flex flex-col justify-between pr-10" aria-label="Product Categories">
        {[
          { path: "/womenfashion", label: "Women's Fashion" },
          { path: "/menfashion", label: "Men's Fashion" },
          { path: "/electronics", label: "Electronics" },
          { path: "/homeappliances", label: "Home & Lifestyle" },
          { path: "/medicine", label: "Medicine" },
          { path: "/sports", label: "Sports & Outdoor" },
          { path: "/babytoy", label: "Baby's Toy" },
          { path: "/groceries", label: "Groceries & Pets" },
          { path: "/healthandbeauty", label: "Health & Beauty" },
        ].map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="flex items-center justify-between p-2 text-left w-full transition duration-200 hover:bg-gray-200"
            title={`Shop ${item.label}`}>
            <div>{item.label}</div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
              alt={item.label}
              className="w-3"
              loading="lazy"
            />
          </NavLink>
        ))}
      </nav>

      {/* Slider */}
      <div className="relative w-[80%] pt-10" role="region" aria-label="Main Banner Slider">
        <Slider {...settings}>
          {images.length > 0 ? (
            images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.src}
                  alt={image.alt || `Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500">Loading images...</div>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default memo(SliderNavigation);
