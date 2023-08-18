import GenreCard from '../GenreCard/GenreCard';

import { genresList } from '../../assets/appData/genresList';
import './SectionGenres.scss';

function SectionGenres() {
  return (
    <section className='genres' aria-label='Жанры'>
      <ul>
        <li>         
          <GenreCard item={genresList.genre_one} />
        </li>
        <li>
          <ul className='genres__container-two'>
            {genresList.genre_two.map((item) => (
              <li key={item.id}>
                <GenreCard item={item} className='genres__box_type_two' />
              </li>
            )
            )}
          </ul>
        </li>
        <li>
          <ul className='genres__container-three'>
            {genresList.genre_three.map((item) => (
              <li key={item.id}>
                <GenreCard item={item} className='genres__box_type_three' />
              </li>
            )
            )}
          </ul>
        </li>
      </ul>     
    </section>
  );
}

export default SectionGenres;