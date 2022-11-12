import Facebook from '../../image/facebook.svg';
import Instagram from '../../image/instagram.svg';
import Twitter from '../../image/twitter.svg';
import './SocialButtons.scss';

function SocialButtons({ classNameBlock }) {
  return (
    <div className={`social-buttons ${classNameBlock}`}>
      <a className='social-buttons__link' href='#'>
        <img className='social-buttons__icon' src={Facebook} alt='Facebook' />
      </a>
      <a className='social-buttons__link' href='#'>
        <img className='social-buttons__icon' src={Instagram} alt='Instagram' />
      </a>
      <a className='social-buttons__link' href='#'>
        <img className='social-buttons__icon' src={Twitter} alt='Twitter' />
      </a>
    </div>
  );
}

export default SocialButtons;
