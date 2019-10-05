import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, googleStyled, ...otherProps }) => (
  <button
    className={`${googleStyled ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
