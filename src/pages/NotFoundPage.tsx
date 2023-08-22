import { Link, useNavigate } from 'react-router-dom';
 import ButtonText from '../UI/ButtonText/ButtonText';

import '../assets/styles/pages/NotFoundPage.scss';

function NotFoundPage() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <section className="not-found">
      <h2 className="not-found__error">404</h2>
      <p className="not-found__description">Страница не найдена</p>
      <ButtonText text='Назад' callback={goBack}/>
    </section>
  );
}

export default NotFoundPage;
