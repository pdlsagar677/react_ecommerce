/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Property1Hover2 = ({
  color = "#2C742F",
  stroke = "white",
  className,
}) => {
  return (
    <svg
      className={`property-1-hover-2 ${className}`}
      fill="none"
      height="40"
      viewBox="0 0 40 40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="circle" cx="20" cy="20" fill={color} r="20" />

      <path
        className="path"
        d="M16.6667 18.3333H14.1667L12.5 27.5H27.5L25.8333 18.3333H23.3333M16.6667 18.3333V15.8333C16.6667 13.9924 18.1591 12.5 20 12.5V12.5C21.8409 12.5 23.3333 13.9924 23.3333 15.8333V18.3333M16.6667 18.3333H23.3333M16.6667 18.3333V20.8333M23.3333 18.3333V20.8333"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.3"
      />
    </svg>
  );
};
