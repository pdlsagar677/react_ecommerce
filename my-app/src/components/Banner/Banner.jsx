// src/components/Bannar.jsx
import React from "react";
import "./style.css";

// This is already a named export for the Bannar component
export const Bannar = ({
  className,
  infoClassName,
  divClassName,
  text = "Summer Fruit Collection",
  startingAtClassName,
  spanClassName,
  text1 = "Starting at ",
  spanClassNameOverride,
  text2 = "$23.99",
}) => {
  return (
    <div className={`bannar ${className}`}>
      <div className={`info-3 ${infoClassName}`}>
        <div className="frame-7">
          <div className={`summer-fruit ${divClassName}`}>{text}</div>

          <p className={`starting-at ${startingAtClassName}`}>
            <span className={`span ${spanClassName}`}>{text1}</span>

            <span className={`text-wrapper-50 ${spanClassNameOverride}`}>
              {text2}
            </span>
          </p>
        </div>

        <button className="button-8">
          <div className="text-wrapper-51">Shop Now</div>

          <img
            className="group-7"
            alt="Group"
            src="https://c.animaapp.com/cRCWnf9W/img/group-20@2x.png"
          />
        </button>
      </div>
    </div>
  );
};
