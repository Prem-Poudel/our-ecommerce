import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink } from 'react-router-dom';

const SliderNavigation = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='flex gap-10 font-font-primary'>
      {/* Navigation */}
      <div className='w-[20%] border-r pt-10 hidden md:flex font-normal text-size-primay flex-col justify-between pr-10'>
        <NavLink className="flex items-center justify-between">
          <div>
          Women's Fashion
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="arrow" className='w-3' />
          </div>
        </NavLink>
        <NavLink className="flex items-center justify-between">
          <div>
              Men's Fashion
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="arrow" className='w-3' />
          </div>
        </NavLink>
        <NavLink>Electronics</NavLink>
        <NavLink>Home & Lifestyle</NavLink>
        <NavLink>Medicine</NavLink>
        <NavLink>Sports & Outdoor</NavLink>
        <NavLink>Baby's Toy</NavLink>
        <NavLink>Groceries & Pets</NavLink>
        <NavLink>Health & Beauty</NavLink>
      </div>

      {/* Slider */}
      <div className='relative w-[80%] pt-10'>
        <Slider {...settings}>
          <div>
            <img src="https://img.freepik.com/free-photo/diet-healthy-lifestyle-junk-food-concept-cute-redhead-woman-cant-resist-temptation-bite-tasty-ca_1258-127710.jpg?t=st=1738140020~exp=1738143620~hmac=52f7369b23c44cd58045c81eb12ce1b5bc34952226a7f8e02ed7f48c21ad13a2&w=2000" alt="Shopping" className="w-full h-auto object-cover" />
          </div>
          <div>
            <img src="https://img.freepik.com/free-photo/wow-amazing-astonished-surprised-redhead-girl-checkingout-holiday-special-promo-woman-stare_1258-143212.jpg?t=st=1738140078~exp=1738143678~hmac=ecb35071a33eeae871c1803baaaecd277937931ae3c2b3a1dae4caa4ddef37cb&w=2000" alt="Shopping 2" className="w-full h-auto object-cover" />
          </div>
          <div>
            <img src="https://img.freepik.com/free-photo/excited-cheerful-redhead-pretty-female-student-got-enrolled-exchange-program-learn-news-via-online-application-checked-mail-using-smartphone-clench-fist-yes-celebration-excitement_1258-309914.jpg?t=st=1738140108~exp=1738143708~hmac=9c9bb12e02fd1aad2d276967ccdf29e9705f47748a0d67334ac3c40d73190fb5&w=2000" alt="Shopping 3" className="w-full h-auto object-cover" />
          </div>
          <div>
            <img src="https://img.freepik.com/free-photo/waistup-portrait-lovely-redhead-girl-holding-tasty-yellow-macaron-near-mouth-smiling-joyfully-li_1258-130322.jpg?t=st=1738136410~exp=1738140010~hmac=6621e5e8017cfe05b8eb7df605f37ed619aaf2a3c298af976fbd81ffc5c501ea&w=2000" alt="Shopping 4" className="w-full h-auto object-cover" />
          </div>
          <div>
            <img src="https://img.freepik.com/free-photo/concerned-tensed-attractive-redhead-female-student-cant-write-down-everything-from-blackboard-after_1258-126207.jpg?t=st=1738139407~exp=1738143007~hmac=ce954c912468c811237040a99a569341b30e9b415154b9b802e9eca21837da31&w=2000" alt="Shopping 4" className="w-full h-auto object-cover" />
          </div>
          <div>
            <img src="https://img.freepik.com/free-photo/cheerful-cute-redhead-curly-girlfriend-holding-popcorn-chat-with-boyfriend-before-movie-start-cinema-smiling-joyfully-like-attend-premieres-theatres-standing-overjoy-orange-background_1258-310025.jpg?t=st=1738139431~exp=1738143031~hmac=bdc13fc117cb4a3da7c36ff635204e240d91e4edc3582a89f7d79df21436e8ba&w=2000" alt="Shopping 4" className="w-full h-auto object-cover" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SliderNavigation;
