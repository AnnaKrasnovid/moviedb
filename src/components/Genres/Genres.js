import './Genres.css';
import AboutMovieDB from '../AboutMovieDB/AboutMovieDB';

function Genres() {
  return (
    <section className='genres' aria-label='Постеры к фильмам'>

      <div className='genres__box genres__box_genre_fighters'>
        <h3 className='genres__title' >Боевики</h3>
      </div>

      <div className='genres__container-two'>
        <div className='genres__box genres__box_type_two genres__box_genre_military'>
          <h3 className='genres__title'>Военные</h3>
        </div>

        <div className='genres__box genres__box_type_two genres__box_genre_detectives'>
          <h3 className='genres__title'>Детективы</h3>
        </div>
      </div>

      <div className='genres__container-three'>
        <div className='genres__box genres__box_type_three genres__box_genre_childish'>
          <h3 className='genres__title'>Детские</h3>
        </div>

        <div className='genres__box genres__box_type_three genres__box_genre_dramas'>
          <h3 className='genres__title'>Драмы</h3>
        </div>

        <div className='genres__box genres__box_type_three genres__box_genre_comedies'>
          <h3 className='genres__title'>Комедии</h3>
        </div>
        <div className='genres__box genres__box_type_three genres__box_genre_crime'>
          <h3 className='genres__title'>Криминал</h3>
        </div>
        <div className='genres__box genres__box_type_three genres__box_genre_melodramas'>
          <h3 className='genres__title'>Мелодраммы</h3>
        </div>
        <div className='genres__box genres__box_type_three genres__box_genre_thrillers'>
          <h3 className='genres__title'>Триллеры</h3>
        </div>
        <div className='genres__box genres__box_type_three genres__box_genre_horrors'>
          <h3 className='genres__title'>Ужасы</h3>
        </div>
        <div className='genres__box genres__box_type_three genres__box_genre_fantastic'>
          <h3 className='genres__title'>Фантастика</h3>
        </div>
        <div className='genres__box genres__box_type_three genres__box_genre_fantasy'>
          <h3 className='genres__title'>Фэнтэзи</h3>
        </div>
      </div>
      <AboutMovieDB />
    </section>
  );
}

export default Genres;
