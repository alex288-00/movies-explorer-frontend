import "./Profile.css";
import Header from "../Header/Header";
import EditProfilePopup from "../EditProfilePopup/EditProfilePopup";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({
  isOpen,
  onClose,
  onEditProfile,
  onSignOut,
  onUpdateUser,
  isLogged,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      <Header movieHeader={"header_movie"} isLogged={isLogged} />
      <div className="profile">
        <p className="profile__title">Привет, {currentUser.name}</p>
        <div className="profile__container profile__container_line">
          <p className="profile__text">Имя</p>
          <p className="profile__text">{currentUser.name}</p>
        </div>
        <div className="profile__container">
          <p className="profile__text">Почта</p>
          <p className="profile__text">{currentUser.email}</p>
        </div>
        <button
          className="profile__button"
          type="button"
          onClick={onEditProfile}
        >
          Редактировать
        </button>
        <button
          className="profile__button profile__button_exit"
          type="button"
          onClick={onSignOut}
        >
          Выйти из аккаунта
        </button>
      </div>
      <EditProfilePopup
        isOpen={isOpen}
        onClose={onClose}
        onUpdateUser={onUpdateUser}
      />
    </>
  );
}

export default Profile;
