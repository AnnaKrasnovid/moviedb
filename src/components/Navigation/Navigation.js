import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ classNamePopup, onClosePopup }) {
  const setActive = ({isActive}) => isActive ? 'navigation__link navigation__link_active' : 'navigation__link';

  return (
    <nav className={`navigation ${classNamePopup}`}>
      <ul className='navigation__list navigation__list_type_popup'>
        <li className='navigation__box-link'>
          <NavLink to='/genre' className={setActive} onClick={onClosePopup} >По жанру</NavLink>
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
        <li className='navigation__box-link'>
          <NavLink to='/anime' className={setActive} onClick={onClosePopup} >Аниме</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;
