import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, Mousewheel } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css/bundle';

import ImgOne from '../../image/img-main.png';
import ImgTwo from '../../image/img-main-2.png';
import ImgThree from '../../image/genre-fighters.png';

import './Lead.css';

function Lead() {
  /*return (
    <section className='lead'>
      <h1 className='lead__title'>Лучшие фильмы всех времен</h1>
      <p className='lead__description'></p>
    </section>
  );*/
  return (

    <Swiper
      /*loop={true}
      loopedSlides={3}
      autoHeight={true} */
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      //navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className='mySwiper'
    >
      <SwiperSlide>
        <img src={ImgOne} alt='Постер к фильму' className='lead__img' />
        <h1 className='lead__title'>Лучшие фильмы всех времен</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={ImgTwo} alt='Постер к фильму' className='lead__img' />
        <h1 className='lead__title'>фильмы</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={ImgThree} alt='Постер к фильму' className='lead__img' />
      </SwiperSlide>

    </Swiper>

  );
}

export default Lead;
