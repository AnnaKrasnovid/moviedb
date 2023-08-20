import {Link} from 'react-router-dom';

import Logo from '../Logo/Logo';
import SocialButtons from '../SocialButtons/SocialButtons';
import { footerText } from '../../assets/appData/footerText';

import './Footer.scss';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <Logo
          classNameBox='logo_type_footer'
          classNameImg='logo__img_type_footer'
          classNameSlogan='logo__slogan_type_footer'
          onClosePopup={()=> console.log('close')}
        />
        <div className='footer__box-about'>
          <h4 className='footer__title'>О нас</h4>
          <p className='footer__about'>
            {footerText.text1}
          </p>
          <p className='footer__about'>
            {footerText.text2}
          </p>
        </div>
      </div>
      <div className='footer__box-info'>
        <p className='footer__info'>Все права защищены MovieDB.ru 2022</p>
        <SocialButtons
          classNameBlock='social-buttons_type_footer'
        />
        <Link className='footer__info footer__info_type_link' to='#' target='_blank'>Политика конфиденциальности</Link>
      </div>
    </footer>
  );
}

export default Footer;
