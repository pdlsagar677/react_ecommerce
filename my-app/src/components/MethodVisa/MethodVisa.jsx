/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const MethodVisa = ({
  className,
  visaLogoClassName,
  visaLogo = "https://c.animaapp.com/cRCWnf9W/img/visa-logo-5.svg",
}) => {
  return (
    <div className={`method-visa ${className}`}>
      <img
        className={`visa-logo ${visaLogoClassName}`}
        alt="Visa logo"
        src={visaLogo}
      />
    </div>
  );
};
