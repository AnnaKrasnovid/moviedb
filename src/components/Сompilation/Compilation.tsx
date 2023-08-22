import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import MovieCard from '../MovieCard/MovieCard';

import { routes } from '../../settings/routes';
import useWindowWidth from '../../hooks/useWindowWidth';

import './Compilation.scss';

interface CompilationInt {
  title: string,
  moviesList: Array<any>
}

function Compilation({ title, moviesList }: CompilationInt) {
  const windowWidth = useWindowWidth();
  const [slides, setSlides] = useState(0);

  function getNumberSlides() {
    if (windowWidth > 1365) {
      setSlides(6);
    } else if (windowWidth > 1023) {
      setSlides(5);
    } else if (windowWidth > 767) {
      setSlides(4);
    } else if (windowWidth > 500) {
      setSlides(3);
    } else if (windowWidth > 320) {
      setSlides(2);
    }
  }

  useEffect(() => {
    getNumberSlides();
  }, [windowWidth]);

  return (
    <section className='compilation'>
      <h2 className='compilation__title'>{title}</h2>
      <div className='compilation__movies'>
        <Swiper
          slidesPerView={slides}
          spaceBetween={20}
          slidesPerGroup={2}
          loop={true}
          watchOverflow={true}
          navigation={{
            nextEl: '.next-slide-compilation',
            prevEl: '.prev-slide-compilation',
          }}
          modules={[Navigation]}
          className="compilation-swiper"
        >
          {moviesList.map((item) => (
            <SwiperSlide key={item.id}>
              <Link to={`${routes.MOVIES}/${item.id}`} state={{ movie: item }} className='link'>
                <MovieCard item={item} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Compilation;
