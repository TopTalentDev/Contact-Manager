import React from "react";
import PropTypes from "prop-types";

const TextInputGroup = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  error
}) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      name={name}
      className={error ? "is-invalid form-control" : "form-control"}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    <div className="invalid-feedback">{error}</div>
  </div>
);

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

TextInputGroup.defaultProps = {
  type: "text"
};

export default TextInputGroup;
