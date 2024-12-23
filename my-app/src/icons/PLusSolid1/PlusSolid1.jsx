/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const PlusSolid1 = ({ color = "#212121", className }) => {
  return (
    <svg
      className={`plus-solid-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M11.25 3.75V11.25H3.75V12.75H11.25V20.25H12.75V12.75H20.25V11.25H12.75V3.75H11.25Z"
        fill={color}
      />
    </svg>
  );
};
