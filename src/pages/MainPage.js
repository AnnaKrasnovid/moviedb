import Lead from '../components/Lead/Lead';
import Compilation from '../components/Сompilation/Compilation';
import DescriptionMovieCard from '../components/DescriptionMovieCard/DescriptionMovieCard';

import { mov } from '../assets/mockData/movies';

import '../assets/styles/pages/Main.scss';

function Main() {
  return (
    <>
      <Lead />
      <Compilation title='Подборки лучших фильмов' moviesList={mov}/>
      <Compilation title='Популярное' moviesList={mov}/>
      <DescriptionMovieCard />
    </>
  );
}

export default Main;
