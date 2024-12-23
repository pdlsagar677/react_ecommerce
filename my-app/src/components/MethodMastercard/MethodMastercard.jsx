/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const MethodMastercard = ({
  className,
  mastercardClassName,
  overlapGroupClassName,
  rightClassName,
  right = "https://c.animaapp.com/cRCWnf9W/img/right-5.svg",
  middleClassName,
  middle = "https://c.animaapp.com/cRCWnf9W/img/middle-5.svg",
}) => {
  return (
    <div className={`method-mastercard ${className}`}>
      <div className={`mastercard ${mastercardClassName}`}>
        <div className={`overlap-group-2 ${overlapGroupClassName}`}>
          <img className={`right ${rightClassName}`} alt="Right" src={right} />

          <img
            className={`middle ${middleClassName}`}
            alt="Middle"
            src={middle}
          />
        </div>
      </div>
    </div>
  );
};
