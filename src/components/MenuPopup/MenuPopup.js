import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuPopup.scss';

function MenuPopup({ isHoverGenres, onOpenMenuGenres, onCloseMenuGenres, setActive }) {
  const menuList = [
    { id: '1', route: '/', title: 'Боевик' },
    { id: '2', route: '/', title: 'Военные' },
    { id: '3', route: '/', title: 'Детектив' },
    { id: '4', route: '/', title: 'Семейный' },
    { id: '5', route: '/', title: 'Комедия' },
    { id: '6', route: '/', title: 'Криминал' },
    { id: '7', route: '/', title: 'Мелодрама' },
    { id: '8', route: '/', title: 'Триллер' },
    { id: '9', route: '/', title: 'Ужасы' },
    { id: '10', route: '/', title: 'Фантастика' },
    { id: '11', route: '/', title: 'Фэнтези' },
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
