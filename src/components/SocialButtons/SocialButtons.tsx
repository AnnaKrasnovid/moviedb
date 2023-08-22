import { Link } from 'react-router-dom';

import Facebook from '../../image/facebook.svg';
import Instagram from '../../image/instagram.svg';
import Twitter from '../../image/twitter.svg';
import './SocialButtons.scss';

type SocialButtonsTypes = 'footer' | 'menu';

interface SocialButtonsInt {
  type: SocialButtonsTypes
}

function SocialButtons({ type='footer' }:SocialButtonsInt) {
  return (
    <div className={`social-buttons social-buttons_type_${type}`}>
      <Link className='social-buttons__link' to='#' target='_blank'>
        <img className='social-buttons__icon' src={Facebook} alt='Facebook' />
      </Link>
      <Link className='social-buttons__link' to='#' target='_blank'>
        <img className='social-buttons__icon' src={Instagram} alt='Instagram' />
      </Link>
      <Link className='social-buttons__link' to='#' target='_blank'>
        <img className='social-buttons__icon' src={Twitter} alt='Twitter' />
      </Link>
    </div>
  );
}

export default SocialButtons;
