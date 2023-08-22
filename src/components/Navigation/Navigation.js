import React from 'react';
import { NavLink } from 'react-router-dom';

import Submenu from '../Submenu/Submenu';

import { menu } from '../../settings/routes';
import './Navigation.scss';

function Navigation() {
  const setActive = ({ isActive }) => isActive ? 'link-menu link-menu_active' : 'link-menu';

  return (
    <nav className={`navigation `}>
      <ul className='navigation__list navigation__list_type_popup' >
        {menu.map(item => (
          <li className='navigation__box-link' key={item.id}>
            <NavLink to={item.path} className={setActive} >{item.title}
              {item.submenu && (
                <svg className='navigation__arrow' width="22" height="22" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5 9L12.5 15L6.5 9" stroke="#fff" stroke-width="2" />
                </svg>
              )}
            </NavLink>
            {item.submenu && <Submenu item={item} />}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
