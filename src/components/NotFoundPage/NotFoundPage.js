import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <div className="not-found">
      <p className="not-found__title">404</p>
      <p className="not-found__subtitle">Страница не найдена</p>
      <Link to="/" className="not-found__link">
        Назад
      </Link>
    </div>
  );
}

export default NotFoundPage;
