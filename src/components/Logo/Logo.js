import React from 'react';
import './Logo.css';
import LogoVector from '../../image/Logo.svg';
import { Link } from 'react-router-dom';

function Logo({classNameBox, classNameImg, classNameSlogan}) {
  return (
    <div className={`logo ${classNameBox}`}>
      <Link to='/' >
        <img className={`logo__img ${classNameImg}`} src={LogoVector}></img>
      </Link>
      <p className={`logo__slogan ${classNameSlogan}`}>Знаем, что вам понравиться</p>
    </div>
  )
}

export default Logo;

