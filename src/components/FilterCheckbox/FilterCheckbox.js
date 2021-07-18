import "./FilterCheckbox.css";
function FilterCheckbox({ filterCheckBox }) {
  function handleChange(evt) {
    filterCheckBox(evt.target.checked);
  }

  return (
    <form className="filter">
      <input
        className="filter__input"
        type="checkbox"
        onChange={handleChange}
      ></input>
      <label className="filter__label">Короткометражки</label>
    </form>
  );
}

export default FilterCheckbox;
