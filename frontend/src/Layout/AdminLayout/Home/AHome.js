import React from "react";
import "./AHome.scss";
import BgHome from "../../../img/bg-home.jpg";

export default function AHome() {
  return (
    <div className="home-page">
      <img src={BgHome} alt="img-top"></img>
    </div>
  );
}
