import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Submenu from '../Submenu/Submenu';

import { menu } from '../../settings/routes';
import './Navigation.scss';

function Navigation() {
  const [isActiveSubmenu, setIsActiveSubmenu] = useState(false);
  const setActive = ({ isActive }) => isActive ? 'link-menu link-menu_active' : 'link-menu';

  const closeSubmenu = () => setIsActiveSubmenu(false);
  const openSubmenu =()=> setIsActiveSubmenu(true);

  const getMenuList = (item) => {
    if (item.submenu) {
      return (
        <li className='navigation__box-link' key={item.id} onMouseOver={openSubmenu} onMouseOut={closeSubmenu}>
          <NavLink to={item.path} className={setActive} >
            {item.title}
            {item.submenu && (
              <svg className={isActiveSubmenu ? 'navigation__arrow navigation__arrow_active' : 'navigation__arrow'}
                width="22" height="22" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5 9L12.5 15L6.5 9" stroke="#fff" strokeWidth="2" />
              </svg>
            )}
          </NavLink>
          <Submenu item={item} isActiveSubmenu={isActiveSubmenu} />
        </li>
      )
    } else {
      return (
        <li className='navigation__box-link' key={item.id} >
          <NavLink to={item.path} className={setActive} >
            {item.title}
          </NavLink>
        </li>
      );
    }
  };

  return (
    <nav className={`navigation `}>
      <ul className='navigation__list navigation__list_type_popup' >
        {menu.map(item => getMenuList(item))}
      </ul>
    </nav>
  );
}

export default Navigation;
