import "./Profile.css";
import Header from "../Header/Header";
import EditProfilePopup from "../EditProfilePopup/EditProfilePopup";

function Profile({ isOpen, onClose, onEditProgile }) {
  return (
    <>
      <Header movieHeader={"header_movie"} isLogged={true} />
      <div className="profile">
        <p className="profile__title">Привет, Алексей</p>
        <div className="profile__container profile__container_line">
          <p className="profile__text">Имя</p>
          <p className="profile__text">Алексей</p>
        </div>
        <div className="profile__container">
          <p className="profile__text">Почта</p>
          <p className="profile__text">alex@yandex.ru</p>
        </div>
        <button
          className="profile__button"
          type="button"
          onClick={onEditProgile}
        >
          Редактировать
        </button>
        <button className="profile__button profile__button_exit">
          Выйти из аккаунта
        </button>
      </div>
      <EditProfilePopup isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default Profile;
