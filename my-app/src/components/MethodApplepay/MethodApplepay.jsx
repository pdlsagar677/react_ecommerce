/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const MethodApplepay = ({
  className,
  applePayClassName,
  applePay = "https://c.animaapp.com/cRCWnf9W/img/applepay-5.svg",
}) => {
  return (
    <div className={`method-applepay ${className}`}>
      <img
        className={`apple-pay ${applePayClassName}`}
        alt="Apple pay"
        src={applePay}
      />
    </div>
  );
};
