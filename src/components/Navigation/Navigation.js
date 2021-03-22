import "./Navigation.css";
import { Link } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useState } from "react";

function Navigation({ isLogged }) {
  const [openMenu, setOpenMenu] = useState(false);

  function handleBurgerClick() {
    setOpenMenu(true);
  }

  function closeMenuBurger() {
    setOpenMenu(false);
  }

  return isLogged ? (
    <>
      <button
        className="burger-button"
        type="button"
        onClick={handleBurgerClick}
      >
        &#9776;
      </button>
      <BurgerMenu isOpen={openMenu} onClose={closeMenuBurger} />
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__list-item">
            <Link to="/movies" className="navigation__link">
              Фильмы
            </Link>
          </li>
          <li className="navigation__list-item">
            <Link to="/saved-movies" className="navigation__link">
              Сохранённые фильмы
            </Link>
          </li>
          <li className="navigation__item-account">
            <Link
              to="/profile"
              className="navigation__link navigation__link_account"
            >
              Аккаунт
            </Link>
            <button className="navigation__button-account"></button>
          </li>
        </ul>
      </nav>
    </>
  ) : (
    <nav className="navigation__promo">
      <ul className="navigation__list">
        <li className="navigation__list-item">
          <Link to="/signup" className="navigation__link">
            Регистрация
          </Link>
        </li>
        <li className="navigation__list-item">
          <Link to="/signin" className="">
            <button className="navigation__button-signin">Войти</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
