import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink } from 'react-router-dom';

const SliderNavigation = () => {
  const settings = {
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
      <div className='w-[20%] border-r border-gray-300 pt-10 hidden md:flex font-normal text-size-primay flex-col justify-between pr-10'>
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
            <img src="https://img.freepik.com/free-photo/diet-healthy-lifestyle-junk-food-concept-cute-redhead-woman-cant-resist-temptation-bite-tasty-ca_1258-127710.jpg?t=st=1738163605~exp=1738167205~hmac=7f3d908522016c687e75b7a057962944a995c5eee4269dbae8fbb9b4fbc5a227&w=2000" alt="Shopping" className="w-full h-auto object-cover" />
          </div>
          <div>
            <img src="https://img.freepik.com/free-photo/wow-amazing-astonished-surprised-redhead-girl-checkingout-holiday-special-promo-woman-stare_1258-143212.jpg?t=st=1738166723~exp=1738170323~hmac=d438a383c43e63722245a48fd5823d993b567797cec6a314a8dad7516462cf16&w=2000" alt="Shopping 2" className="w-full h-auto object-cover" />
          </div>
          <div>
            <img src="https://img.freepik.com/free-photo/excited-cheerful-redhead-pretty-female-student-got-enrolled-exchange-program-learn-news-via-online-application-checked-mail-using-smartphone-clench-fist-yes-celebration-excitement_1258-309914.jpg?t=st=1738166770~exp=1738170370~hmac=68ac464b0ef63bc2eec725450635ffd058934a4a586b6cda6f9ac86d84a8a77b&w=2000" alt="Shopping 3" className="w-full h-auto object-cover" />
          </div>
          <div>
            <img src="https://img.freepik.com/free-photo/waistup-portrait-lovely-redhead-girl-holding-tasty-yellow-macaron-near-mouth-smiling-joyfully-li_1258-130322.jpg?t=st=1738167000~exp=1738170600~hmac=87988dc8eebb7fa5158ab4c6a8b7468383e1f4972f83b6986f5a5d4f90f386a5&w=2000" alt="Shopping 4" className="w-full h-auto object-cover" />
          </div>
          <div>
            <img src="https://img.freepik.com/free-photo/inspired-upbeat-dreamy-fascinated-redhead-girl-writing-down-interesting-lecture-smiling-gazi_1258-126205.jpg?t=st=1738166881~exp=1738170481~hmac=f8665826ec49275a4f753e8198c0a082b785006f82e55cf6b9874e4371243bbc&w=2000" alt="Shopping 4" className="w-full h-auto object-cover" />
          </div>
          <div>
            <img src="https://img.freepik.com/free-photo/cheerful-cute-redhead-curly-girlfriend-holding-popcorn-chat-with-boyfriend-before-movie-start-cinema-smiling-joyfully-like-attend-premieres-theatres-standing-overjoy-orange-background_1258-310025.jpg?t=st=1738166911~exp=1738170511~hmac=2dbf4b3d2fe0050ffc37769aabf57f7b9726d0e7f2bb270769c3aaabe6cdf100&w=2000" alt="Shopping 4" className="w-full h-auto object-cover" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SliderNavigation;