/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Apple13 } from "../../icons/Apple13";
import "./style.css";

export const Menu = ({
  property1,
  apple13Color = "#1A1A1A",
  divClassName,
  icon = <Apple13 className="apple" color={apple13Color} />,
  text = "Fresh Fruit",
  className,
}) => {
  return (
    <div className={`menu property-1-4-${property1} ${className}`}>
      {icon}
      <div className={`fresh-fruit-2 ${divClassName}`}>{text}</div>
    </div>
  );
};
