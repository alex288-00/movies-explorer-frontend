import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import Preloader from "../Preloader/Preloader";

function SavedMovies({
  movie,
  onSearchMovie,
  onShortFilmCheck,
  onFilterCheckBox,
  shortFilm,
  handleDeleteMovie,
  movieS,
  getSaveMovie,
  preloader,
  isLogged,
  errorMassage,
}) {

  useEffect(() => {
    getSaveMovie();
  }, []);

  useEffect(() => {
    onSearchMovie("");
  }, []);

  return (
    <div className="save-movies">
      <Header movieHeader={"header_movie"} isLogged={isLogged} />
      <SearchForm
        onSearchMovie={onSearchMovie}
        filterCheckBox={onShortFilmCheck}
      />
      {preloader ? (
        <Preloader />
      ) : (
        <MoviesCardList
          data={shortFilm ? onFilterCheckBox(movie) : movie}
          movieSave={true}
          handleDeleteMovie={handleDeleteMovie}
          errorMassage={errorMassage}
        />
      )}
      <Footer />
    </div>
  );
}

export default SavedMovies;
