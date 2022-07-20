
import './MoviePage.css';
import DescriptionMovieCard from '../DescriptionMovieCard/DescriptionMovieCard';
import Compilation from '../Сompilation/Compilation';
import MoviePosters from '../MoviePosters/MoviePosters';

function MoviePage() {
  return (
    <>
      <DescriptionMovieCard />
      <MoviePosters />
      <Compilation title='Фильмы в этом жанре' />
    </>
  )
}

export default MoviePage;
