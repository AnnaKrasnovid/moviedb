import React from 'react';
import './Logo.css';
import LogoVector from '../../image/Logo.svg';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className='logo'>
      <Link to='/' >
        <img className="logo__img" src={LogoVector}></img>
      </Link>
      <p className='logo__slogan'>Знаем, что вам понравиться</p>
    </div>
  )
}

export default Logo;
