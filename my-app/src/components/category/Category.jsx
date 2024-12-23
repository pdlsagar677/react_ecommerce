/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Category = ({
  property1,
  className,
  image = "https://c.animaapp.com/cRCWnf9W/img/image-1-3@2x.png",
  text = "Fresh Fruit",
  divClassName,
}) => {
  return (
    <div className={`category ${className}`}>
      <img
        className={`image-12 property-1-4-${property1}`}
        alt="Image"
        src={
          property1 === "small"
            ? "https://c.animaapp.com/cRCWnf9W/img/image-1-1@2x.png"
            : image
        }
      />

      <div className={`fresh-fruit property-1-5-${property1} ${divClassName}`}>
        {text}
      </div>
    </div>
  );
};
