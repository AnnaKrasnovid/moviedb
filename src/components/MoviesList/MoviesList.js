import React, { useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';

import { mov } from '../../assets/mockData/movies';

import './MoviesList.scss';

function MoviesList() {
  const [movies, setMovies] = useState([]);

  return (
    <section className='movies'>
      <ul className='movies__list'>
        {mov.map((item) => (
          <li key={item.id}>
            <MovieCard item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MoviesList;
