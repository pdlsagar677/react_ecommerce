/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const NavLinks = ({
  property1,
  className,
  divClassName,
  text = "Home",
}) => {
  return (
    <div className={`nav-links property-1-7-${property1} ${className}`}>
      <div className={`home ${divClassName}`}>{text}</div>
    </div>
  );
};
