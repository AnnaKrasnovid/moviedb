import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuPopup.css';

function MenuPopup({ isHoverGenres, onOpenMenuGenres, onCloseMenuGenres, onActiveMenu }) {


  return (
    <div
      className={`menu ${isHoverGenres ? 'menu_opened' : ''}`}
      onFocus={onOpenMenuGenres}

    >
      <ul className='menu__list'>
        <li className='menu__genre'>
          <NavLink to='/' className={onActiveMenu}>Боевик</NavLink>
        </li>
        <li className='menu__genre'>
          <NavLink to='/genre' className={onActiveMenu}>Военные</NavLink>
        </li>
        <li className='menu__genre'>
          <NavLink to='/' className={onActiveMenu}>Детектив</NavLink>
        </li>
        <li className='menu__genre'>
          <NavLink to='/' className={onActiveMenu}>Детский</NavLink>
        </li>
        <li className='menu__genre'>
          <NavLink to='/' className={onActiveMenu}>Комедия</NavLink>
        </li>
        <li className='menu__genre'>
          <NavLink to='/' className={onActiveMenu}>Криминал</NavLink>
        </li>
        <li className='menu__genre'>
          <NavLink to='/' className={onActiveMenu}>Мелодрама</NavLink>
        </li>
        <li className='menu__genre'>
          <NavLink to='/' className={onActiveMenu}>Триллер</NavLink>
        </li>
        <li className='menu__genre'>
          <NavLink to='/' className={onActiveMenu}>Ужасы</NavLink>
        </li>
        <li className='menu__genre'>
          <NavLink to='/' className={onActiveMenu}>Фантастика</NavLink>
        </li>
        <li className='menu__genre'>
          <NavLink to='/' className={onActiveMenu}>Фэнтези</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default MenuPopup;
