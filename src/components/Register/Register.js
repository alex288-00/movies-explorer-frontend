import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import ValidationForm from "../ValidationForm/ValidationForm";

function Register({ onRegister }) {
  const { values, errors, isValidity, handleChange } = ValidationForm();

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(values.name, values.email, values.password);
  }

  return (
    <div className="register">
      <form
        className="form popup__form_login-register"
        onSubmit={handleSubmit}
        noValidate
      >
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
          minLength="2"
          maxLength="30"
          required
          onChange={handleChange}
          value={values.name}
        />
        <span className="form__text-validation">{errors.name}</span>
        <label className="form__label">E-mail</label>
        <input
          className="form__input popup__input_login-register"
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
          className="form__input popup__input_login-register"
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
