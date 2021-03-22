import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <form className="form popup__form_login-register">
        <Link to="/">
          <img src={logo} alt="Логотип"></img>
        </Link>
        <h2 className="form__title popup__title_login-register">
          Добро пожаловать!
        </h2>
        <label className="form__label">Имя</label>
        <input
          className="form__input popup__input_login-register"
          id="name"
          name="name"
          type="text"
          placeholder="Имя"
          required
        />
        <label className="form__label">E-mail</label>
        <input
          className="form__input popup__input_login-register"
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          required
        />
        <label className="form__label">Пароль</label>
        <input
          className="form__input popup__input_login-register"
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          required
        />

        <button
          type="submit"
          className="form__button popup__button_login-register"
        >
          Зарегистрироваться
        </button>
        <div className="form__info">
          <p className="form__info-text">Уже зарегистрированы?</p>
          <Link to="signin" className="form__info-text form__info-text_link">
            Войти
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
