import React from 'react';
import './MovieCard.css';
import ImgMovie from '../../image/movie-3.png';

function MovieCard() {
  return (
    <li className='movie'>
      <div className='movie__box'>
        <img className='movie__img' src={ImgMovie} alt='Фильм'></img>
      </div>
      <h3 className='movie__title'>Лучшие фильмы подборки</h3>
      <p className='movie__description'>Лучшие фильмы подборки</p>
    </li>
  )
}

export default MovieCard;
