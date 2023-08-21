import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';

import './MoviesList.scss';

function MoviesList({ list }: any) {
  const [movies, setMovies] = useState([]);

  return (
    <section className='movies'>
      <ul className='movies__list'>
        {list.map((item: any) => (
          <li key={item.id}>
            <Link to={`${item.id}`} state={{ movie: item }} className='link'>
              <MovieCard item={item} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MoviesList;
