import React, { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./HeroDetail.scss";
import axios from "../../config/axios";
import link from '../../config/base'
export default function HeroDetail() {
  const [hero, setHero] = useState({});
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id')
  useEffect(() => {
    (async () => {
      const data = (await (await axios.get(`/api/v1/hero/get?id=${id}`)).data.data);
      setHero({ ...data })
      console.log(hero)
    })().catch(err => {
      console.log(err);
      toast.error('Có lỗi xảy ra')
    })
  }, [])
  return (
    <div className="hero">
      <Header />
      <Toaster
        toastOptions={{
          className: '',
          duration: 1700,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 1500,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      ></Toaster>
      <section className="hero-page pb-12">
        <div className="inner-page mx-auto my-0 relative">
          <div className="skin-hero ">
            <h2 className="title text-4xl text-center ">{hero.name}</h2>
            <div className="bxskin relative">
              <div className="cont-skin">
                <div className="tabs-content-skin">
                  <img
                    src={`${link.LINK_PUBLIC}${hero.avatar}`}
                    alt="img"
                    loading="lazy"
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
                  <span className="champion_stat">{hero.attackDamage}</span>
                </p>
                <p>
                  <label>Công phép</label>
                  <span className="champion_stat">{hero.magicDamage}</span>
                </p>
                <p>
                  <label>Máu tối đa</label>
                  <span className="champion_stat">{hero.baseHp}</span>
                </p>
                <p>
                  <label>Giáp</label>
                  <span className="champion_stat">{hero.armor}</span>
                </p>
                <p>
                  <label>Giáp phép</label>
                  <span className="champion_stat">{hero.magicDefense}</span>
                </p>
                <p>
                  <label>Tốc đánh</label>
                  <span className="champion_stat">{hero.attackSpeed}</span>
                </p>
              </div>
              <div className="col">
                <p>
                  <label>Tỉ lệ chí mạng</label>
                  <span className="champion_stat">0</span>
                </p>
                <p>
                  <label>Tốc chạy</label>
                  <span className="champion_stat">{hero.speed}</span>
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
                  {hero?.skill_heros ? hero.skill_heros.map((item, index) => {
                    return (
                      <div className="item-skill" key={index}>
                      <div className="img-skill">
                        <img
                          src="	https://lienquan.garena.vn/files/skill/icon/0fd55b686edc386f5f1937a09de2d1f1583e9d6a7fcc5.png"
                          alt="img"
                        ></img>
                      </div>
                      <div className="in-skill">
                        <h2 className="name">{item.name}</h2>
                        <div className="txt">{item.type_damage_type_damage.description}</div>
                        <div className="txt">{item.description}</div>
                      </div>
                    </div>
                    ) 
                  }): null}
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
