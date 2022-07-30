import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css/bundle';

import './Compilation.css';
import MovieCard from '../MovieCard/MovieCard';

function Compilation({ title }) {
// !!! Для корректной работы слайдера количество фильиов должно делиться на 3

  return (
    <section className='compilation'>
      <h2 className='compilation__title'>{title}</h2>
      <ul className='compilation__movies'>
        <Swiper
       
          slidesPerView={5}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 4,
             
            },
            768: {
              slidesPerView: 3,
              
            },
            1200: {
              slidesPerView: 4,
             
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          
          initialSlide={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
       
          loopFillGroupWithBlank={true}
          watchOverflow={true}

          navigation={true}
          pagination={false}
         

          speed={800}

          modules={[Pagination, Navigation]}
          className='compilationSwiper'
        >
          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>

          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>

          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>

          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>

          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>

          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>

          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>

          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>

          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>

          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>

          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>

          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>

        </Swiper>
      </ul>
    </section>
  );
}

export default Compilation;
