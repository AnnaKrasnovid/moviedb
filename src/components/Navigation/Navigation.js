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
    <>
      <nav className={`navigation ${classNamePopup}`}>
        <ul className='navigation__list navigation__list_type_popup'>
          <li className='navigation__box-link'>
            <NavLink
              to='/genre'
              className={setActive}
              onClick={onClosePopup}
              onMouseEnter={handleMouseEnterGenres}
              onMouseLeave={handleMouseLeaveGenres}
            >
              По жанру
            </NavLink>
          </li>
          <li className='navigation__box-link'>
            <NavLink to='/movies' className={setActive} onClick={onClosePopup} >Фильмы</NavLink>
          </li>
          <li className='navigation__box-link'>
            <NavLink to='/serials' className={setActive} onClick={onClosePopup} >Сериалы</NavLink>
          </li>
          <li className='navigation__box-link'>
            <NavLink to='/cartoons' className={setActive} onClick={onClosePopup} >Мультфильмы</NavLink>
          </li>
        </ul>
      </nav>

      <MenuPopup
        isHoverGenres={isHoverGenres}
        onOpenMenuGenres={handleMouseEnterGenres}
        onCloseMenuGenres={handleMouseLeaveGenres}
        onActiveMenu={setActive}
      />
    </>
  )
}

export default Navigation;
