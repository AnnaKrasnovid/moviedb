import React from 'react';
import './Compilation.css';
import MovieCard from '../MovieCard/MovieCard';

function Compilation() {
  return (
    <section className='compilation'>
      <h2 className='compilation__title'>Лучшие фильмы подборки</h2>
      <ul className='compilation__movies'>
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

export default Compilation;
