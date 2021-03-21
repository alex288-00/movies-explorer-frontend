import "./BurgerMenu.css";
import { NavLink } from "react-router-dom";

function BurgerMenu({ isOpen, onClose }) {
  return (
    <nav
      className={`burger-navigation ${isOpen ? "burger-navigation_open" : ""}`}
    >
      <button
        className="burger-navigation__close"
        onClick={onClose}
        type="button"
      >
        &#10006;
      </button>

      <div className="burger-navigation__container">
        <ul className="burger-navigation__list">
          <li className="burger-navigation__list-item">
            <NavLink
              exact
              to="/"
              className="burger-navigation__link"
              activeClassName="burger-navigation__link_active"
            >
              Главная
            </NavLink>
          </li>

          <li className="burger-navigation__list-item">
            <NavLink
              to="/movies"
              className="burger-navigation__link"
              activeClassName="burger-navigation__link_active"
            >
              Фильмы
            </NavLink>
          </li>

          <li className="burger-navigation__list-item">
            <NavLink
              to="/saved-movies"
              className="burger-navigation__link"
              activeClassName="burger-navigation__link_active"
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>

        <div className="burger-navigation__profile">
          <NavLink
            to="/profile"
            className="burger-navigation__link"
            activeClassName="burger-navigation__link_active"
          >
            Аккаунт
          </NavLink>
          <button className="burger-navigation__button-account"></button>
        </div>
      </div>
    </nav>
  );
}

export default BurgerMenu;
