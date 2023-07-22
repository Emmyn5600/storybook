// Button.jsx
import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

function Button({
  primary,
  secondary,
  tertiary,
  label,
  backgroundColor,
  onClick,
  disabled,
  size,
  customIcon,
}) {
  const style = {
    backgroundColor: primary
      ? backgroundColor
      : tertiary
      ? "#f9f9fb"
      : "transparent",
    color: tertiary
      ? "#000"
      : secondary
      ? "#0678F7"
      : primary
      ? "#fff"
      : "#000",
    border: secondary ? "1px solid #0678F7" : "none",
  };

  // Get the class name for the size based on the size prop
  const sizeClassName =
    size === "large"
      ? styles["btn-lg"]
      : size === "small"
      ? styles["btn-sm"]
      : "";

  return (
    <button
      onClick={onClick}
      style={style}
      className={`${styles.button} ${
        primary && styles.primary
      } ${sizeClassName} ${customIcon && styles["btn-icon"]}`}
      disabled={disabled}
    >
      {label}
      {customIcon && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 0C5.37259 0 0 5.37259 0 12C0 18.6274 5.37259 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37259 18.6274 0 12 0ZM14.4458 8.71541L12.9469 5.82555C12.5489 5.05819 11.4511 5.05819 11.0531 5.82555L9.55424 8.71541L6.37643 9.34112C5.56411 9.50107 5.23573 10.4852 5.78933 11.1009L8.04267 13.6069L7.6288 16.9606C7.52459 17.8051 8.40251 18.4257 9.16379 18.0457L12 16.6301L14.8362 18.0457C15.5975 18.4257 16.4754 17.8051 16.3712 16.9606L15.9573 13.6069L18.2107 11.1009C18.7643 10.4852 18.4359 9.50107 17.6236 9.34112L14.4458 8.71541Z"
            fill="white"
          />
        </svg>
      )}
    </button>
  );
}

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["large", "medium", "small"]),
  customIcon: PropTypes.bool,
};

export default Button;
