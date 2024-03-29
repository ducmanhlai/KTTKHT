import React, { useEffect, useState } from "react";
import "./Hero.scss";
import AcademyNavigation from "../../UserLayout/AcademyNavigation/Anav";
import toast, { Toaster } from "react-hot-toast";
import axios from "../../../config/axios";
import axiosApiInstance from "../../../config/interceptor";
import Slider from "../Slider/Slider";
export default function Hero() {
  const [listHero, setListHero] = useState([]);
  const baseURL = "http://localhost:8081/public/images/";

  let Types = [
    { id: 1, name: "Sát thủ" },
    { id: 2, name: "Pháp sư" },
    { id: 3, name: "Xạ thủ" },
    { id: 4, name: "Trợ thủ" },
    { id: 5, name: "Đỡ đòn" },
    { id: 6, name: "Đấu sĩ" },
  ];

  async function getHeroes() {
    const result = await axiosApiInstance.get(
      axiosApiInstance.defaults.baseURL + "/api/v1/hero/get"
    );
    setListHero(result?.data.data);
    // console.log(result.data);
  }

  useEffect(() => {
    getHeroes();
  }, []);

  return (
    <>
      <Slider />
      <section className="main-container">
        <AcademyNavigation />

        <section className="hero-page pb-12">
          <div className="inner-page">
            <div className="filter-hero">
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
                  placeholder="Nhập tên tướng ..."
                ></input>
              </form>
            </div>

            <div className="bx-list-hero">
              <ul className="list-hero overflow-hidden ">
                {listHero.length != 0 ? (
                  listHero.map((item, index) => {
                    return (
                      <li id="champion-1" className="list-champion" key={index}>
                        <span className="tags hidden" tag="1" type="6">
                          {item.name}
                        </span>
                        <div className="heroes">
                          <a href={`hero/detail?id=${item.id}`}>
                            <img
                              src={baseURL + item.avatar}
                              alt="img"
                              className="hover:opacity-75"
                            ></img>
                          </a>
                          <p
                            data-id="1"
                            data-type="6"
                            className="hero-name whitespace-nowrap mt-2 text-center"
                          >
                            {item.name}
                          </p>
                        </div>
                      </li>
                    );
                  })
                ) : (
                  <div>Đang tải</div>
                )}
              </ul>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
