import React from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import LogoVector from '../../images/Logo.svg';

import { routes } from '../../settings/routes';

import './Logo.scss';

type LogoTypes = 'header' | 'footer' | 'menu';
interface LogoInt {
  type: LogoTypes,
}

function Logo({ type}: LogoInt) {
  return (
    <Link to={routes.INDEX} className={`logo logo_type_${type}`}>
      <img className={`logo__img logo__img_type_${type}`} src={LogoVector} alt='Логотип'></img>
    </Link>
  );
}

export default Logo;

