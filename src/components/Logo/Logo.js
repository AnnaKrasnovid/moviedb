import React from 'react';
import './Logo.css';
import LogoVector from '../../image/Logo.svg';

function Logo() {
  return (
    <div className='logo'>
      <img className="logo__img" src={LogoVector}></img>
      <p className='logo__slogan'>Знаем, что вам понравиться</p>
    </div>
  )
}

export default Logo;
