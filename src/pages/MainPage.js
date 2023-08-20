import Lead from '../components/Lead/Lead';
import Compilation from '../components/Сompilation/Compilation';
import DescriptionMovieCard from '../components/DescriptionMovieCard/DescriptionMovieCard';

import { mov } from '../assets/mockData/movies';

import '../assets/styles/pages/Main.scss';

function Main() {
  return (
    <>
      <Lead />
      <Compilation title='Сериалы' moviesList={mov}/>
      <Compilation title='Фильмы с высоким рейтингом' moviesList={mov}/>
      <Compilation title='Драмы' moviesList={mov}/>
      <Compilation title='Комедии' moviesList={mov}/>
      <Compilation title='Детективы' moviesList={mov}/>
      <DescriptionMovieCard movie={mov[3]} />
    </>
  );
}

export default Main;
