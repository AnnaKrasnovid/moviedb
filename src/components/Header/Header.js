import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';

function Header() {
  return (
    <header className="header">
      <Logo />
      <Navigation />
      <SearchForm />
    </header>
  )
}

export default Header;
