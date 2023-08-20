import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import Interstellar from '../../image/main-interstellar.jpg';
import Avengers from '../../image/main-avengers.jpg';
import Live from '../../image/main-live.jpg';
import Dune from '../../image/main-dune2.jpg';
import Aquaman from '../../image/main-aquaman.jpg';

import 'swiper/css/bundle';
import '../../assets/styles/swiper/swiper.css';
import './Lead.scss';


function Lead() {
  const slides = [Interstellar, Avengers, Live, Dune, Aquaman];

  return (
    <Swiper
      loop={true}
      loopedSlides={3}
      loopAdditionalSlides={3}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      speed={1500}
      pagination={{
        clickable: true,
      }}
      //navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className='mySwiper'
    >
      {slides.map((item) => (
        <SwiperSlide key={item}>
          <img src={item} alt='Постер к фильму' className='lead__img' />
        </SwiperSlide>
      ))}
    </Swiper>

  );
}

export default Lead;
