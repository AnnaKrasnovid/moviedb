import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css/bundle';

import './Compilation.css';
import '../../assets/styles/swiper/swiper.css';
import MovieCard from '../MovieCard/MovieCard';

function Compilation({ title }) {

  return (
    <section className='compilation'>
      <h2 className='compilation__title'>{title}</h2>
      <ul className='compilation__movies'>
        <Swiper
          slidesPerView={5}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 30 },
            375: { slidesPerView: 2.5, spaceBetween: 20 },
            425: { slidesPerView: 3, spaceBetween: 10 },
            480: { slidesPerView: 3, spaceBetween: 20 },
            550: { slidesPerView: 3.5, spaceBetween: 20 },
            640: { slidesPerView: 4 },
            768: { slidesPerView: 3, spaceBetween: 40 },
            900: { slidesPerView: 3.5, spaceBetween: 20 },
            1200: { slidesPerView: 4 },
            1440: { slidesPerView: 5, spaceBetween: 30 },
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
          <SwiperSlide> <MovieCard /> </SwiperSlide>
          <SwiperSlide> <MovieCard /> </SwiperSlide>
          <SwiperSlide> <MovieCard /> </SwiperSlide>
          <SwiperSlide> <MovieCard /> </SwiperSlide>
          <SwiperSlide> <MovieCard /> </SwiperSlide>
          <SwiperSlide> <MovieCard /> </SwiperSlide>
          <SwiperSlide> <MovieCard /> </SwiperSlide>
          <SwiperSlide>  <MovieCard /> </SwiperSlide>
          <SwiperSlide> <MovieCard /> </SwiperSlide>
          <SwiperSlide> <MovieCard /> </SwiperSlide>
          <SwiperSlide> <MovieCard /> </SwiperSlide>
          <SwiperSlide> <MovieCard /> </SwiperSlide>

        </Swiper>
      </ul>
    </section>
  );
}

export default Compilation;
