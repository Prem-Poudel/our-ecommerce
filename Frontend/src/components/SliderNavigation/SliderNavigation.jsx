import React, { memo, useMemo } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink } from 'react-router-dom';

const images = [
  "https://img.freepik.com/free-photo/diet-healthy-lifestyle-junk-food-concept-cute-redhead-woman-cant-resist-temptation-bite-tasty-ca_1258-127710.jpg?t=st=1738843911~exp=1738847511~hmac=d4d818c6bedbd5085cf677eb052059b8a22852cd54d8b0d0c0723b3da4ba8f10&w=2000",
  "https://img.freepik.com/free-photo/concerned-tensed-attractive-redhead-female-student-cant-write-down-everything-from-blackboard-after_1258-126207.jpg?t=st=1738844049~exp=1738847649~hmac=a2df26e8efe86bf4fc935b4205bf523d22e23fb8c354fc1b66f07485c5c9bc0f&w=2000",
  "https://img.freepik.com/free-photo/inspired-upbeat-dreamy-fascinated-redhead-girl-writing-down-interesting-lecture-smiling-gazi_1258-126205.jpg?t=st=1738844085~exp=1738847685~hmac=8bcf5f551ce23bb5d1d76fe5eb2f7ef55d2050841af5f3431b9330d2f01dc358&w=2000",
  "https://img.freepik.com/free-photo/cheerful-cute-redhead-curly-girlfriend-holding-popcorn-chat-with-boyfriend-before-movie-start-cinema-smiling-joyfully-like-attend-premieres-theatres-standing-overjoy-orange-background_1258-310025.jpg?t=st=1738844118~exp=1738847718~hmac=3cc120e00caad3cc0caff718b67951a6d149a8cd977897d83eac1de21ebab0e1&w=2000",
  "https://img.freepik.com/free-photo/choices-shopping-winter-holidays-concept-cute-smiling-redhead-girl-with-curly-red-hair-yellow_1258-309848.jpg?t=st=1738844146~exp=1738847746~hmac=c1e13b2225ea447405ae51a8dcc9a9652622b5a244c6b252c9cbfef49ba18973&w=2000",
  "https://img.freepik.com/free-photo/tender-romantic-dreamy-redhead-woman-winter-hat-sweater-embrace-big-cute-red-heart-sign-as-sy_1258-143225.jpg?t=st=1738844172~exp=1738847772~hmac=8d5f027efb2d59b90e99d91054681e3568ca04f574c7f5ec0d2f24be3a45e8f4&w=2000"
];

const SliderNavigation = () => {
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
      <div className="w-[20%] border-r border-gray-300 pt-10 hidden md:flex flex-col justify-between pr-10">
        {/* Static Category Links */}
        <NavLink
          to="/womenfashion"
          className="flex items-center justify-between p-2 text-left w-full transition duration-200 hover:bg-gray-200">
          <div>Women's Fashion</div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
            alt="arrow"
            className="w-3"
            loading="lazy"
          />
        </NavLink>
        <NavLink
          to="/menfashion"
          className="flex items-center justify-between p-2 text-left w-full transition duration-200 hover:bg-gray-200">
          <div>Men's Fashion</div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
            alt="arrow"
            className="w-3"
            loading="lazy"
          />
        </NavLink>
        <NavLink
          to="/electronics"
          className="flex items-center justify-between p-2 text-left w-full transition duration-200 hover:bg-gray-200">
          <div>Electronics</div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
            alt="arrow"
            className="w-3"
            loading="lazy"
          />
        </NavLink>
        <NavLink
          to="/homeappliences"
          className="flex items-center justify-between p-2 text-left w-full transition duration-200 hover:bg-gray-200">
          <div>Home & Lifestyle</div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
            alt="arrow"
            className="w-3"
            loading="lazy"
          />
        </NavLink>
        <NavLink
          to="/medicine"
          className="flex items-center justify-between p-2 text-left w-full transition duration-200 hover:bg-gray-200">
          <div>Medicine</div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
            alt="arrow"
            className="w-3"
            loading="lazy"
          />
        </NavLink>
        <NavLink
          to="/sports"
          className="flex items-center justify-between p-2 text-left w-full transition duration-200 hover:bg-gray-200">
          <div>Sports & Outdoor</div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
            alt="arrow"
            className="w-3"
            loading="lazy"
          />
        </NavLink>
        <NavLink
          to="/babytoy"
          className="flex items-center justify-between p-2 text-left w-full transition duration-200 hover:bg-gray-200">
          <div>Baby's Toy</div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
            alt="arrow"
            className="w-3"
            loading="lazy"
          />
        </NavLink>
        <NavLink
          to="/groceries"
          className="flex items-center justify-between p-2 text-left w-full transition duration-200 hover:bg-gray-200">
          <div>Groceries & Pets</div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
            alt="arrow"
            className="w-3"
            loading="lazy"
          />
        </NavLink>
        <NavLink
          to="/healthadnbeauty"
          className="flex items-center justify-between p-2 text-left w-full transition duration-200 hover:bg-gray-200">
          <div>Health & Beauty</div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
            alt="arrow"
            className="w-3"
            loading="lazy"
          />
        </NavLink>
      </div>

      {/* Slider */}
      <div className="relative w-[80%] pt-10">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index}>
              <img src={src} alt={`Shopping ${index + 1}`} className="w-full h-auto object-cover" loading="lazy" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default memo(SliderNavigation);
