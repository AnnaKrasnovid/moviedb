import './SocialButtons.css';
import Facebook from '../../image/facebook.svg';
import Instagram from '../../image/instagram.svg';
import Twitter from '../../image/twitter.svg';

function SocialButtons({classNameBlock}) {
  return (
    <div className={`social-buttons ${classNameBlock}`}>
      <button className='social-buttons__link'>
        <img className='social-buttons__icon' src={Facebook} alt='Facebook' />
      </button>
      <button className='social-buttons__link'>
        <img className='social-buttons__icon' src={Instagram} alt='Instagram' />
      </button>
      <button className='social-buttons__link'>
        <img className='social-buttons__icon' src={Twitter} alt='Twitter' />
      </button>
    </div>
  )
}

export default SocialButtons;
