import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.scss';

function MoviesList() {
  return (
    <section className='movies'>
      <ul className='movies__list'>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </ul>
    </section>
  );
}

export default MoviesList;
