import React from 'react';
import { Link } from 'react-router-dom';
import './Popup.css';
import Logo from '../Logo/Logo';

function Popup({ onClosePopup, isOpenPopupMenu, isOpenPopupSearch, children }) {
  const windowWidth = () => { return window.innerWidth };
  const [size, setSize] = React.useState(windowWidth());

  function handleClosePopup() {
    if(size > 768) {
      onClosePopup();
      setSize(windowWidth());
    }
  }

  React.useEffect(() => {
    let timeOut;

    function handleResize() {
      clearTimeout(timeOut);
      timeOut = setTimeout(() => { setSize(windowWidth()) }, 0);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [size]);

  React.useEffect(() => {
    handleClosePopup()
  }, [size])

  function getTypePopup() {
    if(isOpenPopupMenu) {
      return isOpenPopupMenu ? 'popup_opened popup_type_menu' : ''
    } else if (isOpenPopupSearch) {
      return isOpenPopupSearch ? 'popup_opened popup_type_search' : ''
    }
    return ''
  }

  return (
    <div className={`popup ${getTypePopup()}`}>
      <div className='popup__box'>
        <Logo
          classNameBox='logo_type_popup'
          classNameImg='logo__img_type_popup'
          classNameSlogan='logo__slogan_type_popup'
        />
        <button className='popup__button-close' onClick={onClosePopup} type="button" />
      </div>
      <div className='popup__box-nav'>
      {children}
      </div>
    </div>
  )
}

export default Popup;
