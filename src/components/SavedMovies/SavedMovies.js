import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import moviesListSave from "../../utils/movieListSave";
function SavedMovies() {
  return (
    <div className="save-movies">
      <Header movieHeader={"header_movie"} isLogged={true} />
      <SearchForm />
      <MoviesCardList data={moviesListSave} movieSave={true} />
      <Footer />
    </div>
  );
}

export default SavedMovies;
