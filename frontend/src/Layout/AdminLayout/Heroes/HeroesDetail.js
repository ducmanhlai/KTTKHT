import React, { useState, useEffect } from "react";
import axios from "axios";
import VanHeilImage from "../../../img/Vanheil.jpg";
import "./HeroesDetail.scss";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { FaPencilAlt, FaPlus } from "react-icons/fa";

export default function HeroDetail() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState();
  const handleClose = () => setShow(false);

  let Types = [
    { name: "Đấu sĩ" },
    { name: "Pháp sư" },
    { name: "Trợ thủ" },
    { name: "Đỡ đòn" },
    { name: "Sát thủ" },
    { name: "Xạ thủ" },
  ];

  async function getHeroes() {
    const result = await axios.get(
      "http://localhost:8081/api/v1/hero/get?id=1"
    );
    setList(result?.data.data);
    console.log(result.data);
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleShowEdit = (e) => {
    setForm("edit");
    // setName(e.currentTarget.title);
    // setID(e.currentTarget.id);
    setShow(true);
  };
  const handleShowAdd = (e) => {
    // setName(null);
    // setID(null);
    setForm("add");
    setShow(true);
  };

  const handleSubmit = () => {
    setShow(false);
  };

  useEffect(() => {
    getHeroes();
  }, []);

  return (
    <div className="hero">
      <section className="hero-page pb-12">
        <div className="inner-page mx-auto my-0 relative">
          <div className="skin-hero ">
            <h2 className="title text-4xl text-center ">Vanheil</h2>
            <div className="bxskin">
              <div className="cont-skin">
                <div className="tabs-content-skin">
                  <img src={VanHeilImage} alt="img"></img>
                </div>
              </div>
              <div className="numeral"></div>
            </div>
          </div>
          <div className="bxnumeral">
            <div className="headbx">
              <span className="txt">Chỉ số</span>
              <div className="edit-heroes-button">
                <button
                  className="edit-heroes-btn float-right"
                  onClick={handleShowEdit}
                >
                  <FaPencilAlt />
                </button>
              </div>
              <div className="nice-select level"></div>
            </div>

            <div className="cont">
              <div className="col">
                <p>
                  <label>Công vật lý</label>
                  <span className="champion_stat">
                    {list && list.attackDamage}
                    {/* {list.price} */}
                    {/* {console.log(list)} */}
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
                  <div className="col-skill">
                    <div className="item-skill">
                      <div className="img-skill">
                        <img
                          src="	https://lienquan.garena.vn/files/skill/icon/b3fccac3d3894113f82174d3ec963500583e9cb3ac80c.png"
                          alt="img"
                        ></img>
                      </div>
                      <div className="in-skill">
                        <h2 className="name">Ám sát</h2>
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
                  <div className="edit-heroes-button">
                    <button
                      className="edit-heroes-btn float-right"
                      onClick={handleShowEdit}
                    >
                      <FaPencilAlt />
                    </button>
                    <button
                      className="edit-heroes-btn edit-heroes-btn-2 float-right"
                      onClick={handleShowAdd}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "tab2" && (
                <div id="tab-2" className="tabs-content">
                  <p>
                    Ta từng là hy vọng duy nhất của nhân loại trong cả thế kỷ
                    chiến tranh với ma cà rồng
                  </p>
                  <p>
                    <br />
                    Trước khi trở thành Thợ săn ác quỷ, cả dòng họ của Valhein
                    đều chỉ là cống phẩm đối với bè lũ Huyết tộc. Họ chỉ đơn
                    giản là lũ dê béo được nuôi dưỡng hàng ngày chờ đến khi
                    Huyết tộc cần cung cấp lương thực mà thôi. Là thành viên ưu
                    tú nhất của cả dòng họ, Valhein quyết không thể tiếp tục số
                    phận đen tối này, anh đã cùng khẩu súng huyền thoại của mình
                    phá nát gông cùm xiềng xích của bầy Huyết tộc một lần và mãi
                    mãi.
                  </p>
                  <p>
                    <br />
                    Sự phản kháng của Valhein nhanh chóng lan truyền như một
                    ngọn lửa hừng hực cháy. Càng ngày càng có nhiều thành viên
                    gia nhập hơn, và cũng từ đây Valhein đã kết bạn với người
                    đồng hành thân cận nhất của mình, Violet. Tuy nhiên kể cả có
                    lớn mạnh bao nhiêu đi chăng nữa, dường như sự chống cự của
                    một bộ phận nhân loại vẫn quá nhỏ trước ách thống trị vững
                    chắc hàng thế kỷ của Huyết tộc.
                  </p>
                  <p>
                    <br />
                    Trước sự phản công cuồng bạo của Huyết tộc, Valhein quyết
                    dẫn dắt tất cả lực lượng phản kháng tìm đến Lâu đài khởi
                    nguyên hòng tìm được sự che chở. Nhằm bảo đảm tốp đầu được
                    đến nơi an toàn, Valhein đã cùng Violet và các chiến sĩ tài
                    năng nhất ở lại để chặn hậu. Dẫu chiến thắng và mang được
                    những đồng đội còn sống sót đến với an toàn, nhưng cái giá
                    phải trả vẫn quá cao, Valhein thề sẽ có ngày anh khiến bè lũ
                    Huyết tộc trả giá cho những tội ác của chúng.
                  </p>
                  <p>
                    <br />
                    Nhân danh trời đất, ta thề sẽ quét sạch mọi thế lực bóng tối
                    và bè lũ Huyết tộc khỏi thế giới này!
                  </p>
                  <div className="edit-heroes-button">
                    <button
                      className="edit-heroes-btn float-right"
                      onClick={handleShowEdit}
                    >
                      <FaPencilAlt />
                    </button>
                    <button
                      className="edit-heroes-btn edit-heroes-btn-2 float-right"
                      onClick={handleShowAdd}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "tab3" && (
                <div id="tab-2" className="tabs-content">
                  <p>
                    Liên hệ{"  "}
                    <a
                      href="https://www.facebook.com/xiaoming4869"
                      className="no-underline"
                    >
                      XiaoMing{"  "}
                    </a>
                    để học hỏi kĩ năng trở thành 1 best Vanheil
                  </p>
                  <div className="edit-heroes-button">
                    <button
                      className="edit-heroes-btn float-right"
                      onClick={handleShowEdit}
                    >
                      <FaPencilAlt />
                    </button>
                    <button
                      className="edit-heroes-btn edit-heroes-btn-2 float-right"
                      onClick={handleShowAdd}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {
        <Modal size="sl" show={show} onHide={handleClose} animation={true}>
          <Modal.Header className="bg-green" closeButton>
            <Modal.Title centered className="text-white text-center">
              Chỉnh sửa chỉ số tướng
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="HeroName">
                    <Form.Label className="text-black">Tên tướng</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Florentino"
                      name="name"
                      required
                      // value={hero_name}
                      // onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="HeroPrice">
                    <Form.Label className="text-black">Giá vàng</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="25888"
                      name="price"
                      required
                      // value={hero_price}
                      // onChange={(e) => setPrice(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="HeroCoin">
                    <Form.Label className="text-black">Giá quân huy</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="599"
                      name="coin"
                      required
                      // value={hero_coin}
                      // onChange={(e) => setCoin(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="HeroImage">
                    <Form.Label className="text-black">Ảnh tướng</Form.Label>
                    <Form.Control
                      type="file"
                      // placeholder="Chọn ảnh tướng"
                      // onChange={this.fileSelectedHandle}
                    />
                    {/* {this.state.img && (
                <img
                  src={this.state.img}
                  height={90}
                  width={90}
                  alt="img"
                  className="d-block"
                />
              )} */}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="HeroAttackDamage">
                    <Form.Label className="text-black">Công vật lý</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="170"
                      name="attackDamage"
                      required
                      // value={hero_attack_damage}
                      // onChange={(e) => setAttackDamage(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="HeroMagicDamage">
                    <Form.Label className="text-black">Công phép</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="0"
                      name="magicDamage"
                      required
                      // value={hero_magic_damage}
                      // onChange={(e) => setMagicDamage(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="HeroBlood">
                    <Form.Label className="text-black">Máu tối đa</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="3235"
                      name="blood"
                      required
                      // value={hero_blood}
                      // onChange={(e) => setBlood(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="HeroArmor">
                    <Form.Label className="text-black">Giáp</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="89"
                      name="armor"
                      required
                      // value={hero_armor}
                      // onChange={(e) => setArmor(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="HeroMagicArmor">
                    <Form.Label className="text-black">Giáp phép</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="50"
                      name="magicArmor"
                      required
                      // value={hero_magic_armor}
                      // onChange={(e) => setMagicDamage(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="HeroAttackDamage">
                    <Form.Label className="text-black">Tốc đánh</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="0"
                      name="attackDamage"
                      required
                      // value={hero_attack_damage}
                      // onChange={(e) => setAttackDamage(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="HeroSpeed">
                    <Form.Label className="text-black">Tốc chạy</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="380"
                      name="speed"
                      required
                      // value={hero_speed}
                      // onChange={(e) => setSpeed(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="HeroMana">
                    <Form.Label className="text-black">
                      Hồi năng lượng/5s
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="50"
                      name="mana"
                      required
                      // value={hero_mana}
                      // onChange={(e) => setMana(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="HeroArmorPierce">
                    <Form.Label className="text-black">Xuyên giáp</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="250"
                      name="armorPierce"
                      required
                      // value={hero_armor_pierce}
                      // onChange={(e) => setArmorPierce(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="HeroMagicPierce">
                    <Form.Label className="text-black">
                      Xuyên giáp phép
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="0"
                      name="magicPierce"
                      required
                      // value={hero_magic_pierce}
                      // onChange={(e) => setmagicPierce(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="HeroType">
                    <Form.Label className="text-black">Vai trò</Form.Label>
                    <Form.Control
                      as="select"
                      // onChange={(event) =>
                      //   this.handleOnChangeInput(event, "id_category")
                      // }
                      // value={this.state.id_category}
                    >
                      <option>Chọn vai trò</option>
                      {Types &&
                        Types.map((hero, index) => {
                          return (
                            <>
                              <option key={hero.id}>{hero.name}</option>
                            </>
                          );
                        })}
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleSubmit}>
              {form === "edit" ? "Cập Nhật" : "Thêm"}
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Đóng
            </Button>
          </Modal.Footer>
        </Modal>
      }
    </div>
  );
}
