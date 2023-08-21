import Rating from '../Rating/Rating';

import { MovieInt } from '../../settings/interfaces';

import './MovieCard.scss';

// interface MovieCardInt {
//   item: MovieInt
// }

function MovieCard({ item }:any) {

  return (
    <div className='movie' >
      <div className='movie__box'>
        <img className='movie__img' src={item.poster.url} alt='Фильм'></img>
        <div className='movie__container'>
          <Rating number={item.rating.kp} type='orange' />
          {item.rating.imdb > 0 && (
            <Rating number={item.rating.imdb} type='yellow' />
          )}
        </div>
        <div className='movie__info'>
          <p className='movie__description'> {item.year}<br /> {item.genres[0].name}<br /> {item.countries[0].name} </p>
        </div>
      </div>
      <h3 className='movie__title'>{item.name}</h3>
    </div>
  );
}

export default MovieCard;
