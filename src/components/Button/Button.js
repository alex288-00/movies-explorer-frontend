function Button({ addMovie, deleteMovie, click }) {
  if (!click) {
    return (
      <button className="element__button" onClick={addMovie}>
        Сохранить
      </button>
    );
  }

  return (
    <button
      className="element__button element__button_selected"
      onClick={deleteMovie}
    >
      &#10004;
    </button>
  );
}

export default Button;
