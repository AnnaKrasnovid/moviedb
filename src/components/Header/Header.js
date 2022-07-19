import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';

function Header({ onOpenMenu, onOpenPopupSearch, isOpenPopupSearch, onClosePopup, onSearch }) {

  return (
    <header className="header">
      <Logo
        classNameBox='logo_type_header'
        classNameImg='logo__img_type_header'
        classNameSlogan='logo__slogan_type_header'
      />
      <div className="header__box">
        <button className='header__button-search' onClick={onOpenPopupSearch} type='button' />
        <button className='button-burger' onClick={onOpenMenu} />
        <Navigation onClosePopup={onClosePopup} classNamePopup={'navigation_type_header'} />
      </div>
      <SearchForm isOpenPopupSearch={isOpenPopupSearch} onClosePopup={onClosePopup} onSearch={onSearch}/>
    </header>
  )
}

export default Header;
