import { aboutUs } from '../../assets/appData/aboutUs';
import './AboutMovieDB.scss';

function AboutMovieDB() {
  return (
    <section className='about-us' aria-label='О сайте MovieDB'>
      <ul className='about-us__container'>
        {aboutUs.map((item, index) => {
          return (
            <li key={index} className='about-us__text'>{item}</li>
          );
        })}
      </ul>
    </section>
  );
}

export default AboutMovieDB;
