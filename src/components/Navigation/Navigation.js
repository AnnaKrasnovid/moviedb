import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <>
    <button className="button-burger" />
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li className='navigation__box-link'>
          <Link to='/' className='navigation__link'>Главная</Link>
        </li>
        {/*<li className='navigation__box-link'>
          <Link to='/genre' className='navigation__link'>По жанру</Link>
        </li>
        <li className='navigation__box-link'>
          <Link to='/movies' className='navigation__link'>Фильмы</Link>
        </li>
        <li className='navigation__box-link'>
          <Link to='/serials' className='navigation__link'>Сериалы</Link>
        </li>
        <li className='navigation__box-link'>
          <Link to='/cartoons' className='navigation__link'>Мультфильмы</Link>
        </li>
        <li className='navigation__box-link'>
          <Link to='/anime' className='navigation__link'>Аниме</Link>
  </li>*/}
      </ul>
    </nav>
   </>
  )
}

export default Navigation;
