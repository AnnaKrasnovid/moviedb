import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
import { routes } from '../../settings/routes';
import { mov } from '../../assets/mockData/movies';

import './MoviesList.scss';

function MoviesList({list}) {
  const [movies, setMovies] = useState([]);

  return (
    <section className='movies'>
      <ul className='movies__list'>
        {list.map((item) => (
          <li key={item.id}>
            <Link  to={`${item.id}`} state={{ movie: item }}>
              <MovieCard item={item} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MoviesList;
