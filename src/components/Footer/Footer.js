import './Footer.css';
import LogoFooter from '../LogoFooter/LogoFooter';
import SocialButtonsFooter from '../SocialButtonsFooter/SocialButtonsFooter';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <LogoFooter />
        <div className='footer__box-about'>
          <h4 className='footer__title'>О нас</h4>
          <p className='footer__about'>
            Зная всё о кино, хочется поделиться этим с другими.
            Делитесь фильмами, трейлерами, персонами и новостями в социальных сетях,
            присваивайте рейтинги фильмам и обсуждайте их с друзьями и подписчиками!
          </p>
          <p className='footer__about'>
            Интересные фильмы, ближайшие кинотеатры и любимых актеров можно добавлять
            в «Избранное». Система покажет все связанные с ними новости и новые трейлеры,
            подскажет, когда можно купить билет в кино на интересующую премьеру.
            Присоединяйтесь!
          </p>
        </div>
      </div>
      <div className='footer__box-info'>
        <p className='footer__info'>Все права защищены MovieDB.ru 2022</p>
        <SocialButtonsFooter />
        <p className='footer__info footer__info_type_link'>Политика конфиденциальности</p>
      </div>

    </footer>
  )
}

export default Footer;
