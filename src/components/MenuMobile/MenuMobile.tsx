import React, { useEffect } from 'react';

import Navigation from '../Navigation/Navigation';
import SocialButtons from '../SocialButtons/SocialButtons';
import ScrollBar from '../../UI/ScrollBar/ScrollBar';
import Logo from '../Logo/Logo';

import useWindowWidth from '../../hooks/useWindowWidth';
import { hideScroll } from '../../tools/utils';

import './MenuMobile.scss';

interface MenuMobile {
  onClosePopup: () => void,
  isOpenPopupMenu: boolean,
}

function MenuMobile({ onClosePopup, isOpenPopupMenu }:MenuMobile) {
  const sizeWindow = useWindowWidth();

  useEffect(() => {
    if (sizeWindow > 768) {
      onClosePopup();
    }
  }, [onClosePopup, sizeWindow]);

  useEffect(() => {
    hideScroll(isOpenPopupMenu);
  }, [isOpenPopupMenu]);

  return (
    <div className={`menu-mobile  ${isOpenPopupMenu ? 'menu-mobile_opened' : ''}`} >
      <div className='menu-mobile__box'>
        <Logo type='menu'/>
        <button className='menu-mobile__button-close' onClick={onClosePopup} type="button" />
      </div>
      <div className='menu-mobile__box-nav'>
        <ScrollBar>
          <Navigation type='menu' onClosePopup={onClosePopup} />
        </ScrollBar>
        <SocialButtons type='menu' />
      </div>
    </div>
  );
}

export default MenuMobile;
