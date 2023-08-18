import React, { useState, useEffect } from 'react';
import ImgMovie from '../../image/movie-3.png';

import { getText } from '../../assets/utils';
import './DescriptionMovieCard.scss';

function DescriptionMovieCard() {
  // eslint-disable-next-line max-len
  const text = `
  Идейные соображения высшего порядка, а также сложившаяся структура организации требуют от 
  нас анализа направлений прогрессивного развития. Равным образом постоянное информационно - 
  пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации 
  направлений прогрессивного развития. Постоянный количественный рост и сфера нашей активности представляет 
  собой интересный эксперимент проверки систем массового участия. Разнообразный и богатый опыт постоянное 
  информационно - пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения 
  и модернизации позиций, занимаемых участниками в отношении поставленных задач. Равным 
  образом постоянное информационно - пропагандистское обеспечение нашей деятельности влечет за 
  собой процесс внедрения и модернизации направлений. Идейные соображения высшего порядка, а также 
  сложившаяся структура организации требуют от нас анализа направлений прогрессивного развития. 
  Равным образом постоянное информационно - пропагандистское обеспечение нашей деятельности влечет 
  за собой процесс внедрения и модернизации направлений прогрессивного развития. 
  Постоянный количественный рост и сфера нашей активности представляет собой интересный 
  эксперимент проверки систем массового участия. Разнообразный и богатый опыт постоянное информационно - 
  пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации позиций, 
  занимаемых участниками в отношении поставленных задач. Равным образом постоянное информационно - 
  пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации направлений.`;
  const textArr = getText(text, 2);
  const [description, setDescription] = useState([]);
  const [isShowAllText, setIsShowAllText] = useState(false);

  function showText() {
    if (!isShowAllText) {
      setDescription(textArr.slice(0, 2));
    } else{
      setDescription(textArr);
    }
  }

  function toggleAllText() {
    setIsShowAllText(!isShowAllText);
  }

  useEffect(() => {
    showText();
  }, [isShowAllText]);


  return (
    <section className='about-movie'>
      <div className='about-movie__description'>

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
              <p className='about-movie__title-description'>О чем фильм “Гениальное ограбление (2021)”</p>
              {description.map((item, index) => (
                <p className='about-movie__info' key={index}>{item}</p>
              ))}

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
