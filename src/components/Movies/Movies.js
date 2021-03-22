import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import moviesList from "../../utils/moviesList";

function Movies() {
  return (
    <>
      <Header movieHeader={"header_movie"} isLogged={true} />
      <section className="movies">
        <SearchForm />
        <MoviesCardList data={moviesList} />
        <Footer />
      </section>
    </>
  );
}

export default Movies;
