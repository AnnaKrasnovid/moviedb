import React from 'react';
import { useLocation } from 'react-router-dom';
import './MovieCard.css';
import ImgMovie from '../../image/movie-3.png';

function MovieCard() {
  const location = useLocation();
  const locationMoviesList = location.pathname === '/movies';

  return (
    <li className={`movie ${locationMoviesList ? 'movie_location_movies-list' : ''}`}>
      <div className='movie__box'>
        <img className='movie__img' src={ImgMovie} alt='Фильм'></img>
        <div className='movie__container'>
          <div className='movie__box-rating'>
            <span className='movie__rating-icon movie__rating-icon_bg_orange'></span>
            <span className='movie__rating-mark movie__rating-mark_bg_orange'>10</span>
          </div>
          <div className='movie__box-rating'>
            <span className='movie__rating-icon movie__rating-icon_bg_yellow'></span>
            <span className='movie__rating-mark movie__rating-mark_bg_yellow'>9.0</span>
          </div>
        </div>
      </div>
      <h3 className='movie__title'>Лучшие фильмы подборки</h3>
      <p className='movie__description'>Год, жанр, страна</p>
    </li>
  );
}

export default MovieCard;
