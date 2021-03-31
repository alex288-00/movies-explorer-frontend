import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { useEffect } from "react";

function Movies({
  onSearchMovie,
  onShortFilmCheck,
  onFilterCheckBox,
  shortFilm,
  movie,
  errorMassage,
  preloader,
  handleAddMovie,
  handleDeleteMovie,
  getSaveMovie,
  isLogged,
}) {
  useEffect(() => {
    getSaveMovie();
  }, []);

  return (
    <>
      <Header movieHeader={"header_movie"} isLogged={isLogged} />
      <section className="movies">
        <SearchForm
          onSearchMovie={onSearchMovie}
          filterCheckBox={onShortFilmCheck}
        />
        <MoviesCardList
          data={shortFilm ? onFilterCheckBox(movie) : movie}
          errorMassage={errorMassage}
          preloader={preloader}
          handleAddMovie={handleAddMovie}
          handleDeleteMovie={handleDeleteMovie}
        />
        <Footer />
      </section>
    </>
  );
}

export default Movies;
