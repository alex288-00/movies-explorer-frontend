import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./EditProfilePopup.css";
import ValidationForm from "../ValidationForm/ValidationForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, errors, isValidity, handleChange } = ValidationForm();
  const [messageErr, setMassageErr] = useState("");
  const [buttonDisabled, setbuttonDisabled] = useState(false);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name: values.name || currentUser.name,
      email: values.email || currentUser.email,
    });
  }

  useEffect(() => {
    if (values.name === currentUser.name) {
      setMassageErr("Нет изменений для сохранения");
      setbuttonDisabled(true);
    } else {
      setMassageErr("");
      setbuttonDisabled(false);
    }
  }, [currentUser.name, values.name]);

  useEffect(() => {
    if (values.email === currentUser.email) {
      setMassageErr("Нет изменений для сохранения");
      setbuttonDisabled(true);
    } else {
      setMassageErr("");
      setbuttonDisabled(false);
    }
  }, [currentUser.email, values.email]);

  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <form className="popup__form" noValidate onSubmit={handleSubmit}>
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
          onChange={handleChange}
          defaultValue={currentUser.name}
        />
        <span className="popup__text-validation">{errors.name}</span>
        <input
          className="popup__input popup__input_job"
          id="email-input"
          name="email"
          type="email"
          placeholder="E-mail"
          required
          onChange={handleChange}
          defaultValue={currentUser.email}
        />
        <span className="popup__text-validation">{errors.email}</span>
        <span className="popup__text-validation popup__text-validation_data">
          {messageErr}
        </span>
        <button
          type="submit"
          className={`popup__button ${
            !isValidity || buttonDisabled ? "popup__button_disable" : ""
          }`}
          disabled={!isValidity || buttonDisabled}
        >
          Сохранить
        </button>
      </form>
    </div>
  );
}

export default EditProfilePopup;
