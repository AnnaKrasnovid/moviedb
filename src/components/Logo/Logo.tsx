import React from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import LogoVector from '../../image/Logo.svg';
import './Logo.scss';

interface LogoInt {
  classNameBox: string,
  classNameImg: string,
}

function Logo({ classNameBox, classNameImg }: LogoInt) {
  return (
    <Link to='/' className={`logo ${classNameBox}`}>
      <img className={`logo__img ${classNameImg}`} src={LogoVector} alt='Логотип'></img>
    </Link>
  );
}

export default Logo;

