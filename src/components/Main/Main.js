import './Main.css';
import Lead from '../Lead/Lead';
import SearchForm from '../SearchForm/SearchForm';
import Compilation from '../Сompilation/Compilation';
import DescriptionMovieCard from '../DescriptionMovieCard/DescriptionMovieCard';

function Main() {
  return (
    <main className='main-page'>
      <Lead />
      <SearchForm />
      <Compilation />
      <Compilation />
      <DescriptionMovieCard />
    </main>
  )
}

export default Main;
