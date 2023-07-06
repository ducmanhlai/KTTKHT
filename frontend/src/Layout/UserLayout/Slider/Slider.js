import React from "react";
import BgHome from "../../../img/bg-home.jpg";

export default function Slider() {
  return (
    <slider>
      <div
        id="slider"
        className="owl-carousel owl-theme owl-loaded owl-drag pt-16"
      >
        <img src={BgHome} alt="img-top" className="hover:opacity-80"></img>

        <div className="owl-dots">
          <button className="owl-dot">
            <span></span>
          </button>
          <button className="owl-dot">
            <span></span>
          </button>
        </div>
      </div>
    </slider>
  );
}
