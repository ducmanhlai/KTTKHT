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
  useEffect(() => {
    (async () => {
      const data = await (await axios.get("/api/v1/hero/get")).data.data;
      setListHero(data);
    })().catch((err) => {
      console.log(err);
    });
  }, []);
  return (
    <>
      <Toaster
        toastOptions={{
          className: "",
          duration: 1700,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 1500,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      ></Toaster>
      <Slider />
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
