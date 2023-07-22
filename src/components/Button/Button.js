// Button.jsx
import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

function Button({ primary, label, backgroundColor, onClick }) {
  const style = {
    backgroundColor: primary ? backgroundColor : "transparent",
  };

  return (
    <button onClick={onClick} style={style} className={`${styles.button} ${primary && styles.primary}`}>
      {label}
    </button>
  );
}

Button.propTypes = {
  primary: PropTypes.bool,
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
