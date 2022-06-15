import React from 'react';
import './Compilation.css';
import MovieCard from '../MovieCard/MovieCard';

function Compilation() {
  return (
    <section className='compilation'>
      <h2 className='compilation__title'>Лучшие фильмы подборки</h2>
      <div className='compilation__movies'>
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

      </div>
    </section>
  )
}

export default Compilation;
