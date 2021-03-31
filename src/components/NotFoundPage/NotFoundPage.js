import { useHistory } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  const history = useHistory();
  return (
    <div className="not-found">
      <p className="not-found__title">404</p>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button className="not-found__button" onClick={() => history.goBack()}>
        Назад
      </button>
    </div>
  );
}

export default NotFoundPage;
