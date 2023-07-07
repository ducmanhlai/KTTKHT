import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./HeroDetail.scss";
import axios from "../../../config/axios";
import link from "../../../config/base";
import SkillImg from "../../../img/vanheoskillimg.png";

export default function HeroDetail() {
  const [list, setList] = useState({});
  const [activeTab, setActiveTab] = useState("tab1");

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");
  useEffect(() => {
    (async () => {
      const data = await (
        await axios.get(`/api/v1/hero/get?id=${id}`)
      ).data.data;
      setList({ ...data });
      console.log(list);
    })().catch((err) => {
      console.log(err);
      toast.error("Có lỗi xảy ra");
    });
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="hero-detail">
      <section className="hero-detail-page pb-12">
        <div className="inner-page mx-auto my-0 relative">
          <div className="skin-hero">
            <h2 className="title text-4xl text-center">{list.name}</h2>
            <div className="bxskin">
              <div className="cont-skin">
                <div className="tabs-content-skin">
                  <img
                    src={`${link.LINK_PUBLIC}${list.avatar}`}
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

              <div className="nice-select level"></div>
            </div>

            <div className="cont">
              <div className="col">
                <p>
                  <label>Công vật lý</label>
                  <span className="champion_stat">
                    {list && list.attackDamage}
                  </span>
                </p>
                <p>
                  <label>Công phép</label>
                  <span className="champion_stat">
                    {list && list.magicDamage}
                  </span>
                </p>
                <p>
                  <label>Máu tối đa</label>
                  <span className="champion_stat">{list && list.baseHp}</span>
                </p>
                <p>
                  <label>Giáp</label>
                  <span className="champion_stat">{list && list.armor}</span>
                </p>
                <p>
                  <label>Giáp phép</label>
                  <span className="champion_stat">
                    {list && list.magicDefense}
                  </span>
                </p>
              </div>
              <div className="col">
                <p>
                  <label>Tốc đánh</label>
                  <span className="champion_stat">
                    {list && list.attackSpeed}
                  </span>
                </p>
                <p>
                  <label>Tốc chạy</label>
                  <span className="champion_stat">{list && list.speed}</span>
                </p>
                <p>
                  <label>Hồi năng lượng/5s</label>
                  <span className="champion_stat">{list && list.mana}</span>
                </p>
                <p>
                  <label>Xuyên giáp</label>
                  <span className="champion_stat">
                    {list && list.armorPierce}
                  </span>
                </p>
                <p>
                  <label>Xuyên giáp phép</label>
                  <span className="champion_stat">
                    {list && list.magicPierce}
                  </span>
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
                <div className="txtskill">Kỹ năng</div>
              </li>
              <li
                className={activeTab === "tab2" ? "active" : ""}
                onClick={() => handleTabClick("tab2")}
              >
                <div className="txtskill">Cốt truyện</div>
              </li>
              <li
                className={activeTab === "tab3" ? "active" : ""}
                onClick={() => handleTabClick("tab3")}
              >
                <div className="txtskill">Hướng dẫn</div>
              </li>
            </ul>

            <div className="cont-skill">
              {activeTab === "tab1" && (
                <div id="tab-1" className="tabs-content">
                  {list.skill_heros && list.skill_heros.length > 0
                    ? list.skill_heros.map((item, index) => {
                        return (
                          <div className="col-skill">
                            <div className="item-skill" key={index}>
                              <div className="img-skill">
                                <img src={SkillImg} alt="img"></img>
                              </div>
                              <div className="in-skill">
                                <h2 className="name-skill">{item.name}</h2>
                                <div className="txt">
                                  {item.type_damage_type_damage.description}
                                </div>
                                <div className="txt">{item.description}</div>
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
                  <p>
                    Ta từng là hy vọng duy nhất của nhân loại trong cả thế kỷ
                    chiến tranh với ma cà rồng.
                    <br />
                    <br />
                    Trước khi trở thành Thợ săn ác quỷ, cả dòng họ của{" "}
                    {list.name} đều chỉ là cống phẩm đối với bè lũ Huyết tộc. Họ
                    chỉ đơn giản là lũ dê béo được nuôi dưỡng hàng ngày chờ đến
                    khi Huyết tộc cần cung cấp lương thực mà thôi. Là thành viên
                    ưu tú nhất của cả dòng họ, {list.name} quyết không thể tiếp
                    tục số phận đen tối này, anh đã cùng khẩu súng huyền thoại
                    của mình phá nát gông cùm xiềng xích của bầy Huyết tộc một
                    lần và mãi mãi.
                    <br />
                    <br />
                    Sự phản kháng của {list.name} nhanh chóng lan truyền như một
                    ngọn lửa hừng hực cháy. Càng ngày càng có nhiều thành viên
                    gia nhập hơn, và cũng từ đây {list.name} đã kết bạn với
                    người đồng hành thân cận nhất của mình, Violet. Tuy nhiên kể
                    cả có lớn mạnh bao nhiêu đi chăng nữa, dường như sự chống cự
                    của một bộ phận nhân loại vẫn quá nhỏ trước ách thống trị
                    vững chắc hàng thế kỷ của Huyết tộc.
                    <br />
                    <br />
                    Trước sự phản công cuồng bạo của Huyết tộc, {list.name}{" "}
                    quyết dẫn dắt tất cả lực lượng phản kháng tìm đến Lâu đài
                    khởi nguyên hòng tìm được sự che chở. Nhằm bảo đảm tốp đầu
                    được đến nơi an toàn, {list.name} đã cùng Violet và các
                    chiến sĩ tài năng nhất ở lại để chặn hậu. Dẫu chiến thắng và
                    mang được những đồng đội còn sống sót đến với an toàn, nhưng
                    cái giá phải trả vẫn quá cao, {list.name} thề sẽ có ngày anh
                    khiến bè lũ Huyết tộc trả giá cho những tội ác của chúng.
                    <br />
                    <br />
                    Nhân danh trời đất, ta thề sẽ quét sạch mọi thế lực bóng tối
                    và bè lũ Huyết tộc khỏi thế giới này!
                  </p>
                </div>
              )}

              {activeTab === "tab3" && (
                <div id="tab-3" className="tabs-content">
                  <p className="ask">Bạn là người mới chơi Liên Quân Mobile?</p>
                  <br />
                  <p className="ideal">Bạn thấy {list.name} quá khó chơi?</p>
                  <br />
                  <p className="no-worry">Đừng lo !!!</p>
                  <br />
                  <p className="contact">
                    Hãy liên hệ ngay {"  "}
                    <a
                      href="https://www.facebook.com/xiaoming4869"
                      className="no-underline"
                    >
                      小 明 先 生 {"  "}
                    </a>
                    để học hỏi kĩ năng trở thành 1 best {list.name}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
