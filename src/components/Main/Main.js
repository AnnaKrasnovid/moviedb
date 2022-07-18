import './Main.css';
import Lead from '../Lead/Lead';
import Compilation from '../Сompilation/Compilation';
import DescriptionMovieCard from '../DescriptionMovieCard/DescriptionMovieCard';

function Main() {
  return (
    <>
      <Lead />
      <Compilation title='Подборки лучших фильмов' />

      <Compilation title='Популярное' />
      <DescriptionMovieCard />
    </>
  )
}

export default Main;
