import Button from "../Button/Button";
import { useEffect, useState } from "react";
import "./MoviesCard.css";

function MoviesCard({ movie, movieSave, handleAddMovie, handleDeleteMovie }) {
  const [saveClickButton, setSaveClickButton] = useState(false);
  // Массив сохраненных фильмов
  const savedList = JSON.parse(localStorage.getItem("saveMovie"));

  // Определяем сохраненный фильм с остальными фильмами на странице
  const clicked = savedList.some((item) => {
    return item.id === movie.id;
  });
  
  useEffect(
    () => (clicked ? setSaveClickButton(true) : setSaveClickButton(false)),
    [clicked]
  );

  function handleSubmitAddMovie() {
    handleAddMovie(movie);
    setSaveClickButton(true);
  }

  function handleSubmitDeleteMovie() {
    handleDeleteMovie(movie);
  }

  function handleSubmitDeleteSaveMovie() {
    handleDeleteMovie(movie);
    setSaveClickButton(false);
  }

  return (
    <>
      <div className="element">
        <div className="element__title-min">
          <p className="element__title">{movie.nameRU}</p>
          <p className="element__min">{`${movie.duration} минут`}</p>
        </div>
        <a className="" href={movie.trailer} target="blank">
          <img
            className="element__img"
            src={movie.image}
            alt={movie.nameRU}
          ></img>
        </a>
        {movieSave ? (
          <button
            className="element__button element__button_delete"
            onClick={handleSubmitDeleteMovie}
          >
            &#10006;
          </button>
        ) : (
          <Button
            addMovie={handleSubmitAddMovie}
            deleteMovie={handleSubmitDeleteSaveMovie}
            click={saveClickButton}
            movie={movie}
          />
        )}
      </div>
    </>
  );
}

export default MoviesCard;
