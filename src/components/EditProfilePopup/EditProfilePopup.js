import "./EditProfilePopup.css";

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <form className="popup__form" noValidate>
        <h2 className="popup__title popup__title_profile">
          Редактировать профиль
        </h2>
        <button type="button" className="popup__close" onClick={onClose}>
          &#10006;
        </button>
        <input
          className="popup__input popup__input_name"
          id="name-input"
          name="name"
          type="text"
          placeholder="Имя"
          minLength={2}
          maxLength={30}
          required
        />
        <span
          className="popup__error popup__error_visible"
          id="name-input-error"
        />
        <input
          className="popup__input popup__input_job"
          id="email-input"
          name="email"
          type="email"
          placeholder="E-mail"
          required
        />
        <span
          className="popup__error popup__error_visible"
          id="job-input-error"
        />
        <button type="submit" className="popup__button">
          Сохранить
        </button>
      </form>
    </div>
  );
}

export default EditProfilePopup;
