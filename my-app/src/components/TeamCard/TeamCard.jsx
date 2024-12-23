/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { MediaFacebookStatusFalse } from "../../icons/MediaFacebookStatusFalse";
import { SocialMedia2 } from "../../icons/SocialMedia2";
import { SocialMedia27 } from "../../icons/SocialMedia27";
import { SocialMedia29 } from "../../icons/SocialMedia29";
import "./style.css";

export const TeamCard = ({
  property1,
  className,
  text = "Jenny Wilson",
  text1 = "Ceo &amp; Founder",
  imageClassName,
  image = "https://c.animaapp.com/cRCWnf9W/img/image-6@2x.png",
}) => {
  return (
    <div className={`team-card ${property1} ${className}`}>
      <div className="image-8">
        <div className="jenny-wilson">{text}</div>

        <div className="ceo-founder">{text1}</div>
      </div>

      {property1 === "default" && (
        <img className={`image-9 ${imageClassName}`} alt="Image" src={image} />
      )}

      {property1 === "hover" && (
        <div className={`frame-wrapper ${imageClassName}`}>
          <div className="frame-5">
            <MediaFacebookStatusFalse
              className="social-media-2"
              color="white"
            />
            <SocialMedia29 className="social-media-2" />
            <SocialMedia2 className="social-media-2" color="white" />
            <SocialMedia27 className="social-media-2" color="white" />
          </div>
        </div>
      )}
    </div>
  );
};
