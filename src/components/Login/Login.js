import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <form className="form">
        <Link to="/">
          <img src={logo} alt="Логотип"></img>
        </Link>
        <h2 className="form__title">Рады видеть!</h2>
        <label className="form__label">E-mail</label>
        <input
          className="form__input"
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          required
        />
        <label className="form__label">Пароль</label>
        <input
          className="form__input"
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          required
        />
        <button type="submit" className="form__button">
          Войти
        </button>
        <div className="form__info">
          <p className="form__info-text">Ещё не зарегистрированы?</p>
          <Link to="signup" className="form__info-text form__info-text_link">
            Регистрация
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
