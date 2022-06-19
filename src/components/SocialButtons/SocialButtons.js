import './SocialButtons.css';
import Facebook from '../../image/facebook.svg';
import Instagram from '../../image/instagram.svg';
import Twitter from '../../image/twitter.svg';


function SocialButtons() {
  return (
    <div className='social-buttons'>
      <button className='social-buttons__link'>
        <img className='social-buttons__icon' src={Facebook} alt='' />
      </button>
      <button className='social-buttons__link'>
        <img className='social-buttons__icon' src={Instagram} alt='' />
      </button>
      <button className='social-buttons__link'>
        <img className='social-buttons__icon' src={Twitter} alt='' />
      </button>
    </div>
  )
}

export default SocialButtons;
