import Lead from '../components/Lead/Lead';
import Compilation from '../components/Сompilation/Compilation';
import DescriptionMovieCard from '../components/DescriptionMovieCard/DescriptionMovieCard';
import '../assets/styles/pages/Main.css';

function Main() {
  return (
    <>
      <Lead />
      <Compilation title='Подборки лучших фильмов' />
      <Compilation title='Популярное' />
      <DescriptionMovieCard />
    </>
  );
}

export default Main;
