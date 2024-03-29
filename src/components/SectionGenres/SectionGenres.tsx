import GenreCard from '../GenreCard/GenreCard';

import { submenuGenres } from '../../settings/menuList';
import './SectionGenres.scss';

function SectionGenres() {

  function getCards() {
    return submenuGenres.map((item, index) => {
      if (index >= 3) {
        return (
          <li key={item.id} className='genres__box genres__box_type_three'>
            <GenreCard item={item} index={index} />
          </li>
        );
      }
    });
  }

  return (
    <section className='genres' aria-label='Жанры'>
      <ul className='genres__list'>
        <li className='genres__box genres__box_type_one'>
          <GenreCard item={submenuGenres[0]} index={0} />
        </li>
        <li>
          <ul className='genres__container-two'>
            <li className='genres__box genres__box_type_two'>
              <GenreCard item={submenuGenres[1]} index={1} />
            </li>
            <li className='genres__box genres__box_type_two'>
              <GenreCard item={submenuGenres[2]} index={2} />
            </li>
          </ul>
        </li>
        <li>
          <ul className='genres__container-three'>
            {getCards()}
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default SectionGenres;