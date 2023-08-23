import React, { useState } from 'react';

import Rating from '../Rating/Rating';
import DescriptionMovieItem from '../DescriptionMovieItem/DescriptionMovieItem';
import DescriptionMovie from '../DescriptionMovie/DescriptionMovie';

import { getTime, getInfo } from '../../tools/utils';

import './DescriptionMovieCard.scss';

interface DescriptionMovieCardInt {
  movie: any
}

function DescriptionMovieCard({ movie }: DescriptionMovieCardInt) {
  const [isShowAllText, setIsShowAllText] = useState<boolean>(false);

  function toggleAllText() {
    setIsShowAllText(!isShowAllText);
  }

  return (
    <section className='about-movie'>
      <div className='about-movie__description'>
        <div className='about-movie__container'>
          <img className='about-movie__img' src={movie.poster.url} alt='Постер к фильму' />
          <div className='about-movie__container-rating'>
            <Rating number={movie.rating.kp} type='orange' />
            {movie.rating.imdb > 0 && (
              <Rating number={movie.rating.imdb} type='yellow' />
            )}
          </div>
        </div>
        <div className='about-movie__container'>
          <h3 className='about-movie__title'>{movie.name} ({movie.year})</h3>
          {movie.alternativeName ? <p className='about-movie__title-en'>{movie.alternativeName} ({movie.year})</p> : <></>}
          <ul className='about-movie__box-main'>
            <DescriptionMovieItem title='Продолжительность' info={getTime(movie.movieLength)} />
            <DescriptionMovieItem title='Год выпускa' info={movie.year} />
            <DescriptionMovieItem title='Жанр' info={getInfo(movie.genres)} />
            <DescriptionMovieItem title='Страна' info={getInfo(movie.countries)} />
            <DescriptionMovieItem title='Участвует в подборках' info={getInfo(movie.genres)} />
            {/* <DescriptionMovieItem title='В главных ролях' info={} /> */}
          </ul>
          <DescriptionMovie
            title={`О чем фильм “${movie.name} (${movie.year})”`}
            info={isShowAllText ? movie.description : movie.shortDescription}
            buttonText={!isShowAllText ? 'Ещё' : 'Скрыть'}
            callback={toggleAllText}
          />         
        </div>
      </div>
    </section>
  );
}

export default DescriptionMovieCard;
