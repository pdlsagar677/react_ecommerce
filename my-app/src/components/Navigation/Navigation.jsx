/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { ChevronDown4 } from "../../icons/ChevronDown4";
import { Logo } from "../Logo";
import { NavLinks } from "../NavLinks";
import "./style.css";

export const Navigation = ({
  type,
  className,
  mapPinClassName,
  mapPin = "https://c.animaapp.com/cRCWnf9W/img/map-pin-1@2x.png",
  groupClassName,
  group = "https://c.animaapp.com/cRCWnf9W/img/group-22@2x.png",
  logoPlant = "https://c.animaapp.com/cRCWnf9W/img/plant-1-1.svg",
  search = "https://c.animaapp.com/cRCWnf9W/img/search-1.svg",
  phonecall = "https://c.animaapp.com/cRCWnf9W/img/phonecall-1-1.svg",
  heart = "https://c.animaapp.com/cRCWnf9W/img/heart-1.svg",
}) => {
  return (
    <div className={`navigation type-${type} ${className}`}>
      {["box-layout", "color-full", "main"].includes(type) && (
        <div>
          <div className="small-one">
            <div className="div-5">
              <img
                className={`map-pin ${mapPinClassName}`}
                alt="Map pin"
                src={
                  type === "box-layout"
                    ? mapPin
                    : type === "color-full"
                      ? "https://c.animaapp.com/cRCWnf9W/img/map-pin-2@2x.png"
                      : "https://c.animaapp.com/cRCWnf9W/img/map-pin@2x.png"
                }
              />

              <p className="text-wrapper-67">
                Store Location: Lincoln- 344, Illinois, Chicago, USA
              </p>
            </div>

            <div className="div-6">
              <div className="div-7">
                <div className="text-wrapper-68">Eng</div>

                <img
                  className="group-12"
                  alt="Group"
                  src={
                    type === "main"
                      ? "https://c.animaapp.com/cRCWnf9W/img/group-1@2x.png"
                      : type === "color-full"
                        ? "https://c.animaapp.com/cRCWnf9W/img/group-5@2x.png"
                        : "https://c.animaapp.com/cRCWnf9W/img/group-22@2x.png"
                  }
                />
              </div>

              <div className="div-7">
                <div className="text-wrapper-69">USD</div>

                <img
                  className={`group-12 ${type === "box-layout" ? groupClassName : undefined}`}
                  alt="Group"
                  src={
                    type === "color-full"
                      ? "https://c.animaapp.com/cRCWnf9W/img/group-5@2x.png"
                      : type === "box-layout"
                        ? group
                        : "https://c.animaapp.com/cRCWnf9W/img/group-1@2x.png"
                  }
                />
              </div>

              {["color-full", "main"].includes(type) && (
                <div>
                  <img
                    className="devider"
                    alt="Devider"
                    src={
                      type === "color-full"
                        ? "https://c.animaapp.com/cRCWnf9W/img/devider-2.svg"
                        : "https://c.animaapp.com/cRCWnf9W/img/devider.svg"
                    }
                  />

                  <div className="account">
                    <div className="text-wrapper-70">Sign In</div>

                    <div className="text-wrapper-71">/</div>

                    <div className="text-wrapper-72">Sign Up</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="midle">
            <Logo
              className={`${type === "box-layout" ? "nav-links-instance" : "class-14"}`}
              plant={logoPlant}
            />
            <div className="search">
              <div className="searech">
                <img
                  className="chevron-down"
                  alt="Search"
                  src={
                    type === "box-layout"
                      ? search
                      : "https://c.animaapp.com/cRCWnf9W/img/search-2.svg"
                  }
                />

                <div className="text-wrapper-73">Search</div>
              </div>

              <button className="button-13">
                <div className="text-wrapper-74">Search</div>
              </button>
            </div>

            <div className="icons">
              <img
                className="phonecall"
                alt="Phonecall"
                src={
                  type === "main"
                    ? "https://c.animaapp.com/cRCWnf9W/img/heart.svg"
                    : type === "color-full"
                      ? "https://c.animaapp.com/cRCWnf9W/img/heart-2.svg"
                      : phonecall
                }
              />

              {["color-full", "main"].includes(type) && (
                <div>
                  <img
                    className="devider-2"
                    alt="Devider"
                    src="https://c.animaapp.com/cRCWnf9W/img/devider-3.svg"
                  />

                  <div className="div-8">
                    <div className="no-wrapper">
                      <div className="no">
                        <div className="text-wrapper-75">2</div>
                      </div>
                    </div>

                    <div className="info-5">
                      <div className="text-wrapper-76">Shopping cart:</div>

                      <div className="text-wrapper-77">$57.00</div>
                    </div>
                  </div>
                </div>
              )}

              {type === "box-layout" && (
                <div className="info-6">
                  <div className="text-wrapper-78">Customer Services</div>

                  <div className="text-wrapper-79">(219) 555-0114</div>
                </div>
              )}
            </div>
          </div>

          <div className="nav-links-2">
            <div className="nav-links-3">
              {type === "box-layout" && (
                <div className="all-categories">
                  <img
                    className="img-3"
                    alt="Categories"
                    src="https://c.animaapp.com/cRCWnf9W/img/categories-1.svg"
                  />

                  <div className="div-8">
                    <div className="text-wrapper-80">All Categories</div>

                    <ChevronDown4 className="chevron-down" />
                  </div>
                </div>
              )}

              {["box-layout", "main"].includes(type) && (
                <div>
                  <NavLinks
                    className="nav-links-instance"
                    divClassName="nav-links-4"
                    property1="default"
                    text="Home"
                  />
                  <NavLinks
                    className="nav-links-instance"
                    divClassName={`${type === "box-layout" ? "nav-links-5" : "class-15"}`}
                    property1="default"
                    text="Shop"
                  />
                  <NavLinks
                    className="nav-links-instance"
                    divClassName={`${type === "box-layout" ? "nav-links-5" : "class-15"}`}
                    property1="default"
                    text="Pages"
                  />
                  <NavLinks
                    className="nav-links-instance"
                    divClassName={`${type === "box-layout" ? "nav-links-5" : "class-15"}`}
                    property1="default"
                    text="Blog"
                  />
                  <NavLinks
                    className="nav-links-instance"
                    divClassName={`${type === "box-layout" ? "nav-links-5" : "class-15"}`}
                    property1="default"
                    text="About Us"
                  />
                  <NavLinks
                    className="nav-links-instance"
                    divClassName={`${type === "main" ? "class-15" : "nav-links-5"}`}
                    property1="default"
                    text="Contact Us"
                  />
                </div>
              )}

              {type === "color-full" && (
                <div>
                  <img
                    className="img-3"
                    alt="All categories"
                    src="https://c.animaapp.com/cRCWnf9W/img/all-categories.png"
                  />

                  <NavLinks
                    className="nav-links-instance"
                    divClassName="nav-links-6"
                    property1="default"
                    text="Home"
                  />
                  <NavLinks
                    className="nav-links-instance"
                    divClassName="nav-links-5"
                    property1="default"
                    text="Shop"
                  />
                  <NavLinks
                    className="nav-links-instance"
                    divClassName="nav-links-5"
                    property1="default"
                    text="Pages"
                  />
                  <NavLinks
                    className="nav-links-instance"
                    divClassName="nav-links-5"
                    property1="default"
                    text="Blog"
                  />
                  <NavLinks
                    className="nav-links-instance"
                    divClassName="nav-links-5"
                    property1="default"
                    text="About Us"
                  />
                  <NavLinks
                    className="nav-links-instance"
                    divClassName="nav-links-5"
                    property1="default"
                    text="Contact Us"
                  />
                </div>
              )}
            </div>

            <div className="call-now">
              <img
                className="heart"
                alt="Heart"
                src={
                  type === "main"
                    ? "https://c.animaapp.com/cRCWnf9W/img/phonecall-1.svg"
                    : type === "color-full"
                      ? "https://c.animaapp.com/cRCWnf9W/img/phonecall-1-2.svg"
                      : heart
                }
              />

              {["color-full", "main"].includes(type) && (
                <div className="text-wrapper-81">(219) 555-0114</div>
              )}

              {type === "box-layout" && (
                <div>
                  <div className="cart-2">
                    <div className="no-2">
                      <div className="text-wrapper-75">2</div>
                    </div>
                  </div>

                  <img
                    className="img-4"
                    alt="User"
                    src="https://c.animaapp.com/cRCWnf9W/img/user-3-1-2.svg"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {type === "s-imple" && (
        <div>
          <div className="small-one-2">
            <div className="div-5">
              <img
                className="map-pin"
                alt="Map pin"
                src="https://c.animaapp.com/cRCWnf9W/img/map-pin-3@2x.png"
              />

              <p className="text-wrapper-82">
                Store Location: Lincoln- 344, Illinois, Chicago, USA
              </p>
            </div>

            <div className="div-6">
              <div className="div-7">
                <div className="text-wrapper-83">Eng</div>

                <img
                  className="group-12"
                  alt="Group"
                  src="https://c.animaapp.com/cRCWnf9W/img/group-7@2x.png"
                />
              </div>

              <div className="div-7">
                <div className="text-wrapper-83">USD</div>

                <img
                  className="group-12"
                  alt="Group"
                  src="https://c.animaapp.com/cRCWnf9W/img/group-7@2x.png"
                />
              </div>
            </div>
          </div>

          <div className="midle-2">
            <div className="nav-links-7">
              <NavLinks
                className="nav-links-instance"
                divClassName="nav-links-8"
                property1="default"
                text="Home"
              />
              <NavLinks
                className="nav-links-instance"
                divClassName="nav-links-5"
                property1="default"
                text="Shop"
              />
              <NavLinks
                className="nav-links-instance"
                divClassName="nav-links-5"
                property1="default"
                text="Pages"
              />
              <NavLinks
                className="nav-links-instance"
                divClassName="nav-links-5"
                property1="default"
                text="Blog"
              />
              <NavLinks
                className="nav-links-instance"
                divClassName="nav-links-5"
                property1="default"
                text="About Us"
              />
            </div>

            <Logo
              className="logo-4"
              plant="https://c.animaapp.com/cRCWnf9W/img/plant-1-6.svg"
            />
            <div className="icons-2">
              <div className="div-5">
                <img
                  className="phonecall-2"
                  alt="Phonecall"
                  src="https://c.animaapp.com/cRCWnf9W/img/phonecall-1-3.svg"
                />

                <div className="text-wrapper-84">(219) 555-0114</div>
              </div>

              <div className="div-6">
                <img
                  className="img-4"
                  alt="Search"
                  src="https://c.animaapp.com/cRCWnf9W/img/search-3.svg"
                />

                <img
                  className="img-4"
                  alt="Heart"
                  src="https://c.animaapp.com/cRCWnf9W/img/heart-3.svg"
                />

                <div className="cart-3">
                  <div className="no">
                    <div className="text-wrapper-75">2</div>
                  </div>
                </div>

                <img
                  className="img-4"
                  alt="User"
                  src="https://c.animaapp.com/cRCWnf9W/img/user-3-1-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
