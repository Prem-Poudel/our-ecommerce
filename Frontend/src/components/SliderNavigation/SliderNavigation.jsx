import React, { memo, useMemo } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink } from 'react-router-dom';

const images = [
  "https://img.freepik.com/free-photo/diet-healthy-lifestyle-junk-food-concept-cute-redhead-woman-cant-resist-temptation-bite-tasty-ca_1258-127710.jpg?t=st=1740385416~exp=1740389016~hmac=9c891f58c5ebfd4dd88251f14b72333d7aa52957d322016b87358fe45e2b6c8e&w=2000",
  "https://img.freepik.com/free-photo/wow-amazing-astonished-surprised-redhead-girl-checkingout-holiday-special-promo-woman-stare_1258-143212.jpg?t=st=1740385475~exp=1740389075~hmac=6c72f41e1e8004aaa818567fba85e330f604eaeb8f584848a19b9a69c4310a02&w=2000",
  "https://img.freepik.com/free-photo/excited-cheerful-redhead-pretty-female-student-got-enrolled-exchange-program-learn-news-via-online-application-checked-mail-using-smartphone-clench-fist-yes-celebration-excitement_1258-309914.jpg?t=st=1740385509~exp=1740389109~hmac=f22f1c370731c863aef3ddb332c1036855f36044d94c2bb6a3be9d9db5fdca8e&w=2000",
  "https://img.freepik.com/free-photo/excitement-emotions-holidays-concept-waistup-shot-cheerful-impressed-excited-redhead-woman-s_1258-127728.jpg?t=st=1740385543~exp=1740389143~hmac=07b6d34346379fa526bba7b94fdf58a6a2d7587144d05fea8f1c5de940fd6387&w=2000",
  "https://img.freepik.com/free-photo/cheerful-cute-redhead-curly-girlfriend-holding-popcorn-chat-with-boyfriend-before-movie-start-cinema-smiling-joyfully-like-attend-premieres-theatres-standing-overjoy-orange-background_1258-310025.jpg?t=st=1740385630~exp=1740389230~hmac=d73243b55294f4b293aa71902eb588511d3a0776699498d0632b491eff881d6c&w=2000",
  "https://img.freepik.com/free-photo/tender-romantic-dreamy-redhead-woman-winter-hat-sweater-embrace-big-cute-red-heart-sign-as-sy_1258-143225.jpg?t=st=1740385671~exp=1740389271~hmac=c8402468d2fc2d830a249b0426773dad1200435dab68f2694d717e8a901e392c&w=2000"
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
          to="/homeappliances"
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
          to="/healthandbeauty"
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
