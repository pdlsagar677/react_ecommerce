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

export const Product = ({
  property1,
  className,
  image = "https://c.animaapp.com/cRCWnf9W/img/image.svg",
  productInfoClassName,
  divClassName,
  text = "Chanise Cabbage",
  priceDivClassName,
  rating = "https://c.animaapp.com/cRCWnf9W/img/rating.svg",
  img = "https://c.animaapp.com/cRCWnf9W/img/image-2.svg",
  infoClassName,
  priceDivClassNameOverride,
  priceDivClassName1,
  priceProperty1 = "price",
}) => {
  return (
    <div className={`product property-1-2-${property1} ${className}`}>
      <img
        className="img-2"
        alt="Image"
        src={property1 === "hover" ? img : image}
      />

      <div className={`product-info-2 ${productInfoClassName}`}>
        {property1 === "default" && (
          <div>
            <div className={`info-2 ${infoClassName}`}>
              <div className={`chanise-cabbage ${divClassName}`}>{text}</div>

              <Price
                className="price-2"
                divClassName={priceDivClassName}
                divClassName1={priceDivClassName1}
                divClassNameOverride={priceDivClassNameOverride}
                property1={priceProperty1}
              />
            </div>

            <img className="img-2" alt="Rating" src={rating} />
          </div>
        )}

        {property1 === "hover" && (
          <div>
            <div className={`chanise-cabbage-2 ${infoClassName}`}>{text}</div>

            <div className="frame-6">
              <Property1Hover2
                className="instance-node-4"
                color="#00B307"
                stroke="white"
              />
              <QuickView1 className="instance-node-4" />
              <Property1Default className="instance-node-4" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
