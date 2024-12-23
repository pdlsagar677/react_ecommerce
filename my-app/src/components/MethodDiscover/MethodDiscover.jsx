/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const MethodDiscover = ({
  className,
  discoverClassName,
  stripeClassName,
  stripe = "https://c.animaapp.com/cRCWnf9W/img/stripe-5.svg",
  overlapGroupClassName,
  oClassName,
  o = "https://c.animaapp.com/cRCWnf9W/img/o-5.svg",
}) => {
  return (
    <div className={`method-discover ${className}`}>
      <div className={`discover ${discoverClassName}`}>
        <img
          className={`stripe ${stripeClassName}`}
          alt="Stripe"
          src={stripe}
        />

        <div className={`overlap-group ${overlapGroupClassName}`}>
          <img className={`o ${oClassName}`} alt="O" src={o} />
        </div>
      </div>
    </div>
  );
};
