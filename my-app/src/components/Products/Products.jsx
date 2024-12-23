/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Property1Default } from "../../icons/Property1Default";
import { Property1Hover2 } from "../../icons/Property1Hover2";
import { QuickView1 } from "../../icons/QuickView1";
import { Price } from "../Price";
import "./style.css";

export const Products = ({
  property1,
  className,
  imageClassName,
  image = "https://c.animaapp.com/cRCWnf9W/img/image-4@2x.png",
  text = "Green Apple",
  rating = "https://c.animaapp.com/cRCWnf9W/img/rating-1.svg",
  img = "https://c.animaapp.com/cRCWnf9W/img/rating-2.svg",
}) => {
  return (
    <div className={`products property-1-0-${property1} ${className}`}>
      <div className="image-10">
        {property1 === "default" && (
          <img
            className={`image-11 ${imageClassName}`}
            alt="Image"
            src={image}
          />
        )}

        {property1 === "hover" && (
          <div className={`overlap-group-4 ${imageClassName}`}>
            <div className="group-6">
              <Property1Default className="add-to-wishlist" />
              <QuickView1 className="quick-view" />
            </div>
          </div>
        )}
      </div>

      <div className="overlap-group-5">
        <div className="product-info">
          <div className="info">
            <div className="green-apple">{text}</div>

            <Price className="price-instance" property1="price" />
          </div>

          <img
            className="rating"
            alt="Rating"
            src={property1 === "hover" ? img : rating}
          />
        </div>

        <Property1Hover2
          className="add-to-cart"
          color={property1 === "hover" ? "#00B307" : "#F2F2F2"}
          stroke={property1 === "hover" ? "white" : "#1A1A1A"}
        />
      </div>
    </div>
  );
};
