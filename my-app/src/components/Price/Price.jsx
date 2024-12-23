/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Price = ({
  property1,
  className,
  divClassName,
  divClassNameOverride,
  divClassName1,
}) => {
  return (
    <div className={`price property-1-${property1} ${className}`}>
      <div
        className={`text-wrapper-49 ${["BIG-sale", "sale", "small-sale"].includes(property1) ? divClassNameOverride : (["BIG", "price", "small"].includes(property1)) ? divClassName : undefined}`}
      >
        $14.99
      </div>

      {["BIG-sale", "sale", "small-sale"].includes(property1) && (
        <div className={`element-2 ${divClassName1}`}>
          {["BIG-sale", "sale"].includes(property1) && <span>$20.99</span>}

          {property1 === "small-sale" && <span>$14.99</span>}
        </div>
      )}
    </div>
  );
};
