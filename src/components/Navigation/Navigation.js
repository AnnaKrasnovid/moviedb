import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuPopup from '../MenuPopup/MenuPopup';
import './Navigation.scss';

function Navigation({ classNamePopup, onClosePopup }) {
  const [isHoverGenres, setIsHoverGenres] = React.useState(false);

  const setActive = ({ isActive }) => isActive ? 'link-menu link-menu_active' : 'link-menu';

  function handleMouseEnterGenres() {
    setIsHoverGenres(true);
  }

  function handleMouseLeaveGenres() {
    setIsHoverGenres(false);
  }

  return (
    <nav className={`navigation ${classNamePopup}`}>
      <ul className='navigation__list navigation__list_type_popup' onMouseLeave={handleMouseLeaveGenres}>
        <li
          className='navigation__box-link navigation__box-link_type_genres'
          onMouseEnter={e => { e.stopPropagation() }}
        >
          <NavLink
            to='/genres'
            className={setActive}
            onMouseEnter={handleMouseEnterGenres}
            onClick={onClosePopup}
          >
            По жанру
          </NavLink>
          <MenuPopup
            isHoverGenres={isHoverGenres}
            onOpenMenuGenres={handleMouseEnterGenres}
            onCloseMenuGenres={handleMouseLeaveGenres}
            setActive={setActive}
          />
        </li>
        <li className='navigation__box-link'>
          <NavLink to='/movies' className={setActive} onClick={onClosePopup}>Фильмы</NavLink>
        </li>
        <li className='navigation__box-link'>
          <NavLink to='/serials' className={setActive} onClick={onClosePopup}>Сериалы</NavLink>
        </li>
        <li className='navigation__box-link'>
          <NavLink to='/cartoons' className={setActive} onClick={onClosePopup}>Мультфильмы</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
