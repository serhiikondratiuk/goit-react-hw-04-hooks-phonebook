import PropTypes from "prop-types";
import s from "./Filter.module.css";

const Filter = ({ value, onChange }) => {
  return (
    <div className={s.wrapper}>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
        name="filter"
      />
      <label className={s.label}>Find contacts by name</label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
