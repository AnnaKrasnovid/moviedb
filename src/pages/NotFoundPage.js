import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/pages/NotFoundPage.css';

function NotFoundPage() {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <section className="not-found">
      <h2 className="not-found__error">404</h2>
      <p className="not-found__description">Страница не найдена</p>
      <Link to="/" className="not-found__go-back hover" onClick={handleGoBack}>Назад</Link>
    </section>
  );
}

export default NotFoundPage;
