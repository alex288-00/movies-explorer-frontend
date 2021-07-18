import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import { useEffect, useState } from "react";
function MoviesCardList({
  data,
  movieSave,
  errorMassage,
  preloader,
  handleAddMovie,
  handleDeleteMovie,
}) {
  const [countMovie, setCountMovie] = useState(12);
  const [countAdd, setCountAdd] = useState(3);
  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
      if (windowWidth > 769) {
        setCountMovie(12);
        setCountAdd(3);
      } else if (windowWidth > 479 && windowWidth <= 768) {
        setCountMovie(8);
        setCountAdd(2);
      } else {
        setCountMovie(5);
        setCountAdd(2);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  function handleMoreCards() {
    setCountMovie(countMovie + countAdd);
  }

  return (
    <section className="elements">
      {preloader ? (
        <Preloader />
      ) : (
        <>
          <div className="elements__card-list">
            {data.slice(0, countMovie).map((movie) => {
              return (
                <MoviesCard
                  key={movie.id}
                  movie={movie}
                  movieSave={movieSave}
                  handleAddMovie={handleAddMovie}
                  handleDeleteMovie={handleDeleteMovie}
                />
              );
            })}
          </div>
          <p className="elements__not-found">
            {!preloader ? errorMassage : ""}
          </p>
          <div className="elements__another">
            {12 < data.length && !movieSave ? (
              <button
                className="elements__another-button"
                type="submit"
                onClick={handleMoreCards}
              >
                Ещё
              </button>
            ) : null}
          </div>
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
