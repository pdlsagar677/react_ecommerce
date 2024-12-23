/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Bannar1 = ({ className }) => {
  return (
    <div className={`bannar-1 ${className}`}>
      <div className="frame-9">
        <div className="info-4">
          <div className="fresh-healthy">
            Fresh &amp; Healthy
            <br />
            Organic Food
          </div>

          <div className="description">
            <div className="rectangle" />

            <p className="sale-up-to-off">
              <span className="text-wrapper-65">
                Sale Up to
                <br />
              </span>

              <span className="text-wrapper-66">48%</span>

              <span className="text-wrapper-65"> off</span>
            </p>
          </div>
        </div>

        <button className="button-12">
          <div className="normal-2">Shop now</div>

          <img
            className="group-11"
            alt="Group"
            src="https://c.animaapp.com/cRCWnf9W/img/group-21@2x.png"
          />
        </button>
      </div>

      <div className="tracker">
        <div className="ellipse" />

        <div className="ellipse-2" />

        <div className="ellipse-2" />
      </div>
    </div>
  );
};
