import React from "react";
import PropTypes from "prop-types";

const Button = ({ id, onClick, value }) => {
  return <input type="button" id={id} onClick={onClick} value={value} />;
};

export default Button;

Button.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  value: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  value: "Click Here",
};
