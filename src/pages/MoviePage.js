import { useParams,useLocation } from 'react-router-dom';

import DescriptionMovieCard from '../components/DescriptionMovieCard/DescriptionMovieCard';
import Compilation from '../components/Сompilation/Compilation';
import MoviePosters from '../components/MoviePosters/MoviePosters';

import { mov } from '../assets/mockData/movies';
import '../assets/styles/pages/MoviePage.scss';

function MoviePage() {
  let { state } = useLocation();
  // const {movie} = useParams()
  console.log(state.movie)
  return (
    <>
      <DescriptionMovieCard movie={state.movie}/>
      {/* <MoviePosters /> */}
      {/* <Compilation title='Фильмы в этом жанре'
      ={mov} /> */}
    </>
  );
}

export default MoviePage;
