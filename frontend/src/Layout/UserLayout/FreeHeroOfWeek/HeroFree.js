import React from "react";
import "./HeroFree.scss";
import Azenka from "../../../img/azenka.png";
import Xiniel from "../../../img/xiniel.png";
import Thane from "../../../img/thane.png";
import Slimz from "../../../img/slimz.png";
import Murad from "../../../img/murad.png";
import Astrid from "../../../img/astrid.png";
import MuradBig from "../../../img/muradBig.png";

export default function Hero() {
  return (
    <section className="hero-week">
      <div className="inner-page">
        <h3 className="title">
          Tướng
          <strong className="font-bold"> miễn phí tuần</strong>
        </h3>

        <div className="tabs-hero-week">
          <ul className="tabs-charm">
            <li className="current">
              <a class="hero-1" href="#hero-1">
                <span class="mark-at"></span>
                <img src={Azenka} alt="img"></img>
              </a>
            </li>
            <li className="current">
              <a class="hero-2" href="#hero-2">
                <span className="mark-at"></span>
                <img src={Xiniel} alt="img"></img>
              </a>
            </li>
            <li className="current">
              <a class="hero-3" href="#hero-3">
                <span className="mark-at"></span>
                <img src={Thane} alt="img"></img>
              </a>
            </li>
            <li className="current">
              <a className="hero-4" href="#hero-4">
                <span className="mark-at"></span>
                <img src={Slimz} alt="img"></img>
              </a>
            </li>
            <li className="current">
              <a className="hero-5" href="#hero-5">
                <span className="mark-at"></span>
                <img src={Murad} alt="img"></img>
              </a>
            </li>
            <li className="current">
              <a className="hero-6" href="#hero-6">
                <span className="mark-at"></span>
                <img src={Astrid} alt="img"></img>
              </a>
            </li>
          </ul>

          <div className="cont-heros">
            <div id="hero-1" className="champ-content block relative">
              <a href="!#">
                <picture>
                  <source srcset={MuradBig}></source>
                  <img
                    src={MuradBig}
                    alt="img"
                    className="hover:opacity-80"
                  ></img>
                </picture>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
