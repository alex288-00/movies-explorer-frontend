import "./MoviesCard.css";

function MoviesCard({ movie, movieSave, button }) {
  return (
    <>
      <div className="element">
        <div className="element__title-min">
          <p className="element__title">{movie.nameRU}</p>
          <p className="element__min">{movie.duration}</p>
        </div>

        <img
          className="element__img"
          src={movie.thumbnail}
          alt="Картинка"
        ></img>
        {movieSave ? (
          <button className="element__button element__button_delete">&#10006;</button>
        ) : (
          button
        )}
      </div>
    </>
  );
}

export default MoviesCard;
