// Button.jsx
import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

function Button({ primary, label, backgroundColor, onClick, disabled, size }) {
  const style = {
    backgroundColor: primary ? backgroundColor : "transparent",
  };

  // Get the class name for the size based on the size prop
  const sizeClassName =
    size === "large" ? styles["btn-lg"] : size === "small" ? styles["btn-sm"] : "";

  return (
    <button
      onClick={onClick}
      style={style}
      className={`${styles.button} ${
        primary && styles.primary
      } ${sizeClassName}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  primary: PropTypes.bool,
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["large", "medium", "small"]),
};

export default Button;
