import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import imgVanheo from "../../img/vanheo.jpg";
import "./HeroDetail.scss";

export default function HeroDetail() {
  return (
    <div className="hero">
      <Header />

      <section className="hero-page pb-12">
        <div className="inner-page mx-auto my-0 relative">
          <div className="skin-hero ">
            <h2 className="title text-4xl text-center ">Vanheil</h2>
            <div className="bxskin relative">
              <div className="cont-skin">
                <div className="tabs-content-skin">
                  <img
                    src="https://lienquan.garena.vn/files/skin/83d9de6ce9963f9ea406db2edd81707f5ee04e7551643.jpg"
                    alt="img"
                  ></img>
                </div>
              </div>
              <div className="numeral"></div>
            </div>
          </div>
          <div className="bxnumeral">
            <div className="headbx">
              <span className="txt">Chỉ số</span>
              {/* <select className="lever hidel"></select> */}

              <div className="nice-select level"></div>
            </div>

            <div className="cont">
              <div className="col">
                <p>
                  <label>Công vật lý</label>
                  <span className="champion_stat">173</span>
                </p>
                <p>
                  <label>Công phép</label>
                  <span className="champion_stat">0</span>
                </p>
                <p>
                  <label>Máu tối đa</label>
                  <span className="champion_stat">3592</span>
                </p>
                <p>
                  <label>Giáp</label>
                  <span className="champion_stat">141</span>
                </p>
                <p>
                  <label>Giáp phép</label>
                  <span className="champion_stat">80</span>
                </p>
                <p>
                  <label>Tốc đánh</label>
                  <span className="champion_stat">0</span>
                </p>
              </div>
              <div className="col">
                <p>
                  <label>Giảm hồi chiêu</label>
                  <span className="champion_stat">0</span>
                </p>
                <p>
                  <label>Tỉ lệ chí mạng</label>
                  <span className="champion_stat">0</span>
                </p>
                <p>
                  <label>Tốc chạy</label>
                  <span className="champion_stat">360</span>
                </p>
                <p>
                  <label>Hồi máu / 5s</label>
                  <span className="champion_stat">50</span>
                </p>
                <p>
                  <label>Hồi năng lượng /5s</label>
                  <span className="champion_stat">15</span>
                </p>
                <p>
                  <label>Tầm đánh</label>
                  <span className="champion_stat">Gần</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bxskill">
            <ul className="tabs-all tabs-link">
              <li className="current">
                <div className="txtskill">Kỹ năng</div>
              </li>
            </ul>
            <div className="cont-skill">
              <div id="tab-1" className="tabs-content">
                <div className="col-skill">
                  <div className="item-skill">
                    <div className="img-skill">
                      <img
                        src="	https://lienquan.garena.vn/files/skill/icon/b3fccac3d3894113f82174d3ec963500583e9cb3ac80c.png"
                        alt="img"
                      ></img>
                    </div>
                    <div className="in-skill">
                      <h2 className="name">Ám Khí</h2>
                      <div className="txt">Mô tả</div>
                    </div>
                  </div>
                  <div className="item-skill">
                    <div className="img-skill">
                      <img
                        src="	https://lienquan.garena.vn/files/skill/icon/c40655d6952c05bcb1e43aec3037328e583e9d0761f74.png"
                        alt="img"
                      ></img>
                    </div>
                    <div className="in-skill">
                      <h2 className="name">Chuyến săn mạo hiểm</h2>
                      <div className="txt"> Mô tả</div>
                    </div>
                  </div>
                </div>
                <div className="col-skill">
                  <div className="item-skill">
                    <div className="img-skill">
                      <img
                        src="		https://lienquan.garena.vn/files/skill/icon/1ec3d200fd56cb45b716d1d5ee94a746583e9d4397bca.png"
                        alt="img"
                      ></img>
                    </div>
                    <div className="in-skill">
                      <h2 className="name">Lời Nguyền Tử Vong</h2>
                      <div className="txt">Mô tả</div>
                    </div>
                  </div>
                  <div className="item-skill">
                    <div className="img-skill">
                      <img
                        src="	https://lienquan.garena.vn/files/skill/icon/0fd55b686edc386f5f1937a09de2d1f1583e9d6a7fcc5.png"
                        alt="img"
                      ></img>
                    </div>
                    <div className="in-skill">
                      <h2 className="name">Bão Đạn</h2>
                      <div className="txt"> Mô tả</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
