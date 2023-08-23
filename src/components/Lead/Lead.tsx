import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import Interstellar from '../../images/main-interstellar.jpg';
import Avengers from '../../images/main-avengers.jpg';
import Live from '../../images/main-live.jpg';
import Dune from '../../images/main-dune2.jpg';
import Aquaman from '../../images/main-aquaman.jpg';

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
      modules={[Autoplay, Pagination, Navigation]}
      className='section-lead'
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
