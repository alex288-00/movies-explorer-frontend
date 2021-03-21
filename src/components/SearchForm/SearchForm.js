import "./SearchForm.css"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
function SearchForm () {
    return (
        <section className="search">
            <form className="search__form">
                <div className="search__container">
                    <input className="search__input" type="text" placeholder="Фильм" required></input>
                    <button className="search__button" type="submit">Поиск</button>
                </div>
                
            </form>
        <FilterCheckbox />
        </section>
    )
}

export default SearchForm;