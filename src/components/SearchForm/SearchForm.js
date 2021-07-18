import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useState } from "react";
function SearchForm({ onSearchMovie, filterCheckBox }) {
  const [data, setData] = useState("");

  function handleChange(evt) {
    setData(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSearchMovie(data);
  }

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <div className="search__container">
          <input
            className="search__input"
            type="text"
            placeholder="Фильм"
            required
            onChange={handleChange}
          ></input>
          <button
            className="search__button"
            type="submit"
            onSubmit={handleSubmit}
          >
            Поиск
          </button>
        </div>
      </form>
      <FilterCheckbox filterCheckBox={filterCheckBox} />
    </section>
  );
}

export default SearchForm;
