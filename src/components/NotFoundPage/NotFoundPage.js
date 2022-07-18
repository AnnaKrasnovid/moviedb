import './NotFoundPage.css';
import { Link, useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const history = useNavigate();

  function handleGoBack() {
    history.goBack();
  }

  return (
    <section className="not-found">
      <h2 className="not-found__error">404</h2>
      <p className="not-found__description">Страница не найдена</p>
      <Link to="/" className="not-found__go-back" onClick={handleGoBack}>Назад</Link>
    </section>
  )
}

export default NotFoundPage;
