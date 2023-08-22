import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { MenuItemInt } from '../../settings/interfaces';

import './Submenu.scss';

interface SubmenuInt {
  item: MenuItemInt,
  isActiveSubmenu: boolean,
}

function Submenu({ item, isActiveSubmenu }: SubmenuInt) {
  const { pathname } = useLocation();

  return (
    <div
      className={`menu ${isActiveSubmenu ? 'menu_opened' : ''}`}
    >
      <ul className='menu__list' >
        {item.submenu && item.submenu.map((i) => {
          return (
            <li className='menu__genre' key={i.id}>
              <NavLink
                to={`${item.path}/${i.path}`}
                className={pathname === `${item.path}/${i.path}` ? 'menu__link menu__link_active' : 'menu__link'}
              >
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
