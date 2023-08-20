import React from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import LogoVector from '../../image/Logo.svg';
import './Logo.scss';

interface LogoInt {
  classNameBox: string,
  classNameImg: string,
  classNameSlogan: string,
  onClosePopup: () => void,
}

function Logo({ classNameBox, classNameImg, classNameSlogan, onClosePopup }: LogoInt) {
  return (
    <div className={`logo ${classNameBox}`}>
      <Link to='/' onClick={onClosePopup}>
        <img className={`logo__img ${classNameImg}`} src={LogoVector} alt='Логотип'></img>
      </Link>
      <p className={`logo__slogan ${classNameSlogan}`}>Знаем, что вам понравиться</p>
    </div>
  );
}

export default Logo;

