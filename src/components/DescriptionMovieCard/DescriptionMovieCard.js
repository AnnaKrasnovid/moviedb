import React, { useState, useEffect } from 'react';

import { getRoundNumber,getTime } from '../../assets/utils';

import './DescriptionMovieCard.scss';

function DescriptionMovieCard({ movie }) {
  const [isShowAllText, setIsShowAllText] = useState(false);

  function toggleAllText() {
    setIsShowAllText(!isShowAllText);
  }

  return (
    <section className='about-movie'>
      <div className='about-movie__description'>

        <div className='about-movie__container'>
          <img className='about-movie__img' src={movie.poster.url} alt='Постер к фильму' />
          <div className='about-movie__container-rating'>
            <div className='about-movie__box-rating'>
              <span className='about-movie__estimation'>{getRoundNumber(movie.rating.kp)}</span>
              <span className='about-movie__owner'>Кинопоиск</span>
            </div>
            {movie.rating.imdb ? (
              <div className='about-movie__box-rating about-movie__box-rating_type_imdb'>
                <span className='about-movie__estimation'>{getRoundNumber(movie.rating.imdb)}</span>
                <span className='about-movie__owner'>IMDb</span>
              </div>
            ) : <></>}
          </div>
        </div>

        <div className='about-movie__container'>
          <h3 className='about-movie__title'>{movie.name} ({movie.year})</h3>
          {movie.enName ? <p className='about-movie__title-en'>{movie.enName} ({movie.year})</p> : <></>}

          <ul className='about-movie__box-data'>
            <li className='about-movie__box-info'>
              <p className='about-movie__heading'>Продолжительность</p>
              <p className='about-movie__info'>{getTime(movie.movieLength)}
              </p>
            </li>
            <li className='about-movie__box-info'>
              <p className='about-movie__heading'>Год выпуска</p>
              <p className='about-movie__info'>{movie.year}</p>
            </li>
            <li className='about-movie__box-info'>
              <p className='about-movie__heading'>Премьера фильма в России</p>
              <p className='about-movie__info'>22 Апреля 2021</p>
            </li>
            <li className='about-movie__box-info'>
              <p className='about-movie__heading'>Возраст</p>
              <p className='about-movie__info'>16+</p>
            </li>
          </ul>

          <ul className='about-movie__box-main'>
            <li className='about-movie__box-info-main'>
              <p className='about-movie__heading-main'>Жанр</p>
              <p className='about-movie__info-main'>Боевик, Комедия, Драма</p>
            </li>
            <li className='about-movie__box-info-main'>
              <p className='about-movie__heading-main'>Страна</p>
              <p className='about-movie__info-main'>Боевик, Комедия, Драма</p>
            </li>
            <li className='about-movie__box-info-main'>
              <p className='about-movie__heading-main'>В главных ролях</p>
              <p className='about-movie__info-main'>Боевик, Комедия, Драма</p>
            </li>
            <li className='about-movie__box-info-main'>
              <p className='about-movie__heading-main'>Участвует в подборках</p>
              <p className='about-movie__info-main'>Боевик, Комедия, Драма</p>
            </li>
          </ul>

          <div className='about-movie__box-description'>
            <div>
              <p className='about-movie__title-description'>О чем фильм “{movie.name} ({movie.year})”</p>
              <p className='about-movie__info' >{isShowAllText ? movie.description : movie.shortDescription}</p>
            </div>
            <button
              className='about-movie__btn-more hover'
              type='button'
              onClick={toggleAllText}
            >
              {!isShowAllText ? 'Ещё' : 'Скрыть'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DescriptionMovieCard;
