import React, { useState } from 'react';

import RatingRound from '../RatingRound/RatingRound';
import Rating from '../Rating/Rating';

import { getRoundNumber, getTime } from '../../assets/utils';

import './DescriptionMovieCard.scss';

function DescriptionMovieCard({ movie }) {
  const [isShowAllText, setIsShowAllText] = useState(false);

  function toggleAllText() {
    setIsShowAllText(!isShowAllText);
  }

  function getInfo(arr) {
    let infoArr = [];
    arr.map((i) => infoArr.push(i.name));
    return infoArr.join(', ');
  }

  return (
    <section className='about-movie'>
      <div className='about-movie__description'>

        <div className='about-movie__container'>
          <img className='about-movie__img' src={movie.poster.url} alt='Постер к фильму' />
          <div className='about-movie__container-rating'>
            {/* <RatingRound number={movie.rating.kp} title='Кинопоиск' /> */}
            <Rating number={movie.rating.kp} type='orange'/>
            {movie.rating.imdb ? (
              // <RatingRound number={movie.rating.imdb} className={'rating_type_imdb'} title='IMDb' />
              <Rating number={movie.rating.imdb} type='yellow'/>
            ) : <></>}
          </div>
        </div>

        <div className='about-movie__container'>
          <h3 className='about-movie__title'>{movie.name} ({movie.year})</h3>
          {movie.alternativeName ? <p className='about-movie__title-en'>{movie.alternativeName} ({movie.year})</p> : <></>}

          {/* <ul className='about-movie__box-data'> */}
          {/* <li className='about-movie__box-info'>
              <p className='about-movie__heading'>Продолжительность</p>
              <p className='about-movie__info'>
                {getTime(movie.movieLength)}
              </p>
            </li>
            <li className='about-movie__box-info'>
              <p className='about-movie__heading'>Год выпуска</p>
              <p className='about-movie__info'>{movie.year}</p>
            </li> */}
          {/* <li className='about-movie__box-info'>
              <p className='about-movie__heading'>Премьера фильма в России</p>
              <p className='about-movie__info'>22 Апреля 2021</p>
            </li>
            <li className='about-movie__box-info'>
              <p className='about-movie__heading'>Возраст</p>
              <p className='about-movie__info'>16+</p>
            </li> */}
         

          <ul className='about-movie__box-main'>
            <li className='about-movie__box-info-main'>
              <p className='about-movie__heading-main'>Продолжительность</p>
              <p className='about-movie__info-main'> {getTime(movie.movieLength)}</p>
            </li>
            <li className='about-movie__box-info-main'>
              <p className='about-movie__heading-main'>Год выпускa</p>
              <p className='about-movie__info-main'>{movie.year}</p>
            </li>
            <li className='about-movie__box-info-main'>
              <p className='about-movie__heading-main'>Жанр</p>
              <p className='about-movie__info-main'>{getInfo(movie.genres)}</p>
            </li>
            <li className='about-movie__box-info-main'>
              <p className='about-movie__heading-main'>Страна</p>
              <p className='about-movie__info-main'>{getInfo(movie.countries)}</p>
            </li>
            {/* <li className='about-movie__box-info-main'>
              <p className='about-movie__heading-main'>В главных ролях</p>
              <p className='about-movie__info-main'>Боевик, Комедия, Драма</p>
            </li>*/}
            <li className='about-movie__box-info-main'>
              <p className='about-movie__heading-main'>Участвует в подборках</p>
              <p className='about-movie__info-main'>{getInfo(movie.genres)}</p>
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
