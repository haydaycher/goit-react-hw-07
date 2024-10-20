import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { setStatusFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleContactsFilter = (valueInput) => {
    dispatch(setStatusFilter(valueInput));
  };

  return (
    <div className={css.wrapperSearch}>
      <label className={css.labelSearch} htmlFor="filter">
        Find contacts by name:
      </label>
      <input
        className={css.inputSearch}
        type="text"
        onChange={(event) => handleContactsFilter(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
