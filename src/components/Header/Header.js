import { Link } from 'react-router-dom';
import './Header.css';
import LogoHeader from '../LogoHeader/LogoHeader';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';

function Header() {
  return (
    <header className="header">
      <LogoHeader />
      <Navigation />
      <SearchForm />
    </header>
  )
}

export default Header;
