import React from 'react';
import Popup from '../Popup/Popup';
import Navigation from '../Navigation/Navigation';
import SocialButtons from '../SocialButtons/SocialButtons';

function PopupMenu({ isOpenPopupMenu, onClosePopup }) {
  return (
    <Popup isOpenPopupMenu={isOpenPopupMenu} onClosePopup={onClosePopup}>
      <Navigation classNamePopup={'navigation_type_popup'} onClosePopup={onClosePopup} />
      <SocialButtons classNameBlock='social-buttons_type_popup' />
    </Popup>
  )
}

export default PopupMenu;
