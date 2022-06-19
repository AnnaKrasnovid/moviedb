import './Main.css';
import Lead from '../Lead/Lead';

import Compilation from '../Сompilation/Compilation';
import DescriptionMovieCard from '../DescriptionMovieCard/DescriptionMovieCard';

function Main() {
  return (
    <main className='main-page'>
      <Lead />
      <Compilation />
      <Compilation />
      <DescriptionMovieCard />
    </main>
  )
}

export default Main;
