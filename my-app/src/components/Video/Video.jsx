/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Video = ({ className }) => {
  return (
    <div className={`video ${className}`}>
      <p className="text-wrapper-48">
        We’re the Best Organic Farm in the World
      </p>

      <div className="play">
        <div className="group-4">
          <div className="group-wrapper">
            <img
              className="group-5"
              alt="Group"
              src="https://c.animaapp.com/cRCWnf9W/img/group-15@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
