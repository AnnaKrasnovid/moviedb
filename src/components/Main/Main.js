import './Main.css';
import Lead from '../Lead/Lead';
import SearchForm from '../SearchForm/SearchForm';
import Compilation from '../Сompilation/Compilation';

function Main() {
  return (
    <main className='main-page'>
      <Lead />
      <SearchForm />
      <Compilation />
    </main>
  )
}

export default Main;
