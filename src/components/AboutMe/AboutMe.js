import "./AboutMe.css";
import myPhoto from "../../images/my_photo-min.jpg";
import Portfolio from "../Portfolio/Portfolio";
function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <img className="about-me__photo" alt="Моё фото" src={myPhoto}></img>
      <h3 className="about-me__info-title">Алексей</h3>
      <p className="about-me__info-subtitle">Веб-разработчик, 31 год</p>
      <p className="about-me__info-text">
        Я родился в северном городе Архангельск, сейчас живу в Санкт-Петербурге.
        Увлекаюсь техногиями и спортом. Сейчас учусь в Яндекс.Практикуме и очень
        сильно хочу в дальнейшем кодить, работать в этом напраялении и
        развиваться.
      </p>
      <ul className="about-me__social">
        <li className="about-me__social-item">
          <a
            className="about-me__social-link"
            href="https://ru-ru.facebook.com/"
            target="blank"
          >
            Facebook
          </a>
        </li>
        <li className="about-me__social-item">
          <a
            className="about-me__social-link"
            href="https://github.com/alex288-00"
            target="blank"
          >
            Github
          </a>
        </li>
      </ul>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
