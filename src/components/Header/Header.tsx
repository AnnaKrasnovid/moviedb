import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import ButtonBurger from '../../UI/ButtonBurger/ButtonBurger';
import './Header.scss';

interface HeaderInt {
  onOpenMenu: () => void,
  onClosePopup: () => void
}

function Header({ onOpenMenu, onClosePopup }: HeaderInt) {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Logo type='header' />
        <div className="header__box">
          <ButtonBurger callback={onOpenMenu} />
          <Navigation type='header' onClosePopup={onClosePopup} />
        </div>
      </div>
      <SearchForm />
    </header>
  );
}

export default Header;
