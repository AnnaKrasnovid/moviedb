import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import ButtonBurger from '../../UI/ButtonBurger/ButtonBurger';
import './Header.scss';

function Header(props) {
  const { onOpenMenu, onClosePopup } = props;

  return (
    <header className="header">
      <div className="header__wrapper">
        <Logo
          classNameBox='logo_type_header'
          classNameImg='logo__img_type_header'
        />
        <div className="header__box">
          <ButtonBurger callback={onOpenMenu} />
          <Navigation  />
        </div>
      </div>

      <SearchForm onClosePopup={onClosePopup} />
    </header>
  );
}

export default Header;
