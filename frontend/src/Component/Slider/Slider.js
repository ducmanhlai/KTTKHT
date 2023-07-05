import React from "react";

export default function Slider() {
  return (
    <slider>
      <div
        id="slider"
        className="owl-carousel owl-theme owl-loaded owl-drag pt-16"
      >
        <img
          src="https://lienquan.garena.vn/files/upload/images/ThanhTu/APL2023/1920x864.jpg"
          alt="img-top"
          className="hover:opacity-80"
        ></img>

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
