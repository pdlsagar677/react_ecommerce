/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { MediaFacebookStatusTrue } from "../../icons/MediaFacebookStatusTrue";
import { MediaTwitterStatusFalse } from "../../icons/MediaTwitterStatusFalse";
import { SocialMedia2 } from "../../icons/SocialMedia2";
import { SocialMedia10 } from "../../icons/SocialMedia10";
import { SocialMedia27 } from "../../icons/SocialMedia27";
import { DownloadOurMobile } from "../DownloadOurMobile";
import { Logo } from "../Logo";
import { MethodApplepay } from "../MethodApplepay";
import { MethodDiscover } from "../MethodDiscover";
import { MethodMastercard } from "../MethodMastercard";
import { MethodVisa } from "../MethodVisa";
import "./style.css";

export const Footer = ({
  property1,
  className,
  logoPlant = "https://c.animaapp.com/cRCWnf9W/img/plant-1-6.svg",
  downloadOurMobileAppleNegative = "https://c.animaapp.com/cRCWnf9W/img/apple---negative-1.svg",
  downloadOurMobileIconGooglePlay = "https://c.animaapp.com/cRCWnf9W/img/icon-google-play-1.svg",
  methodApplepayApplePay = "https://c.animaapp.com/cRCWnf9W/img/applepay-1.svg",
  methodVisaVisaLogo = "https://c.animaapp.com/cRCWnf9W/img/visa-logo-1.svg",
  methodDiscoverStripe = "https://c.animaapp.com/cRCWnf9W/img/stripe-1.svg",
  methodDiscoverO = "https://c.animaapp.com/cRCWnf9W/img/o-1.svg",
  methodDiscoverOverlapGroupClassName,
  lock = "https://c.animaapp.com/cRCWnf9W/img/lock-1-1.svg",
  methodMastercardMastercardClassName,
  methodMastercardMiddle = "https://c.animaapp.com/cRCWnf9W/img/middle-1.svg",
  methodMastercardRight = "https://c.animaapp.com/cRCWnf9W/img/right-1.svg",
  inputType = "email",
  inputType1 = "email",
  inputType2 = "email",
}) => {
  return (
    <div className={`footer ${property1} ${className}`}>
      {property1 === "normal" && (
        <div>
          <div className="subscribe-our">
            <div className="frame-2">
              <div className="text-wrapper-4">Subcribe our Newsletter</div>

              <p className="p">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna.
              </p>
            </div>

            <div className="subscribe">
              <div className="overlap-group-3">
                <input
                  className="input-field"
                  placeholder="Your email address"
                  type={inputType}
                />

                <button className="button">
                  <div className="text-wrapper-5">Subscribe</div>
                </button>
              </div>
            </div>

            <div className="frame-3">
              <MediaFacebookStatusTrue className="social-media" />
              <MediaTwitterStatusFalse
                className="social-media"
                color="#4D4D4D"
              />
              <SocialMedia2 className="social-media" color="#4D4D4D" />
              <SocialMedia27 className="social-media" color="#4D4D4D" />
            </div>
          </div>

          <div className="div-2">
            <div className="fotter">
              <div className="company">
                <Logo
                  className="instance-node"
                  divClassName="logo-instance"
                  plant="https://c.animaapp.com/cRCWnf9W/img/plant-1-5.svg"
                />
                <p className="text-wrapper-6">
                  Morbi cursus porttitor enim lobortis molestie. Duis gravida
                  turpis dui, eget bibendum magna congue nec.
                </p>

                <div className="CTA">
                  <button className="button-2">
                    <div className="text-wrapper-7">(219) 555-0114</div>
                  </button>

                  <div className="text-wrapper-8">or</div>

                  <button className="button-2">
                    <div className="text-wrapper-7">Proxy@gmail.com</div>
                  </button>
                </div>
              </div>

              <div className="my-account">
                <div className="text-wrapper-9">My Account</div>

                <div className="links">
                  <div className="text-wrapper-10">My Account</div>

                  <div className="text-wrapper-11">Order History</div>

                  <div className="text-wrapper-12">Shoping Cart</div>

                  <div className="text-wrapper-11">Wishlist</div>
                </div>
              </div>

              <div className="help">
                <div className="text-wrapper-9">Helps</div>

                <div className="links">
                  <div className="text-wrapper-10">Contact</div>

                  <div className="text-wrapper-11">Faqs</div>

                  <div className="text-wrapper-11">Terms &amp; Condition</div>

                  <div className="text-wrapper-11">Privacy Policy</div>
                </div>
              </div>

              <div className="proxy">
                <div className="text-wrapper-9">Proxy</div>

                <div className="links">
                  <div className="text-wrapper-10">About</div>

                  <div className="text-wrapper-11">Shop</div>

                  <div className="text-wrapper-11">Product</div>

                  <div className="text-wrapper-11">Track Order</div>
                </div>
              </div>

              <div className="categories">
                <div className="text-wrapper-9">Categories</div>

                <div className="links">
                  <div className="text-wrapper-10">Fruit &amp; Vegetables</div>

                  <div className="text-wrapper-11">Meat &amp; Fish</div>

                  <div className="text-wrapper-11">Bread &amp; Bakery</div>

                  <div className="text-wrapper-11">Beauty &amp; Health</div>
                </div>
              </div>
            </div>

            <div className="copyright">
              <p className="text-wrapper-13">
                Ecobazar eCommerce © 2021. All Rights Reserved
              </p>

              <div className="div-3">
                <MethodApplepay
                  applePay="https://c.animaapp.com/cRCWnf9W/img/applepay.svg"
                  applePayClassName="method-applepay-instance"
                  className="instance-node-2"
                />
                <MethodVisa
                  className="instance-node-2"
                  visaLogo="https://c.animaapp.com/cRCWnf9W/img/visa-logo.svg"
                  visaLogoClassName="method-visa-instance"
                />
                <MethodDiscover
                  className="instance-node-3"
                  discoverClassName="method-discover-instance"
                  o="https://c.animaapp.com/cRCWnf9W/img/o.svg"
                  oClassName="method-discover-4"
                  overlapGroupClassName="method-discover-3"
                  stripe="https://c.animaapp.com/cRCWnf9W/img/stripe.svg"
                  stripeClassName="method-discover-2"
                />
                <MethodMastercard
                  className="instance-node-3"
                  mastercardClassName="method-mastercard-instance"
                  middle="https://c.animaapp.com/cRCWnf9W/img/middle.svg"
                  middleClassName="method-mastercard-4"
                  overlapGroupClassName="method-mastercard-2"
                  right="https://c.animaapp.com/cRCWnf9W/img/right.svg"
                  rightClassName="method-mastercard-3"
                />
                <div className="cart">
                  <div className="overlap">
                    <img
                      className="lock"
                      alt="Lock"
                      src="https://c.animaapp.com/cRCWnf9W/img/lock-1.svg"
                    />

                    <div className="text-wrapper-14">Secure</div>

                    <div className="text-wrapper-15">Payment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {["box-layout", "five", "three"].includes(property1) && (
        <div>
          <div className="newsletter">
            {property1 === "box-layout" && (
              <div>
                <div className="heading">
                  <img
                    className="envelopeopen"
                    alt="Envelopeopen"
                    src="https://c.animaapp.com/cRCWnf9W/img/envelopeopen-1-1.svg"
                  />

                  <div className="heading-2">
                    <div className="text-wrapper-16">
                      Subcribe our Newsletter
                    </div>

                    <p className="text-wrapper-17">
                      Pellentesque eu nibh eget mauris congue mattis matti.
                    </p>
                  </div>
                </div>

                <div className="frame-4">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-3">
                      <input
                        className="input"
                        placeholder="Your email address"
                        type={inputType1}
                      />

                      <button className="button-3">
                        <div className="text-wrapper-5">Subscribe</div>
                      </button>
                    </div>
                  </div>

                  <div className="div-3">
                    <MediaFacebookStatusTrue className="social-media" />
                    <MediaTwitterStatusFalse
                      className="social-media"
                      color="#B3B3B3"
                    />
                    <SocialMedia10 className="social-media" color="#B3B3B3" />
                    <SocialMedia27 className="social-media" color="#B3B3B3" />
                  </div>
                </div>
              </div>
            )}

            {["five", "three"].includes(property1) && (
              <div>
                <div className="heading-3">
                  <div className="text-wrapper-18">Subcribe our Newsletter</div>

                  <p className="text-wrapper-19">
                    Pellentesque eu nibh eget mauris congue mattis matti.
                  </p>
                </div>

                <div className="subscribe-2">
                  <div className="overlap-group-3">
                    <input
                      className="input-field-2"
                      placeholder="Your email address"
                      type={inputType2}
                    />

                    <button className="button-4">
                      <div className="text-wrapper-5">Subscribe</div>
                    </button>
                  </div>
                </div>

                <Logo
                  className={`${property1 === "five" ? "class-3" : "class-4"}`}
                  divClassName={`${property1 === "five" ? "class" : "class-2"}`}
                  plant={
                    property1 === "five"
                      ? "https://c.animaapp.com/cRCWnf9W/img/plant-1-9.svg"
                      : "https://c.animaapp.com/cRCWnf9W/img/plant-1-7.svg"
                  }
                  plantClassName="logo-2"
                />
              </div>
            )}
          </div>

          <div className="footer-3">
            {["box-layout", "three"].includes(property1) && (
              <div>
                <div className="company-2">
                  {property1 === "box-layout" && (
                    <Logo
                      className="instance-node"
                      divClassName="logo-3"
                      plant={logoPlant}
                    />
                  )}

                  {property1 === "three" && (
                    <div className="text-wrapper-20">About Shopery</div>
                  )}

                  <p className="text-wrapper-6">
                    Morbi cursus porttitor enim lobortis molestie. Duis gravida
                    turpis dui, eget bibendum magna congue nec.
                  </p>

                  <div className="CTA">
                    <button className="button-5">
                      <div className="text-wrapper-21">(219) 555-0114</div>
                    </button>

                    <div className="text-wrapper-8">or</div>

                    <button className="button-6">
                      <div className="text-wrapper-22">Proxy@gmail.com</div>
                    </button>
                  </div>
                </div>

                <div className="my-account-2">
                  <div className="text-wrapper-23">My Account</div>

                  <div className="links">
                    <div className="text-wrapper-24">My Account</div>

                    <div className="text-wrapper-25">Order History</div>

                    <div className="text-wrapper-26">Shoping Cart</div>

                    <div className="text-wrapper-27">Wishlist</div>

                    {property1 === "three" && (
                      <div className="text-wrapper-11">Settings</div>
                    )}
                  </div>
                </div>

                <div className="help-2">
                  <div className="text-wrapper-28">Helps</div>

                  <div className="links">
                    <div className="text-wrapper-29">Contact</div>

                    <div className="text-wrapper-30">Faqs</div>

                    <div className="terms-condition">Terms &amp; Condition</div>

                    <div className="text-wrapper-31">Privacy Policy</div>
                  </div>
                </div>

                <div className="proxy-2">
                  <div className="text-wrapper-32">Proxy</div>

                  <div className="links">
                    <div className="text-wrapper-33">About</div>

                    <div className="text-wrapper-34">Shop</div>

                    <div className="text-wrapper-35">Product</div>

                    <div className="track-order">
                      {property1 === "box-layout" && <span>Track Order</span>}

                      {property1 === "three" && <span>Products Details</span>}
                    </div>

                    {property1 === "three" && (
                      <div className="text-wrapper-11">Track Order</div>
                    )}
                  </div>
                </div>

                <div className="download-mobile-app">
                  <div className="download-mobile-app-2">
                    {property1 === "box-layout" && <span>Download Mobile App</span>}

                    {property1 === "three" && <span>Download our Mobile App</span>}
                  </div>

                  <DownloadOurMobile
                    appStoreClassName={`${property1 === "box-layout" && "class-5"}`}
                    appleNegative={downloadOurMobileAppleNegative}
                    className="instance-node"
                    divClassName={`${property1 === "box-layout" && "class-6"}`}
                    divClassName1={`${property1 === "box-layout" && "class-6"}`}
                    divClassName2={`${property1 === "box-layout" && "logo-3"}`}
                    divClassNameOverride={`${property1 === "box-layout" && "logo-3"}`}
                    googlePlayClassName={`${property1 === "box-layout" && "class-5"}`}
                    iconGooglePlay={downloadOurMobileIconGooglePlay}
                  />
                </div>
              </div>
            )}

            {property1 === "five" && (
              <div>
                <div className="overlap-2">
                  <div className="company-3">
                    <div className="text-wrapper-20">About Shopery</div>

                    <p className="text-wrapper-36">
                      Morbi cursus porttitor enim lobortis molestie. Duis
                      gravida turpis dui, eget bibendum magna congue nec.
                    </p>

                    <div className="CTA">
                      <button className="button-7">
                        <div className="text-wrapper-7">(219) 555-0114</div>
                      </button>

                      <div className="text-wrapper-37">or</div>

                      <button className="button-7">
                        <div className="text-wrapper-7">Proxy@gmail.com</div>
                      </button>
                    </div>
                  </div>

                  <img
                    className="left"
                    alt="Left"
                    src="https://c.animaapp.com/cRCWnf9W/img/left-4.png"
                  />
                </div>

                <div className="my-account-3">
                  <div className="text-wrapper-20">My Account</div>

                  <div className="links">
                    <div className="text-wrapper-38">My Account</div>

                    <div className="text-wrapper-39">Order History</div>

                    <div className="text-wrapper-12">Shoping Cart</div>

                    <div className="text-wrapper-39">Wishlist</div>

                    <div className="text-wrapper-39">Settings</div>
                  </div>
                </div>

                <div className="help-3">
                  <div className="text-wrapper-20">Helps</div>

                  <div className="links">
                    <div className="text-wrapper-38">Contact</div>

                    <div className="text-wrapper-39">Faqs</div>

                    <div className="text-wrapper-39">Terms &amp; Condition</div>

                    <div className="text-wrapper-39">Privacy Policy</div>
                  </div>
                </div>

                <div className="proxy-3">
                  <div className="text-wrapper-20">Proxy</div>

                  <div className="links">
                    <div className="text-wrapper-40">About</div>

                    <div className="text-wrapper-41">Shop</div>

                    <div className="text-wrapper-41">Product</div>

                    <div className="text-wrapper-39">Products Details</div>

                    <div className="text-wrapper-39">Track Order</div>
                  </div>
                </div>

                <div className="instagram">
                  <div className="text-wrapper-42">Instagram</div>

                  <img
                    className="image"
                    alt="Image"
                    src="https://c.animaapp.com/cRCWnf9W/img/image-8.svg"
                  />

                  <img
                    className="img"
                    alt="Image"
                    src="https://c.animaapp.com/cRCWnf9W/img/image-9.svg"
                  />

                  <img
                    className="image-2"
                    alt="Image"
                    src="https://c.animaapp.com/cRCWnf9W/img/image-10.svg"
                  />

                  <img
                    className="image-3"
                    alt="Image"
                    src="https://c.animaapp.com/cRCWnf9W/img/image-11.svg"
                  />

                  <img
                    className="image-4"
                    alt="Image"
                    src="https://c.animaapp.com/cRCWnf9W/img/image-12.svg"
                  />

                  <img
                    className="image-5"
                    alt="Image"
                    src="https://c.animaapp.com/cRCWnf9W/img/image-13.svg"
                  />

                  <img
                    className="image-6"
                    alt="Image"
                    src="https://c.animaapp.com/cRCWnf9W/img/image-14.svg"
                  />

                  <img
                    className="image-7"
                    alt="Image"
                    src="https://c.animaapp.com/cRCWnf9W/img/image-15.svg"
                  />
                </div>

                <img
                  className="group"
                  alt="Group"
                  src="https://c.animaapp.com/cRCWnf9W/img/group-17.png"
                />
              </div>
            )}
          </div>

          <div className="copyright-2">
            {property1 === "box-layout" && (
              <div>
                <p className="text-wrapper-13">
                  Ecobazar eCommerce © 2021. All Rights Reserved
                </p>

                <div className="payment-type">
                  <MethodApplepay
                    applePay={methodApplepayApplePay}
                    applePayClassName="method-applepay-3"
                    className="method-applepay-2"
                  />
                  <MethodVisa
                    className="method-visa-2"
                    visaLogo={methodVisaVisaLogo}
                    visaLogoClassName="method-visa-3"
                  />
                  <MethodDiscover
                    className="method-discover-5"
                    discoverClassName="method-discover-6"
                    o={methodDiscoverO}
                    oClassName="method-discover-8"
                    overlapGroupClassName={methodDiscoverOverlapGroupClassName}
                    stripe={methodDiscoverStripe}
                    stripeClassName="method-discover-7"
                  />
                  <div className="overlap-wrapper">
                    <div className="overlap-3">
                      <img className="lock" alt="Lock" src={lock} />

                      <div className="text-wrapper-43">Secure</div>

                      <div className="text-wrapper-44">Payment</div>
                    </div>
                  </div>

                  <MethodMastercard
                    className="method-mastercard-5"
                    mastercardClassName={methodMastercardMastercardClassName}
                    middle={methodMastercardMiddle}
                    middleClassName="method-mastercard-4"
                    overlapGroupClassName="method-mastercard-2"
                    right={methodMastercardRight}
                    rightClassName="method-mastercard-3"
                  />
                </div>
              </div>
            )}

            {["five", "three"].includes(property1) && (
              <div>
                <div className="social-links">
                  <MediaFacebookStatusTrue className="social-media" />
                  <MediaTwitterStatusFalse
                    className="social-media"
                    color={property1 === "five" ? "#96B397" : "#B3B3B3"}
                  />
                  <SocialMedia2
                    className="social-media"
                    color={property1 === "five" ? "#96B397" : "#B3B3B3"}
                  />
                  <SocialMedia27
                    className="social-media"
                    color={property1 === "five" ? "#96B397" : "#B3B3B3"}
                  />
                </div>

                <p className="text-wrapper-45">
                  Ecobazar eCommerce © 2021. All Rights Reserved
                </p>

                <div className="payment-method">
                  <MethodApplepay
                    applePay={
                      property1 === "five"
                        ? "https://c.animaapp.com/cRCWnf9W/img/applepay-4.svg"
                        : "https://c.animaapp.com/cRCWnf9W/img/applepay-2.svg"
                    }
                    applePayClassName="method-applepay-instance"
                    className={`${property1 === "five" ? "class-7" : "instance-node-2"}`}
                  />
                  <MethodVisa
                    className={`${property1 === "five" ? "class-7" : "instance-node-2"}`}
                    visaLogo={
                      property1 === "five"
                        ? "https://c.animaapp.com/cRCWnf9W/img/visa-logo-4.svg"
                        : "https://c.animaapp.com/cRCWnf9W/img/visa-logo-2.svg"
                    }
                    visaLogoClassName={`${property1 === "five" ? "method-visa-instance" : "class-8"}`}
                  />
                  <MethodDiscover
                    className={`${property1 === "five" ? "class-11" : "instance-node-3"}`}
                    discoverClassName="method-discover-instance"
                    o={
                      property1 === "five"
                        ? "https://c.animaapp.com/cRCWnf9W/img/o-4.svg"
                        : "https://c.animaapp.com/cRCWnf9W/img/o-2.svg"
                    }
                    oClassName="method-discover-4"
                    overlapGroupClassName={`${property1 === "five" ? "class-9" : "class-10"}`}
                    stripe="https://c.animaapp.com/cRCWnf9W/img/stripe-4.svg"
                    stripeClassName="method-discover-2"
                  />
                  <MethodMastercard
                    className={`${property1 === "five" ? "class-11" : "instance-node-3"}`}
                    mastercardClassName={`${property1 === "five" ? "class-12" : "class-13"}`}
                    middle={
                      property1 === "five"
                        ? "https://c.animaapp.com/cRCWnf9W/img/middle-4.svg"
                        : "https://c.animaapp.com/cRCWnf9W/img/middle-2.svg"
                    }
                    middleClassName="method-mastercard-4"
                    overlapGroupClassName="method-mastercard-2"
                    right={
                      property1 === "five"
                        ? "https://c.animaapp.com/cRCWnf9W/img/right-4.svg"
                        : "https://c.animaapp.com/cRCWnf9W/img/right-2.svg"
                    }
                    rightClassName="method-mastercard-3"
                  />
                  <div className="cart">
                    <div className="overlap-4">
                      <img
                        className="lock"
                        alt="Lock"
                        src={
                          property1 === "five"
                            ? "https://c.animaapp.com/cRCWnf9W/img/lock-1-4.svg"
                            : "https://c.animaapp.com/cRCWnf9W/img/lock-1-2.svg"
                        }
                      />

                      <div className="text-wrapper-14">Secure</div>

                      <div className="text-wrapper-15">Payment</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {property1 === "four" && (
        <div className="overlap-5">
          <div className="div-4">
            <div className="download-mobile-app-3">
              <div className="text-wrapper-46">Download Mobile App</div>

              <img
                className="line"
                alt="Line"
                src="https://c.animaapp.com/cRCWnf9W/img/line-14-3.svg"
              />

              <DownloadOurMobile
                appleNegative="https://c.animaapp.com/cRCWnf9W/img/apple---negative-1-2.svg"
                className="download-our-mobile-app"
                iconGooglePlay="https://c.animaapp.com/cRCWnf9W/img/icon-google-play-1-2.svg"
              />
            </div>

            <div className="proxy-4">
              <div className="text-wrapper-46">Proxy</div>

              <img
                className="line"
                alt="Line"
                src="https://c.animaapp.com/cRCWnf9W/img/line-14-3.svg"
              />

              <div className="links-2">
                <div className="text-wrapper-10">About</div>

                <div className="text-wrapper-11">Shop</div>

                <div className="text-wrapper-11">Product</div>

                <div className="text-wrapper-11">Track Order</div>
              </div>
            </div>

            <div className="help-4">
              <div className="text-wrapper-46">Helps</div>

              <img
                className="line"
                alt="Line"
                src="https://c.animaapp.com/cRCWnf9W/img/line-14-3.svg"
              />

              <div className="links-2">
                <div className="text-wrapper-10">Contact</div>

                <div className="text-wrapper-11">Faqs</div>

                <div className="text-wrapper-11">Terms &amp; Condition</div>

                <div className="text-wrapper-11">Privacy Policy</div>
              </div>
            </div>

            <div className="my-account-4">
              <div className="text-wrapper-46">My Account</div>

              <img
                className="line"
                alt="Line"
                src="https://c.animaapp.com/cRCWnf9W/img/line-14-3.svg"
              />

              <div className="links-2">
                <div className="text-wrapper-10">My Account</div>

                <div className="text-wrapper-11">Order History</div>

                <div className="text-wrapper-12">Shoping Cart</div>

                <div className="text-wrapper-11">Wishlist</div>
              </div>
            </div>

            <div className="company-4">
              <Logo
                className="instance-node"
                divClassName="logo-instance"
                plant="https://c.animaapp.com/cRCWnf9W/img/plant-1-8.svg"
              />
              <p className="text-wrapper-47">
                Morbi cursus porttitor enim lobortis molestie. Duis gravida
                turpis dui, eget bibendum magn.
              </p>

              <div className="div-3">
                <MediaFacebookStatusTrue className="social-media" />
                <MediaTwitterStatusFalse
                  className="social-media"
                  color="#B3B3B3"
                />
                <SocialMedia2 className="social-media" color="#B3B3B3" />
                <SocialMedia27 className="social-media" color="#B3B3B3" />
              </div>
            </div>
          </div>

          <div className="copyright-3">
            <p className="text-wrapper-13">
              Ecobazar eCommerce © 2021. All Rights Reserved
            </p>

            <div className="div-3">
              <MethodApplepay
                applePay="https://c.animaapp.com/cRCWnf9W/img/applepay-3.svg"
                applePayClassName="method-applepay-instance"
                className="instance-node-2"
              />
              <MethodVisa
                className="instance-node-2"
                visaLogo="https://c.animaapp.com/cRCWnf9W/img/visa-logo-3.svg"
                visaLogoClassName="method-visa-instance"
              />
              <MethodDiscover
                className="instance-node-3"
                discoverClassName="method-discover-instance"
                o="https://c.animaapp.com/cRCWnf9W/img/o-3.svg"
                oClassName="method-discover-4"
                overlapGroupClassName="method-discover-9"
                stripe="https://c.animaapp.com/cRCWnf9W/img/stripe-4.svg"
                stripeClassName="method-discover-2"
              />
              <MethodMastercard
                className="instance-node-3"
                mastercardClassName="method-mastercard-6"
                middle="https://c.animaapp.com/cRCWnf9W/img/middle-3.svg"
                middleClassName="method-mastercard-4"
                overlapGroupClassName="method-mastercard-2"
                right="https://c.animaapp.com/cRCWnf9W/img/right-3.svg"
                rightClassName="method-mastercard-3"
              />
              <div className="cart">
                <div className="overlap">
                  <img
                    className="lock"
                    alt="Lock"
                    src="https://c.animaapp.com/cRCWnf9W/img/lock-1-3.svg"
                  />

                  <div className="text-wrapper-14">Secure</div>

                  <div className="text-wrapper-15">Payment</div>
                </div>
              </div>
            </div>
          </div>

          <div className="BG">
            <div className="overlap-6">
              <div className="overlap-7">
                <img
                  className="vector"
                  alt="Vector"
                  src="https://c.animaapp.com/cRCWnf9W/img/vector.svg"
                />

                <div className="overlap-8">
                  <img
                    className="vector-2"
                    alt="Vector"
                    src="https://c.animaapp.com/cRCWnf9W/img/vector-1.svg"
                  />

                  <img
                    className="group-2"
                    alt="Group"
                    src="https://c.animaapp.com/cRCWnf9W/img/group-7-1@2x.png"
                  />
                </div>
              </div>

              <img
                className="group-3"
                alt="Group"
                src="https://c.animaapp.com/cRCWnf9W/img/group-5-1@2x.png"
              />
            </div>

            <div className="vector-wrapper">
              <img
                className="vector-3"
                alt="Vector"
                src="https://c.animaapp.com/cRCWnf9W/img/vector-3.svg"
              />
            </div>

            <div className="element-wrapper">
              <img
                className="element"
                alt="Element"
                src="https://c.animaapp.com/cRCWnf9W/img/1-904@2x.png"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
