import React from 'react';
import { NavLink } from 'react-router-dom';

import { genresRoutes } from '../../settings/routes';

import './MenuPopup.scss';

function MenuPopup({ isHoverGenres, onOpenMenuGenres, onCloseMenuGenres, setActive }) {
  const menuList = [
    { id: '1', route: genresRoutes.ACTION_MOVIE, title: 'Боевик' },
    { id: '2', route: genresRoutes.MILITARY, title: 'Военные' },
    { id: '3', route: genresRoutes.DETECTIVE, title: 'Детектив' },
    { id: '4', route: genresRoutes.FAMILY, title: 'Семейный' },
    { id: '6', route: genresRoutes.COMEDY, title: 'Комедия' },
    { id: '7', route: genresRoutes.CRIMINAL, title: 'Криминал' },
    { id: '8', route: genresRoutes.MELODRAMA, title: 'Мелодрама' },
    { id: '9', route: genresRoutes.THRILLER, title: 'Триллер' },
    { id: '10', route: genresRoutes.HORROR, title: 'Ужасы' },
    { id: '11', route: genresRoutes.FANTASTIC, title: 'Фантастика' },
    { id: '12', route: genresRoutes.FANTASY, title: 'Фэнтези' },
    { id: '5', route: genresRoutes.DRAMA, title: 'Драмы' },
  ];

  return (
    <div
      className={`menu ${isHoverGenres ? 'menu_opened' : ''}`}
      onMouseEnter={onOpenMenuGenres}
      onMouseLeave={onCloseMenuGenres}
    >
      <ul className='menu__list' >
        {menuList.map((i) => {
          return (
            <li className='menu__genre' key={i.id}>
              <NavLink to={i.route}  className={setActive} onClick={onCloseMenuGenres}>{i.title}</NavLink>
            </li>
          );
        })}       
      </ul>
    </div>
  );
}

export default MenuPopup;
