import React from 'react';
import Popup from '../Popup/Popup';
import Navigation from '../Navigation/Navigation';
import SocialButtons from '../SocialButtons/SocialButtons';

function PopupMenu({ isOpenPopup, onClosePopup }) {
  return (
    <Popup isOpenPopup={isOpenPopup} onClosePopup={onClosePopup}>
      <Navigation /*onOpenMenu={onOpenMenu}*/ isOpenPopup={isOpenPopup} onClosePopup={onClosePopup} classNamePopup={'navigation_type_popup'}/>
      <SocialButtons classNameBlock='social-buttons_type_popup'/>
    </Popup>
  )
}

export default PopupMenu;
