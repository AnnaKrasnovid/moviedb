import React from 'react';
import GenreMovie from '../../image/genre-childish.png';
import './MoviePosters.scss';

function MoviePosters() {
  return (
    <section className='posters'>
      <ul className='posters__list'>
        <li className='posters__item'>
          <img className='posters__img' srs={GenreMovie} alt='Постер к фильму' />
        </li>

        {/*<li className='posters__item'>
          <img className='posters__img' srs={ImgMovie} alt='Постер к фильму' />
        </li>

        <li className='posters__item'>
          <img className='posters__img' srs={ImgMovie} alt='Постер к фильму' />
        </li>

        <li className='posters__item'>
          <img className='posters__img' srs={ImgMovie} alt='Постер к фильму' />
        </li>

        <li className='posters__item'>
          <img className='posters__img' srs={ImgMovie} alt='Постер к фильму' />
        </li>

        <li className='posters__item'>
          <img className='posters__img' srs={ImgMovie} alt='Постер к фильму' />
        </li>
  */}
      </ul>
    </section>
  );
}

export default MoviePosters;
