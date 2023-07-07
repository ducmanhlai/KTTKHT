import React, { useState, useEffect } from "react";
import axiosApiInstance from "../../../config/interceptor";
import AcademyNavigation from "../../UserLayout/AcademyNavigation/Anav";
import "./Skin.scss";
import { FaEye } from "react-icons/fa";
import link from "../../../config/base";
import Slider from "../Slider/Slider";

export default function Skin() {
  const [list, setList] = useState([]);
  const [listHero, setListHero] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const baseURL = "http://localhost:8081/public/images/";

  let Types = [
    { id: 1, name: "Bậc A" },
    { id: 2, name: "Bậc S" },
    { id: 3, name: "Bậc S+" },
    { id: 4, name: "Bậc SS" },
    { id: 6, name: "Bậc SSS" },
    { id: 6, name: "Bậc SS hữu hạn" },
  ];

  async function getHeroes() {
    const result = await axiosApiInstance.get(
      axiosApiInstance.defaults.baseURL + "/api/v1/hero/get"
    );
    setListHero(result?.data.data);
    // console.log(result.data);
  }

  async function getSkins() {
    const result = await axiosApiInstance.get(
      axiosApiInstance.defaults.baseURL + "/api/v1/skin/get"
    );
    setList(result?.data.data);
    // console.log(result.data);
  }

  useEffect(() => {
    getHeroes();
    getSkins();
  }, []);

  return (
    <>
      <Slider />
      <section className="main-container">
        <AcademyNavigation />

        <div className="skin-page">
          <div className="inner-page">
            <div className="filter-skin">
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
                  Tất Cả
                </label>
              </div>
              {Types.map((type) => (
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
                    {type.name}
                  </label>
                </div>
              ))}
            </div>

            <div className="bx-search">
              <form className="search">
                <input
                  type="text"
                  id="filter-name"
                  className="input"
                  placeholder="Nhập tên trang phục ..."
                ></input>
              </form>
            </div>

            <div className="list-skins">
              <ul className="list-skin overflow-hidden">
                {list.map((hero) => (
                  <li key={hero.id} id="champion-1" className="list-champion">
                    <div className="heroes">
                      <a href={`skin/detail?id=${hero.id}`}>
                        <img
                          src={baseURL + hero.avatar}
                          alt="img"
                          className="hover:opacity-75"
                        ></img>
                      </a>
                      <p
                        data-id="1"
                        data-type="6"
                        className="hero-name mt-2 text-center"
                      >
                        {hero.name}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
