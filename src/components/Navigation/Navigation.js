import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import MenuPopup from '../MenuPopup/MenuPopup';

function Navigation({ classNamePopup, onClosePopup }) {
  const setActive = ({ isActive }) => isActive ? 'link-menu link-menu_active' : 'link-menu';

  const [isHoverGenres, setIsHoverGenres] = React.useState(false);


  function handleMouseEnterGenres() {
    setIsHoverGenres(true)
  }

  function handleMouseLeaveGenres() {
    setIsHoverGenres(false)
  }

  return (
      <nav className={`navigation ${classNamePopup}`}>
        <ul className='navigation__list navigation__list_type_popup' onMouseLeave={handleMouseLeaveGenres}>
          <li
            className='navigation__box-link navigation__box-link_type_genres'
            onMouseEnter={e => { e.stopPropagation() }}


          >
            <NavLink
              to='/genre'
              className={setActive}
              onMouseEnter={handleMouseEnterGenres}

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
            <NavLink to='/movies' className={setActive}>Фильмы</NavLink>
          </li>
          <li className='navigation__box-link'>
            <NavLink to='/serials' className={setActive}>Сериалы</NavLink>
          </li>
          <li className='navigation__box-link'>
            <NavLink to='/cartoons' className={setActive}>Мультфильмы</NavLink>
          </li>
        </ul>
      </nav>
  )
}

export default Navigation;
