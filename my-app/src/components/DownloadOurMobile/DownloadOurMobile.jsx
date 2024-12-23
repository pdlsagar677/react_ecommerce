/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const DownloadOurMobile = ({
  className,
  appStoreClassName,
  appleNegative = "https://c.animaapp.com/cRCWnf9W/img/apple---negative-1-3.svg",
  divClassName,
  divClassNameOverride,
  googlePlayClassName,
  iconGooglePlay = "https://c.animaapp.com/cRCWnf9W/img/icon-google-play-1-3.svg",
  divClassName1,
  divClassName2,
}) => {
  return (
    <div className={`download-our-mobile ${className}`}>
      <div className={`div ${appStoreClassName}`}>
        <img
          className="apple-negative"
          alt="Apple negative"
          src={appleNegative}
        />

        <div className="frame">
          <div className={`text-wrapper-2 ${divClassName}`}>
            Download on the
          </div>

          <div className={`text-wrapper-3 ${divClassNameOverride}`}>
            App Store
          </div>
        </div>
      </div>

      <div className={`div ${googlePlayClassName}`}>
        <img
          className="icon-google-play"
          alt="Icon google play"
          src={iconGooglePlay}
        />

        <div className="frame">
          <div className={`text-wrapper-2 ${divClassName1}`}>
            Download on the
          </div>

          <div className={`text-wrapper-3 ${divClassName2}`}>Google play</div>
        </div>
      </div>
    </div>
  );
};
