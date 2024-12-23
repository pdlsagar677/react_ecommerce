/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Logo = ({
  className,
  plant = "https://c.animaapp.com/cRCWnf9W/img/plant-1-4.svg",
  divClassName,
  plantClassName,
}) => {
  return (
    <div className={`logo ${className}`}>
      <img className={`plant ${plantClassName}`} alt="Plant" src={plant} />

      <div className={`text-wrapper ${divClassName}`}>Ecobazar</div>
    </div>
  );
};
