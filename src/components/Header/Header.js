import { Link } from "react-router-dom";
import "./Header.css";
import logoImage from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

function Header({ isLogged, movieHeader }) {
  return (
    <header className={`header ${movieHeader}`}>
      <Link to="/">
        <img className="header__logo" src={logoImage} alt="Логотип"></img>
      </Link>
      <div className="header__container">
        <Navigation isLogged={isLogged} />
      </div>
    </header>
  );
}

export default Header;
