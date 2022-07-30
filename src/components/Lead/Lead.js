import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import Interstellar from '../../image/main-interstellar.jpg';
import Avengers from '../../image/main-avengers.jpg';
import Live from '../../image/main-live.jpg';

import Dune from '../../image/main-dune2.jpg';
import Aquaman from '../../image/main-aquaman.jpg';

import 'swiper/css/bundle';
import './Lead.css';
import '../../styles/swiper.css';

function Lead() { 
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
      <SwiperSlide>
        <img src={Interstellar} alt='Постер к фильму' className='lead__img' />
      </SwiperSlide>

      <SwiperSlide>
        <img src={Live} alt='Постер к фильму' className='lead__img' />
      </SwiperSlide>

      <SwiperSlide>
        <img src={Avengers} alt='Постер к фильму' className='lead__img' />
      </SwiperSlide>

      <SwiperSlide>
        <img src={Aquaman} alt='Постер к фильму' className='lead__img' />
        {/*<h1 className='lead__title'>Аватар</h1>*/}
      </SwiperSlide>

      <SwiperSlide>
        <img src={Dune} alt='Постер к фильму' className='lead__img' />
      </SwiperSlide>

    </Swiper>

  );
}

export default Lead;
