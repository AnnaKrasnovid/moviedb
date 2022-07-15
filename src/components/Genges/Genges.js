import './Genges.css';
import Fighters from '../../image/genre-fighters.png';
import Military from '../../image/genre-military.png';
import Detectives from '../../image/genre-detectives.png';
import Childish from '../../image/genre-childish.png';
import Dramas from '../../image/genre-dramas.png';
import Comedies from '../../image/genre-comedies.png';
import Crime from '../../image/genre-crime.png';
import Melodramas from '../../image/genre-melodramas.png';
import Thrillers from '../../image/genre-thrillers.png';
import Horrors from '../../image/genre-horrors.png';
import Fantastic from '../../image/genre-fantastic.png';
import Fantasy from '../../image/genre-fantasy.png';

function Genges() {
  return (
    <section className='genges' aria-label='Постеры к фильмам'>

      <div className='genges__box genges__box_type_one'>
        <img className='genges__poster genges__poster_type_main' src={Fighters}/>
        <h3 className='genges__title' >Боевики</h3>
      </div>

      <div className='genges__container-two'>
        <div className='genges__box genges__box_type_two'>
          <img className='genges__poster genges__poster_type_two' src={Military}/>
          <h3 className='genges__title'>Военные</h3>
        </div>

        <div className='genges__box genges__box_type_two'>
          <img className='genges__poster genges__poster_type_two' src={Detectives}/>
          <h3 className='genges__title'>Детективы</h3>
        </div>
      </div>

      <div className='genges__container-three'>
        <div className='genges__box genges__box_type_three'>
          <img className='genges__poster genges__poster_type_small' src={Childish}/>
          <h3 className='genges__title'>Детские</h3>
        </div>

        <div className='genges__box genges__box_type_three'>
          <img className='genges__poster genges__poster_type_small' src={Dramas}/>
          <h3 className='genges__title'>Драмы</h3>
        </div>

        <div className='genges__box genges__box_type_three'>
          <img className='genges__poster genges__poster_type_small' src={Comedies}/>
          <h3 className='genges__title'>Комедии</h3>
        </div>
        <div className='genges__box genges__box_type_three'>
          <img className='genges__poster genges__poster_type_small' src={Crime}/>
          <h3 className='genges__title'>Криминал</h3>
        </div>
        <div className='genges__box genges__box_type_three'>
          <img className='genges__poster genges__poster_type_small' src={Melodramas}/>
          <h3 className='genges__title'>Мелодраммы</h3>
        </div>
        <div className='genges__box genges__box_type_three'>
          <img className='genges__poster genges__poster_type_small' src={Thrillers}/>
          <h3 className='genges__title'>Триллеры</h3>
        </div>
        <div className='genges__box genges__box_type_three'>
          <img className='genges__poster genges__poster_type_small' src={Horrors}/>
          <h3 className='genges__title'>Ужасы</h3>
        </div>
        <div className='genges__box genges__box_type_three'>
          <img className='genges__poster genges__poster_type_small' src={Fantastic}/>
          <h3 className='genges__title'>Фантастика</h3>
        </div>
        <div className='genges__box genges__box_type_three'>
          <img className='genges__poster genges__poster_type_small' src={Fantasy}/>
          <h3 className='genges__title'>Фэнтэзи</h3>
        </div>
      </div>

    </section>
  )
}

export default Genges;
