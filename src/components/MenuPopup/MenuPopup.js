import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuPopup.css';

function MenuPopup({ isHoverGenres, onOpenMenuGenres, onCloseMenuGenres, setActive }) {
  return (
    <div
      className={`menu ${isHoverGenres ? 'menu_opened' : ''}`}
      onMouseEnter={onOpenMenuGenres}
      onMouseLeave={onCloseMenuGenres}
    >
      <ul className='menu__list' >
        <li className='menu__genre'>
          <NavLink to='/' className={setActive} onClick={onCloseMenuGenres}>Боевик</NavLink>
        </li>
        <li className='menu__genre'>
          <NavLink to='/genre' className={setActive} onClick={onCloseMenuGenres}>Военные</NavLink>
        </li>
        <li className='menu__genre'>
          <NavLink to='/' className={setActive} onClick={onCloseMenuGenres}>Детектив</NavLink>
        </li>
        <li className='menu__genre'>
          <NavLink to='/' className={setActive} onClick={onCloseMenuGenres}>Детский</NavLink>
        </li>
        <li className='menu__genre'>
          <NavLink to='/' className={setActive} onClick={onCloseMenuGenres}>Комедия</NavLink>
        </li>
        <li className='menu__genre'>
          <NavLink to='/' className={setActive} onClick={onCloseMenuGenres}>Криминал</NavLink>
        </li>
        <li className='menu__genre'>
          <NavLink to='/' className={setActive} onClick={onCloseMenuGenres}>Мелодрама</NavLink>
        </li>
        <li className='menu__genre'>
          <NavLink to='/' className={setActive} onClick={onCloseMenuGenres}>Триллер</NavLink>
        </li>
        <li className='menu__genre'>
          <NavLink to='/' className={setActive} onClick={onCloseMenuGenres}>Ужасы</NavLink>
        </li>
        <li className='menu__genre'>
          <NavLink to='/' className={setActive} onClick={onCloseMenuGenres}>Фантастика</NavLink>
        </li>
        <li className='menu__genre'>
          <NavLink to='/' className={setActive} onClick={onCloseMenuGenres}>Фэнтези</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default MenuPopup;
