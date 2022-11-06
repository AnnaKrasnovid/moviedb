import React from 'react';
import Logo from '../Logo/Logo';
import useWindowWidth from '../../hooks/useWindowWidth';
import '../../assets/styles/components/Popup/Popup.css';

function Popup({ onClosePopup, isOpenPopupMenu, isOpenPopupSearch, children }) {
  const sizeWindow = useWindowWidth();

  React.useEffect(() => {
    if (sizeWindow > 768) {
      onClosePopup();
    }
  }, [onClosePopup, sizeWindow]);

  function getTypePopup() {
    if (isOpenPopupMenu) {
      return isOpenPopupMenu ? 'popup_opened popup_type_menu' : '';
    } else if (isOpenPopupSearch) {
      return isOpenPopupSearch ? 'popup_opened popup_type_search' : '';
    }
    return '';
  }

  return (
    <div className={`popup ${getTypePopup()}`} >
      <div className='popup__box'>
        <Logo
          classNameBox='logo_type_popup'
          classNameImg='logo__img_type_popup'
          classNameSlogan='logo__slogan_type_popup'
          onClosePopup={onClosePopup}
        />
        <button className='popup__button-close' onClick={onClosePopup} type="button" />
      </div>
      <div className='popup__box-nav'>
        {children}
      </div>
    </div>
  );
}

export default Popup;
