import "./Portfolio.css";
import linkImage from "../../images/strelka_link.svg";

function Portfolio() {
  return (
    <div className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            href="https://github.com/alex288-00/how-to-learn"
            target="blank"
          >
            Статичный сайт
          </a>
          <a
            className="portfolio__link"
            href="https://github.com/alex288-00/how-to-learn"
            target="blank"
          >
            <img alt="ссылка" src={linkImage}></img>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            href="https://github.com/alex288-00/russian-travel"
            target="blank"
          >
            Адаптивный сайт
          </a>
          <a
            className="portfolio__link"
            href="https://github.com/alex288-00/russian-travel"
            target="blank"
          >
            <img alt="ссылка" src={linkImage}></img>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            href="https://mesto.alex.students.nomoreparties.space/sign-in"
            target="blank"
          >
            Одностраничное приложение
          </a>
          <a
            className="portfolio__link"
            href="https://mesto.alex.students.nomoreparties.space/sign-in"
            target="blank"
          >
            <img alt="ссылка" src={linkImage}></img>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
