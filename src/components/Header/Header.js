import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import './Header.scss';

function Header(props) {
  const { onOpenMenu, onOpenPopupSearch, isOpenPopupSearch, onClosePopup, onSearch } = props;

  return (
    <header className="header">
      <div className="header__wrapper">
        <Logo
          classNameBox='logo_type_header'
          classNameImg='logo__img_type_header'
        />
        <div className="header__box">
          {/* <button className='header__button-search' onClick={onOpenPopupSearch} type='button' /> */}
          <button className='button-burger' onClick={onOpenMenu} />
          <Navigation onClosePopup={onClosePopup} classNamePopup={'navigation_type_header'} />
        </div>
      </div>

      <SearchForm isOpenPopupSearch={isOpenPopupSearch} onClosePopup={onClosePopup} onSearch={onSearch} />
    </header>
  );
}

export default Header;
