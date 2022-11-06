

import DescriptionMovieCard from '../components/DescriptionMovieCard/DescriptionMovieCard';
import Compilation from '../components/Сompilation/Compilation';
import MoviePosters from '../components/MoviePosters/MoviePosters';
import '../assets/styles/pages/MoviePage.css';

function MoviePage() {
  return (
    <>
      <DescriptionMovieCard />
      <MoviePosters />
      <Compilation title='Фильмы в этом жанре' />
    </>
  );
}

export default MoviePage;
