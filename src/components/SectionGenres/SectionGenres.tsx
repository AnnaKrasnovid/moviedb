import GenreCard from '../GenreCard/GenreCard';

import { menuList } from '../../settings/menuList';
import './SectionGenres.scss';

function SectionGenres() {

  function getCards() {
    return menuList.map((item, index) => {
      if (index >= 3) {
        return (
          <li key={item.id} className='genres__box_type_three'>
            <GenreCard item={item} index={index} />
          </li>
        );
      }
    });
  }

  return (
    <section className='genres' aria-label='Жанры'>
      <ul>
        <li >
          <GenreCard item={menuList[0]} index={0} />
        </li>
        <li>
          <ul className='genres__container-two'>
            <li className='genres__box_type_two'>
              <GenreCard item={menuList[1]} index={1} />
            </li>
            <li className='genres__box_type_two'>
              <GenreCard item={menuList[2]} index={2} />
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