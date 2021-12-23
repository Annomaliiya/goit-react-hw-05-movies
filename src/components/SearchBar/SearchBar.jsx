import { useState, memo } from "react";
import PropTypes from "prop-types";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [state, setState] = useState("");

  const handleChange = ({ target }) => {
    const { value } = target;
    setState(value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(state);
    setState("");
  };

  return (
    <form onSubmit={onFormSubmit} className={s.form}>
      <input
        className={s.input}
        onChange={handleChange}
        name="query"
        value={state}
        type="text"
        placeholder="Search movie..."
      />
      <button type="submit" className={s.btnSearch}>
        Go!
      </button>
    </form>
  );
};

export default memo(SearchBar);

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
