import React from 'react';
import './DescriptionMovieCard.css';
import ImgMovie from '../../image/movie-3.png';

function DescriptionMovieCard() {
  return (
    <section className='movies-description'>
      <div className='about-movie'>

        <div className='about-movie__container'>
          <img className='about-movie__img' src={ImgMovie} alt='Постер к фильму' />
          <div className='about-movie__container-rating'>
            <div className='about-movie__box-rating'>
              <span className='about-movie__estimation'>8.9</span>
              <span className='about-movie__owner'>Кинопоиск</span>
            </div>
            <div className='about-movie__box-rating about-movie__box-rating_type_imdb'>
              <span className='about-movie__estimation'>8</span>
              <span className='about-movie__owner'>IMDb</span>
            </div>
          </div>
        </div>

        <div className='about-movie__container'>
          <h3 className='about-movie__title'>Гениальное ограбление (2021)</h3>
          <p className='about-movie__title-en'>Гениальное ограбление (2021)</p>

          <ul className='about-movie__box-data'>
            <li className='about-movie__box-info'>
              <p className='about-movie__heading'>Продолжительность</p>
              <p className='about-movie__info'>1 Час 58 минут</p>
            </li>
            <li className='about-movie__box-info'>
              <p className='about-movie__heading'>Год выпуска</p>
              <p className='about-movie__info'>2021</p>
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
              <p className='about-movie__heading-main'>Жанр</p>
              <p className='about-movie__info-main'>Боевик, Комедия, Драма</p>
            </li>
            <li className='about-movie__box-info-main'>
              <p className='about-movie__heading-main'>Жанр</p>
              <p className='about-movie__info-main'>Боевик, Комедия, Драма</p>
            </li>
            <li className='about-movie__box-info-main'>
              <p className='about-movie__heading-main'>Жанр</p>
              <p className='about-movie__info-main'>Боевик, Комедия, Драма</p>
            </li>
          </ul>

          <div className='about-movie__box-description'>
            <p className='about-movie__title-description'>О чем фильм “Гениальное ограбление (2021)”</p>
            <p className='about-movie__info'>Идейные соображения высшего порядка, а также сложившаяся структура организации
              требуют от нас анализа направлений прогрессивного развития.
              Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности
              влечет за собой процесс внедрения и модернизации направлений прогрессивного развития.
              Постоянный количественный рост и сфера нашей активности представляет собой
              интересный эксперимент проверки систем массового участия. Разнообразный
              и богатый опыт постоянное информационно-пропагандистское обеспечение нашей
              деятельности влечет за собой процесс внедрения и модернизации позиций,
              занимаемых участниками в отношении поставленных задач.
              Равным образом постоянное информационно-пропагандистское обеспечение
              нашей деятельности влечет за собой процесс внедрения и модернизации направлений.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DescriptionMovieCard;
