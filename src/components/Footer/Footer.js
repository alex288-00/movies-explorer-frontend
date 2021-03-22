import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__copyraight">&copy; 2020</p>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a
              className="footer__link"
              href="https://praktikum.yandex.ru/"
              target="blank"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__list-item">
            <a
              className="footer__link"
              href="https://github.com/alex288-00"
              target="blank"
            >
              Github
            </a>
          </li>
          <li className="footer__list-item">
            <a
              className="footer__link"
              href="https://ru-ru.facebook.com/"
              target="blank"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
