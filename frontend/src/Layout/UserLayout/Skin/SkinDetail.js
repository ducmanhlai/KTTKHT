import React, { useState, useEffect } from "react";
import axios from "axios";
import link from "../../../config/base";
import axiosApiInstance from "../../../config/interceptor";
import toast, { Toaster } from "react-hot-toast";
import "./SkinDetail.scss";

import Hair from "../../../img/SkinImage/toc.jpg";

export default function SkinDetail() {
  const [listSkin, setListSkin] = useState({});
  const [activeTab, setActiveTab] = useState("tab1");

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");
  useEffect(() => {
    (async () => {
      const data = await (
        await axiosApiInstance.get(`/api/v1/skin/get?id=${id}`)
      ).data.data;
      setListSkin({ ...data });
      console.log(listSkin);
    })().catch((err) => {
      console.log(err);
      toast.error("Có lỗi xảy ra");
    });
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="skin-detail">
      <section className="skin-detail-page pb-12">
        <div className="inner-page mx-auto my-0 relative">
          <div className="skin-hero">
            <h2 className="title text-4xl text-center">
              {listSkin.id_hero_hero?.name} {listSkin.name}
            </h2>
            <div className="bxskin">
              <div className="cont-skin">
                <div className="tabs-content-skin">
                  <img
                    src={`${link.LINK_PUBLIC}${listSkin.avatar}`}
                    alt="img"
                  ></img>
                </div>
              </div>
              <div className="numeral"></div>
            </div>
          </div>
          <div className="bxnumeral">
            <div className="headbx">
              <span className="txt">Thông tin</span>
            </div>

            <div className="cont">
              <div className="col">
                <p>
                  <label>Giá</label>
                  <span className="champion_stat">
                    {listSkin && listSkin.price} Quân Huy
                  </span>
                </p>
                <p>
                  <label>Thuộc tướng</label>
                  <span className="champion_stat">
                    {listSkin && listSkin.id_hero_hero?.name}
                  </span>
                </p>
              </div>
              <div className="col">
                <p>
                  <label>Bậc trang phục</label>
                  <span className="champion_stat">
                    {listSkin && listSkin.classify_type_skin?.name}
                  </span>
                </p>
                <p>
                  <label>Thưởng sau trận</label>
                  <span className="champion_stat">20% vàng & 30% EXP</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bxskill">
            <ul className="tabs-all tabs-link">
              <li
                className={activeTab === "tab1" ? "active" : ""}
                onClick={() => handleTabClick("tab1")}
              >
                <div className="txtskill">Phụ kiện</div>
              </li>
              <li
                className={activeTab === "tab2" ? "active" : ""}
                onClick={() => handleTabClick("tab2")}
              >
                <div className="txtskill">Thưởng sau trận</div>
              </li>
              <li
                className={activeTab === "tab3" ? "active" : ""}
                onClick={() => handleTabClick("tab3")}
              >
                <div className="txtskill">Điệu nhảy</div>
              </li>
            </ul>

            <div className="cont-skill">
              {activeTab === "tab1" && (
                <div id="tab-1" className="tabs-content">
                  {listSkin.items && listSkin.items.length > 0
                    ? listSkin.items.map((item, index) => {
                        return (
                          <div className="col-skill">
                            <div className="item-skill" key={index}>
                              <div className="img-skill">
                                <img src={Hair} alt="img"></img>
                              </div>
                              <div className="in-skill">
                                <h2 className="name-skill">
                                  {listSkin && listSkin.items[0].name}
                                </h2>
                                <div className="txt"></div>
                                <div className="txt"></div>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : null}
                </div>
              )}

              {activeTab === "tab2" && (
                <div id="tab-2" className="tabs-content">
                  <p className="text-light_green">
                    Số vàng nhận được mỗi trận + số vàng hoàn thành 4 trận hàng
                    ngày + vàng từ điểm uy tín + Vàng nhận từ bạn bè + Vàng
                    thưởng khi sử dụng skin.
                  </p>
                  <p className="text-dark_blue">
                    Vàng nhận được mỗi trận: 3500 vàng/ Tuần
                  </p>
                  <p className="text-dark_blue">
                    Vàng nhận được từ 4 trận đấu mỗi ngày: 2240 vàng/ Tuần
                  </p>
                  <p className="text-dark_blue">
                    Vàng nhận được nếu đủ 100 Uy tín: 840 vàng/ Tuần
                  </p>
                  <p className="text-dark_blue">
                    Vàng nhận được từ bạn bè: 175 vàng/
                  </p>
                  <p className="text-dark_blue">
                    Tuần Vàng thưởng thêm khi dùng trang phục: 350 vàng/ Tuần
                  </p>
                </div>
              )}

              {activeTab === "tab3" && (
                <div id="tab-3" className="tabs-content">
                  <p className="ask">Coming soon !</p>
                  <br />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
