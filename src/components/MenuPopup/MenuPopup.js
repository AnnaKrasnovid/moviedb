import React from 'react';
import { NavLink } from 'react-router-dom';

import { genresRoutes } from '../../settings/routes';
import { menuList } from '../../settings/menuList';

import './MenuPopup.scss';

function MenuPopup({ isHoverGenres, onOpenMenuGenres, onCloseMenuGenres, setActive }) {
 

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
              <NavLink to={i.link}  className={setActive} onClick={onCloseMenuGenres}>{i.title}</NavLink>
            </li>
          );
        })}       
      </ul>
    </div>
  );
}

export default MenuPopup;
