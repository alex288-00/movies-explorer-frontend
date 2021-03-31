import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import ValidationForm from "../ValidationForm/ValidationForm";

function Login({ onLogin }) {
  const { values, errors, isValidity, handleChange } = ValidationForm();

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(values.email, values.password);
  }

  return (
    <div className="login">
      <form className="form" onSubmit={handleSubmit} noValidate>
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
          onChange={handleChange}
          value={values.email}
        />
        <span className="form__text-validation">{errors.email}</span>
        <label className="form__label">Пароль</label>
        <input
          className="form__input"
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          minLength="5"
          required
          onChange={handleChange}
          value={values.password}
        />
        <span className="form__text-validation">{errors.password}</span>
        <button
          type="submit"
          className={`form__button ${
            !isValidity ? "form__button_disabled" : ""
          }`}
          disabled={!isValidity}
        >
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
