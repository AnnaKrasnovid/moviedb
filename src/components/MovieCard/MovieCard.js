
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { useLocation } from 'react-router-dom';

import ImgMovie from '../../image/movie-3.png';

import 'swiper/css/bundle';
import './MovieCard.scss';

function MovieCard({ item }) {
  const location = useLocation();
  const locationMoviesList = location.pathname === '/movies';

  return (
    <div className={`movie ${locationMoviesList ? 'movie_location_movies-list' : ''}`}>
      <div className='movie__box'>        
          <img className='movie__img' src={item.poster.url} alt='Фильм'></img>      
        <div className='movie__container'>
          <div className='movie__box-rating'>
            <span className='movie__rating-icon movie__rating-icon_bg_orange'></span>
            <span className='movie__rating-mark movie__rating-mark_bg_orange'>{item.rating.kp}</span>
          </div>
          <div className='movie__box-rating'>
            <span className='movie__rating-icon movie__rating-icon_bg_yellow'></span>
            <span className='movie__rating-mark movie__rating-mark_bg_yellow'>{item.rating.imdb}</span>
          </div>
        </div>
      </div>
      <h3 className='movie__title'>{item.name}</h3>
      <p className='movie__description'> {item.year}, {item.genres[0].name}, {item.countries[0].name} </p>
    </div>
  );
}

export default MovieCard;
