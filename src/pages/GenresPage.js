import AboutMovieDB from '../components/AboutMovieDB/AboutMovieDB';
import { genresList } from '../assets/appData/genresList';
import '../assets/styles/pages/Genres.css';

function Genres() {
  return (
    <section className='genres' aria-label='Постеры к фильмам'>
      <ul>
        <li className={`genres__box ${genresList.genre_one.className}`}>
          <h3 className='genres__title'>{genresList.genre_one.title}</h3>
        </li>
        <li>
          <ul className='genres__container-two'>
            {genresList.genre_two.map((i) => {
              return (
                <li className={`genres__box genres__box_type_two ${i.className}`}>
                  <h3 className='genres__title'>{i.title}</h3>
                </li>);
            })}
          </ul>
        </li>
        <li>
          <ul className='genres__container-three'>
            {genresList.genre_three.map((i) => {
              return (
                <li className={`genres__box genres__box_type_three ${i.className}`}>
                  <h3 className='genres__title'>{i.title}</h3>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
      <AboutMovieDB />
    </section>
  );
}

export default Genres;
