import "./search-box.styles.css";

const SearchBox = ({ onChangeHandler, placeholder, className }) => (
  <input
    onChange={onChangeHandler}
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
  />
);

export default SearchBox;
