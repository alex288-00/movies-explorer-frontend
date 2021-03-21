import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
function MoviesCardList({ data, movieSave }) {
  return (
    <section className="elements">
      <div className="elements__card-list">
        {data.map((movie) => {
          return (
            <MoviesCard
              key={movie.movieId}
              movie={movie}
              movieSave={movieSave}
              button={
                !movie.selected ? (
                  <button className="element__button">Сохранить</button>
                ) : (
                  <button className="element__button element__button_selected">
                    &#10004;
                  </button>
                )
              }
            />
          );
        })}
      </div>
      <div className="elements__another">
        {!movieSave ? (
          <button className="elements__another-button">Ещё</button>
        ) : null}
      </div>
    </section>
  );
}

export default MoviesCardList;
