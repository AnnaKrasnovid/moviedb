import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';

function Header({ onOpenMenu, onOpenPopupSearch, isOpenPopupMenu, onClosePopup }) {

  return (
    <header className="header">
      <Logo
      classNameBox='logo_type_header'
      classNameImg='logo__img_type_header'
      classNameSlogan='logo__slogan_type_header'
    />
      <div className="header__box">
        <button className='header__button-search' onClick={onOpenPopupSearch} type='button'/>
        <button className='button-burger' onClick={onOpenMenu}/>
        <Navigation isOpenPopupMenu={isOpenPopupMenu}/>
      </div>
      <SearchForm />
    </header>
  )
}

export default Header;
