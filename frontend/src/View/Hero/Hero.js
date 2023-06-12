import React from "react";
import "./Hero.scss";
import AcademyNavigation from "../../Component/AcademyNavigation/Anav";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";

export default function Hero() {
  return (
    <>
      <Header />

      <section className="main-container">
        <AcademyNavigation />

        <section className="hero-page pb-12">
          <div className="inner-page">
            <div className="filter-hero ">
              <div className="item-filter">
                <input
                  id="filter-10"
                  className="radio"
                  name="filter"
                  type="radio"
                  value="all"
                  checked
                ></input>
                <label for="filter-10">
                  <span></span>
                  Tất cả
                </label>
              </div>

              <div className="item-filter">
                <input
                  id="filter-1"
                  className="radio"
                  name="filter"
                  type="radio"
                  value="all"
                ></input>
                <label for="filter-1">
                  <span></span>
                  Đấu sĩ
                </label>
              </div>

              <div className="item-filter">
                <input
                  id="filter-2"
                  className="radio"
                  name="filter"
                  type="radio"
                  value="all"
                ></input>
                <label for="filter-2">
                  <span></span>
                  Pháp sư
                </label>
              </div>

              <div className="item-filter">
                <input
                  id="filter-3"
                  className="radio"
                  name="filter"
                  type="radio"
                  value="all"
                ></input>
                <label for="filter-3">
                  <span></span>
                  Trợ thủ
                </label>
              </div>

              <div className="item-filter">
                <input
                  id="filter-4"
                  className="radio"
                  name="filter"
                  type="radio"
                  value="all"
                ></input>
                <label for="filter-4">
                  <span></span>
                  Đỡ đòn
                </label>
              </div>

              <div className="item-filter">
                <input
                  id="filter-5"
                  className="radio"
                  name="filter"
                  type="radio"
                  value="all"
                ></input>
                <label for="filter-5">
                  <span></span>
                  Sát thủ
                </label>
              </div>

              <div className="item-filter">
                <input
                  id="filter-6"
                  className="radio"
                  name="filter"
                  type="radio"
                  value="all"
                ></input>
                <label for="filter-6">
                  <span></span>
                  Xạ thủ
                </label>
              </div>
            </div>

            <div className="bx-search">
              <form className="search">
                <input
                  type="text"
                  id="filter-name"
                  className="input"
                  placeholder="Nhập tên tướng ..."
                ></input>
              </form>
            </div>

            <div className="bx-list-hero">
              <ul className="list-hero overflow-hidden">
                <li id="champion-1" className="list-champion">
                  <span className="tags hidden" tag="1" type="6">
                    Valhein, valhein
                  </span>
                  <div className="heroes">
                    <a href="!#">
                      <img
                        src="https://lienquan.garena.vn/files/champion/icon/4b36c6e5e2d1ce9dd9e2841d2902043c5ee04efeb2f2d.jpg"
                        alt="img"
                      ></img>
                    </a>
                    <p
                      data-id="1"
                      data-type="6"
                      data-name="Valhein"
                      className="name whitespace-nowrap mt-1 text-center"
                    >
                      Valhein
                    </p>
                  </div>
                </li>

                <li id="champion-1" className="list-champion">
                  <span className="tags hidden" tag="2" type="4">
                    Ata, ata
                  </span>
                  <div className="heroes">
                    <a href="!#">
                      <img
                        src="https://lienquan.garena.vn/files/champion/icon/71f7a36c0dd250ce0affeffcf14360f45e57c0420b4b6.jpg"
                        alt="img"
                      ></img>
                    </a>
                    <p
                      data-id="2"
                      data-type="4"
                      data-name="Florentino"
                      className="name whitespace-nowrap mt-1 text-center"
                    >
                      Ata
                    </p>
                  </div>
                </li>

                <li id="champion-1" className="list-champion">
                  <span className="tags hidden" tag="105" type="2">
                    Lorion, lorion
                  </span>
                  <div className="heroes">
                    <a href="!#">
                      <img
                        src="https://lienquan.garena.vn/files/champion/icon/dab2c45af3206cd0ac30b450357aa8ce5fc5264d71f45.jpg"
                        alt="img"
                      ></img>
                    </a>
                    <p
                      data-id="2"
                      data-type="4"
                      data-name="Florentino"
                      className="name whitespace-nowrap mt-1 text-center"
                    >
                      Lorion
                    </p>
                  </div>
                </li>

                <li id="champion-1" className="list-champion">
                  <span className="tags hidden" tag="105" type="2">
                    Sephera, sephera
                  </span>
                  <div className="heroes">
                    <a href="!#">
                      <img
                        src="https://lienquan.garena.vn/files/champion/icon/eef053fb25793d536185559e8bf5a82d5c132caaa102e.jpg"
                        alt="img"
                      ></img>
                    </a>
                    <p
                      data-id="2"
                      data-type="4"
                      data-name="Florentino"
                      className="name whitespace-nowrap mt-1 text-center"
                    >
                      Sephera
                    </p>
                  </div>
                </li>

                <li id="champion-1" className="list-champion">
                  <span className="tags hidden" tag="105" type="2">
                    Taara, taara
                  </span>
                  <div className="heroes">
                    <a href="!#">
                      <img
                        src="https://lienquan.garena.vn/files/champion/icon/f69423f533b12cbcd8ab15a7127e1e445e79e0b77e4ec.jpg"
                        alt="img"
                      ></img>
                    </a>
                    <p
                      data-id="2"
                      data-type="4"
                      data-name="Florentino"
                      className="name whitespace-nowrap mt-1 text-center"
                    >
                      Taara
                    </p>
                  </div>
                </li>

                <li id="champion-1" className="list-champion">
                  <span className="tags hidden" tag="105" type="2">
                    Batman, batman
                  </span>
                  <div className="heroes">
                    <a href="!#">
                      <img
                        src="https://lienquan.garena.vn/files/champion/icon/36c65a1b6446ee0b34260fa7cbb9a04c5955d4504884a.jpg"
                        alt="img"
                      ></img>
                    </a>
                    <p
                      data-id="2"
                      data-type="4"
                      data-name="Florentino"
                      className="name whitespace-nowrap mt-1 text-center"
                    >
                      Batman
                    </p>
                  </div>
                </li>

                <li id="champion-1" className="list-champion">
                  <span className="tags hidden" tag="105" type="2">
                    Tel'Annas, tel'anas
                  </span>
                  <div className="heroes">
                    <a href="!#">
                      <img
                        src="https://lienquan.garena.vn/files/champion/icon/5064b1bbcb8dcac94f88292537d6c35459e96577aa90c.jpg"
                        alt="img"
                      ></img>
                    </a>
                    <p
                      data-id="2"
                      data-type="4"
                      data-name="Florentino"
                      className="name whitespace-nowrap mt-1 text-center"
                    >
                      Tel'Annas
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </>
  );
}
