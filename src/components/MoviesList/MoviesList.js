import React from 'react';
import './MoviesList.css';
import MovieCard from '../MovieCard/MovieCard';

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
  )
}

export default MoviesList;
