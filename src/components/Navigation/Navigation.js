import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation({ onOpenMenu, isOpenPopupMenu, classNamePopup }) {

  return (
    <nav className={`navigation ${classNamePopup}`}>
      <ul className='navigation__list navigation__list_type_popup'>
        <li className='navigation__box-link'>
          <Link to='/genre' className='navigation__link'>По жанру</Link>
        </li>
        <li className='navigation__box-link'>
          <Link to='/movies' className='navigation__link'>Фильмы</Link>
        </li>
        <li className='navigation__box-link'>
          <Link to='/serials' className='navigation__link'>Сериалы</Link>
        </li>
        <li className='navigation__box-link'>
          <Link to='/cartoons' className='navigation__link'>Мультфильмы</Link>
        </li>
        <li className='navigation__box-link'>
          <Link to='/anime' className='navigation__link'>Аниме</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;
 /*{`navigation ${isOpenPopupMenu ? 'navigation_type_header' : 'navigation_type_popup'}`}*/
