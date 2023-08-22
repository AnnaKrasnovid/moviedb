import React from 'react';
import { NavLink } from 'react-router-dom';

import { menuList } from '../../settings/menuList';
import { routes } from '../../settings/routes';

import './Submenu.scss';

function Submenu({ item }) {
 
  return (
    <div
      className={`menu ${ 'menu_opened'}`}
    
    >
      <ul className='menu__list' >
        {item.submenu.map((i) => {
          return (
            <li className='menu__genre' key={i.id}>
              <NavLink to={`${item.path}/${i.link}`}>
                {i.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Submenu;
