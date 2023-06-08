import React from "react";
import "./Hero.scss";

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
              <a
                class="hero-1"
                href="#hero-1"
                onclick="var that=this;ga('send', 'event', 'Home_middle', 'FreeChamp', 'button');"
              >
                <span class="mark-at"></span>
                <img
                  src="https://lienquan.garena.vn/files/free_champions/67bd01ee2708589e83cf48a670bb15255d63c592846d4.png"
                  alt="img"
                ></img>
              </a>
            </li>
            <li className="current">
              <a
                class="hero-2"
                href="#hero-2"
                onclick="var that=this;ga('send', 'event', 'Home_middle', 'FreeChamp', 'button');"
              >
                <span class="mark-at"></span>
                <img
                  src="https://lienquan.garena.vn/files/free_champions/b337703499572ff6b074da4e0c2c37825a93c9da8f97c.png"
                  alt="img"
                ></img>
              </a>
            </li>
            <li className="current">
              <a
                class="hero-3"
                href="#hero-3"
                onclick="var that=this;ga('send', 'event', 'Home_middle', 'FreeChamp', 'button');"
              >
                <span class="mark-at"></span>
                <img
                  src="https://lienquan.garena.vn/files/free_champions/5e24def8a3ad4011e78a368ff21f294259225f45b5fea.png"
                  alt="img"
                ></img>
              </a>
            </li>
            <li className="current">
              <a
                class="hero-4"
                href="#hero-4"
                onclick="var that=this;ga('send', 'event', 'Home_middle', 'FreeChamp', 'button');"
              >
                <span class="mark-at"></span>
                <img
                  src="https://lienquan.garena.vn/files/free_champions/d5f407882d37eeaee394ca3734099e4559757ac93535d.png"
                  alt="img"
                ></img>
              </a>
            </li>
            <li className="current">
              <a
                class="hero-5"
                href="#hero-5"
                onclick="var that=this;ga('send', 'event', 'Home_middle', 'FreeChamp', 'button');"
              >
                <span class="mark-at"></span>
                <img
                  src="https://lienquan.garena.vn/files/free_champions/8c31ae4c176b250db2f14732389a3e7259d33f15ac4fc.png"
                  alt="img"
                ></img>
              </a>
            </li>
            <li className="current">
              <a
                class="hero-6"
                href="#hero-6"
                onclick="var that=this;ga('send', 'event', 'Home_middle', 'FreeChamp', 'button');"
              >
                <span class="mark-at"></span>
                <img
                  src="https://lienquan.garena.vn/files/free_champions/0df51fbe1aedacb43acc27fc674ff22a5a780b35047a0.png"
                  alt="img"
                ></img>
              </a>
            </li>
          </ul>

          <div className="cont-heros">
            <div id="hero-1" className="champ-content block relative">
              <a href="!#">
                <picture>
                  <source srcset="https://lienquan.garena.vn/files/free_champions/c83fa58477da41640d60a60e2bcfaaab5ddcd167597f4.png"></source>
                  <img
                    src="https://lienquan.garena.vn/files/free_champions/c83fa58477da41640d60a60e2bcfaaab5ddcd167597f4.png"
                    alt="img"
                    className="hover:opacity-80"
                  ></img>
                </picture>
              </a>
            </div>
            {/* <div id="hero-2" className="champ-content block relative">
              <a href="!#">
                <picture>
                  <img
                    src="https://lienquan.garena.vn/files/free_champions/0f903bb4c3431e576676a86464b9c1f95ddcd48299048.png"
                    alt="img"
                  ></img>
                </picture>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
