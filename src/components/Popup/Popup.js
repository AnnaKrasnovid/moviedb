import React from 'react';
import { Link } from 'react-router-dom';
import './Popup.css';
import Logo from '../Logo/Logo';

function Popup({ onClosePopup, isOpenPopup, children }) {
  return (
    <div className={`popup ${isOpenPopup ? 'popup_opened' : ''}`}>
      <div className='popup__box'>
      <Logo
      classNameBox='logo_type_popup'
      classNameImg='logo__img_type_popup'
      classNameSlogan='logo__slogan_type_popup'
    />
        <button className='popup__button-close' onClick={onClosePopup} type="button"/>
      </div>
      {children}
    </div>
  )
}

export default Popup;
