import "./FilterCheckbox.css";
function FilterCheckbox() {
  return (
    <form className="filter">
      <input className="filter__input" type="checkbox"></input>
      <label className="filter__label">Короткометражки</label>
    </form>
  );
}

export default FilterCheckbox;
