import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import link from "../../../config/base";
import axiosApiInstance from "../../../config/interceptor";

import "./HeroesDetail.scss";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { FaPencilAlt, FaPlus } from "react-icons/fa";

export default function HeroDetail() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [list, setList] = useState([]);

  // const [form, setForm] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [formStory, setFormStory] = useState();
  const [showStory, setShowStory] = useState(false);
  const handleCloseStory = () => setShowStory(false);

  const [formSkill, setFormSkill] = useState();
  const [showSkill, setShowSkill] = useState(false);
  const handleCloseSkill = () => setShowSkill(false);

  const [change, setChange] = useState(false);

  //Hero Info
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [coin, setCoin] = useState();
  const [avatar, setAvatar] = useState();
  const [attackDamage, setAttackDamage] = useState();
  const [magicDamage, setMagicDamage] = useState();
  const [baseHp, setBaseHp] = useState();
  const [armor, setArmor] = useState();
  const [magicArmor, setMagicArmor] = useState();
  const [attackSpeed, setAttackSpeed] = useState();
  const [speed, setSpeed] = useState();
  const [mana, setMana] = useState();
  const [armorPierce, setArmorPierce] = useState();
  const [magicPierce, setMagicPierce] = useState();
  const [classify, setClassify] = useState();
  const [selectedImage, setSelectedImage] = useState(null);

  let Types = [
    { id: 1, name: "Sát thủ" },
    { id: 2, name: "Pháp sư" },
    { id: 3, name: "Xạ thủ" },
    { id: 4, name: "Trợ thủ" },
    { id: 5, name: "Đỡ đòn" },
    { id: 6, name: "Đấu sĩ" },
  ];

  let TypeSkill = [
    { id: 1, name: "Sát thương chuẩn" },
    { id: 2, name: "Sát thương vật lý" },
    { id: 3, name: "Sát thương phép thuật" },
  ];

  // Skill Heroes
  const [nameSkill1, setNameSkill1] = useState();
  const [typeDamage1, setTypeDamage1] = useState();
  const [description1, setDescription1] = useState();
  const [nameSkill2, setNameSkill2] = useState();
  const [typeDamage2, setTypeDamage2] = useState();
  const [description2, setDescription2] = useState();
  const [nameSkill3, setNameSkill3] = useState();
  const [typeDamage3, setTypeDamage3] = useState();
  const [description3, setDescription3] = useState();

  const [IDSkill1, setIDSkill1] = useState();
  const [IDSkill2, setIDSkill2] = useState();
  const [IDSkill3, setIDSkill3] = useState();

  const { id } = useParams();
  console.log(id);

  async function getHeroes() {
    const result = await axios.get(
      `http://localhost:8081/api/v1/hero/get?id=${id}`
    );
    setList(result?.data.data);

    if (result?.data.data) {
      let data = result.data.data;
      setName(data.name);
      setPrice(data.price);
      setCoin(data.coin);
      // const [avatar, setAvatar] = useState();
      setAttackDamage(data.attackDamage);
      setMagicDamage(data.magicDamage);
      setBaseHp(data.baseHp);
      setArmor(data.armor);
      setMagicArmor(data.magicDefense);
      setAttackSpeed(data.attackSpeed);
      setSpeed(data.speed);
      setMana(data.mana);
      setArmorPierce(data.armorPierce);
      setMagicPierce(data.magicPierce);
      setClassify(data.classify);

      if (data.skill_heros[0] && data.skill_heros[1] && data.skill_heros[2]) {
        setNameSkill1(data.skill_heros[0].name);
        setTypeDamage1(data.skill_heros[0].type_damage);
        setDescription1(data.skill_heros[0].description);
        setNameSkill2(data.skill_heros[1].name);
        setTypeDamage2(data.skill_heros[1].type_damage);
        setDescription2(data.skill_heros[1].description);
        setNameSkill3(data.skill_heros[2].name);
        setTypeDamage3(data.skill_heros[2].type_damage);
        setDescription3(data.skill_heros[2].description);

        setIDSkill1(data.skill_heros[0].id);
        setIDSkill2(data.skill_heros[1].id);
        setIDSkill3(data.skill_heros[2].id);
      }
    }

    console.log(result.data);
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleShowEdit = (e) => {
    // setForm("edit");
    // setName(e.currentTarget.value);
    // setID(e.currentTarget.id);
    setShow(true);
  };
  const handleShowAdd = (e) => {
    // setName(null);
    // setID(null);
    // setForm("add");
    setShow(true);
  };

  const handleShowEditSkill = (e) => {
    // setName(e.currentTarget.value);
    // setID(e.currentTarget.id);
    setFormSkill("edit");
    setShowSkill(true);
  };
  const handleShowAddSkill = (e) => {
    // setName(null);
    // setID(null);
    setFormSkill("add");
    setShowSkill(true);
  };

  const handleShowEditStory = (e) => {
    // setName(e.currentTarget.value);
    // setID(e.currentTarget.id);
    setFormStory("edit");
    setShowStory(true);
  };
  const handleShowAddStory = (e) => {
    // setName(null);
    // setID(null);
    setFormStory("add");
    setShowStory(true);
  };

  const handleOnChangeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
      setSelectedImage(URL.createObjectURL(file));
    } else {
      setAvatar(null);
      setSelectedImage(null);
    }
  };

  const handleSubmitSkill = async () => {
    const result = await axios.post(
      `http://localhost:8081/api/v1/skill/create`,
      {
        idHero: id,
        listSkill: [
          {
            name: nameSkill3,
            description: description3,
            type_damage: typeDamage3,
            type_skill: 3,
          },
          {
            name: nameSkill2,
            description: description2,
            type_damage: typeDamage2,
            type_skill: 2,
          },
          {
            name: nameSkill1,
            description: description1,
            type_damage: typeDamage1,
            type_skill: 1,
          },
        ],
      }
    );
    // console.log("Kết quả: ", result);
    // console.log(
    //   nameSkill1,
    //   nameSkill2,
    //   nameSkill3,
    //   typeDamage1,
    //   typeDamage2,
    //   typeDamage3,
    //   description1,
    //   description2,
    //   description3
    // );

    setChange(!change);
    setShowSkill(false);
  };

  const handleSubmitEditSkill = async () => {
    const result = await axios.put(
      `http://localhost:8081/api/v1/skill/update`,
      [
        {
          id: IDSkill3,
          name: nameSkill3,
          description: description3,
          type_damage: typeDamage3,
          type_skill: 3,
          id_hero: id,
        },
        {
          id: IDSkill2,
          name: nameSkill2,
          description: description2,
          type_damage: typeDamage2,
          type_skill: 2,
          id_hero: id,
        },
        {
          id: IDSkill1,
          name: nameSkill1,
          description: description1,
          type_damage: typeDamage1,
          type_skill: 2,
          id_hero: id,
        },
      ]
    );

    console.log(
      "Kết quả: ",
      result,
      nameSkill1,
      nameSkill2,
      nameSkill3,
      typeDamage1,
      typeDamage2,
      typeDamage3,
      description1,
      description2,
      description3
    );
    setChange(!change);
    setShowSkill(false);
  };

  const handleSubmitEditInfo = async () => {
    console.log(list.skill_heros);
    // console.log(
    //   name,
    //   price,
    //   coin,
    //   attackDamage,
    //   magicDamage,
    //   baseHp,
    //   armor,
    //   magicArmor,
    //   attackSpeed,
    //   speed,
    //   mana,
    //   armorPierce,
    //   magicPierce,
    //   classify
    // );
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("coin", coin);
    formData.append("avatar", avatar);
    formData.append("attDam", attackDamage);
    formData.append("magicDam", magicDamage);
    formData.append("baseHp", baseHp);
    formData.append("armor", armor);
    formData.append("magicDefe", magicArmor);
    formData.append("attSpe", attackSpeed);
    formData.append("speed", speed);
    formData.append("mana", mana);
    formData.append("armorPie", armorPierce);
    formData.append("magicPie", magicPierce);
    formData.append("classify", classify);

    const result = await axios.put(
      axiosApiInstance.defaults.baseURL + `/api/v1/hero/update?id_hero=${id}`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    console.log("result: ", result);
    setChange(!change);
    setShow(false);
  };

  useEffect(() => {
    getHeroes();
    // const queryString = window.location.search;
    // const urlParams = new URLSearchParams(queryString);
    // const id = urlParams.get("id");
  }, [change]);

  return (
    <div className="hero">
      <section className="hero-page pb-12">
        <div className="inner-page mx-auto my-0 relative">
          <div className="skin-hero ">
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
                  {list.skill_heros && list.skill_heros.length > 0
                    ? list.skill_heros.map((item, index) => {
                        return (
                          <div className="col-skill">
                            <div className="item-skill" key={index}>
                              <div className="img-skill">
                                <img
                                  src="	https://lienquan.garena.vn/files/skill/icon/0fd55b686edc386f5f1937a09de2d1f1583e9d6a7fcc5.png"
                                  alt="img"
                                ></img>
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
                  {list.skill_heros && list.skill_heros.length > 0 ? (
                    // <button
                    //   className="edit-heroes-btn float-right"
                    //   onClick={handleShowEditSkill}
                    // >
                    //   <FaPencilAlt />
                    // </button>
                    <div className="edit-heroes-button">
                      <button
                        className="edit-heroes-btn float-right"
                        onClick={handleShowEditSkill}
                      >
                        <FaPencilAlt />
                      </button>
                    </div>
                  ) : (
                    <div className="edit-heroes-button relative top-5">
                      <button
                        className="edit-heroes-btn float-right"
                        onClick={handleShowAddSkill}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  )}
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
                  <div className="edit-heroes-button">
                    <button
                      className="edit-heroes-btn float-right"
                      onClick={handleShowEditStory}
                    >
                      <FaPencilAlt />
                    </button>
                    <button
                      className="edit-heroes-btn edit-heroes-btn-2 float-right"
                      onClick={handleShowAddStory}
                    >
                      <FaPlus />
                    </button>
                  </div>
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
      {
        <Modal size="sl" show={show} onHide={handleClose} animation={true}>
          <Modal.Header className="bg-green" closeButton>
            <Modal.Title centered className="text-white text-center">
              Chỉnh sửa chỉ số tướng
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmitEditInfo}>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="HeroName">
                    <Form.Label className="text-black">Tên tướng</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Florentino"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
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
                      value={coin}
                      onChange={(e) => setCoin(e.target.value)}
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
                      onChange={(e) => handleOnChangeImage(e)}
                    />
                    {selectedImage && (
                      <div>
                        <h5>Hình ảnh đã chọn:</h5>
                        <img src={selectedImage} alt="Selected Image" />
                      </div>
                    )}
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
                      value={attackDamage}
                      onChange={(e) => setAttackDamage(e.target.value)}
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
                      value={magicDamage}
                      onChange={(e) => setMagicDamage(e.target.value)}
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
                      name="baseHp"
                      required
                      value={baseHp}
                      onChange={(e) => setBaseHp(e.target.value)}
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
                      value={armor}
                      onChange={(e) => setArmor(e.target.value)}
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
                      value={magicArmor}
                      onChange={(e) => setMagicArmor(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="HeroAttackSpeed">
                    <Form.Label className="text-black">Tốc đánh</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="0"
                      name="attackSpeed"
                      required
                      value={attackSpeed}
                      onChange={(e) => setAttackSpeed(e.target.value)}
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
                      value={speed}
                      onChange={(e) => setSpeed(e.target.value)}
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
                      value={mana}
                      onChange={(e) => setMana(e.target.value)}
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
                      value={armorPierce}
                      onChange={(e) => setArmorPierce(e.target.value)}
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
                      value={magicPierce}
                      onChange={(e) => setMagicPierce(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="HeroType">
                    <Form.Label className="text-black">Vai trò</Form.Label>
                    <Form.Control
                      as="select"
                      defaultValue={classify}
                      // value={classify}
                      onChange={(e) => {
                        setClassify(e.target.value);
                        console.log(e.target.value);
                      }}
                      // value={this.state.id_category}
                    >
                      <option>Chọn vai trò</option>
                      {Types &&
                        Types.map((hero, index) => {
                          return (
                            <>
                              <option key={hero.id} value={hero.id}>
                                {hero.name}
                              </option>
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
            <Button variant="success" onClick={handleSubmitEditInfo}>
              Cập nhật
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Đóng
            </Button>
          </Modal.Footer>
        </Modal>
      }

      {
        <Modal size="lg" show={showSkill} onHide={handleCloseSkill}>
          <Modal.Header closeButton className="bg-green">
            <Modal.Title className="text-white">
              {formSkill === "edit" ? "Chỉnh sửa kĩ năng" : "Thêm kĩ năng"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label className="text-black text-center text-xl">
                        Chiêu 1
                      </Form.Label>
                      <Form.Group className="mb-3" controlId="HeroName">
                        <Form.Label className="text-black">
                          Tên chiêu thức
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ưng trạm"
                          name="name"
                          required
                          value={nameSkill1}
                          onChange={(e) => setNameSkill1(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="HeroType">
                        <Form.Label className="text-black">
                          Loại sát thương
                        </Form.Label>
                        <Form.Control
                          as="select"
                          onChange={(e) => setTypeDamage1(e.target.value)}
                          value={typeDamage1}
                        >
                          <option>Chọn loại sát thương</option>
                          {TypeSkill &&
                            TypeSkill.length > 0 &&
                            TypeSkill.map((hero, index) => {
                              return (
                                <>
                                  <option value={hero.id}>{hero.name}</option>
                                </>
                              );
                            })}
                        </Form.Control>
                      </Form.Group>
                      <Form.Label className="text-black">Mô tả</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={7}
                        placeholder="Các đòn đánh thường của Elsu gây 150 + (12.5 mỗi cấp) + (1.0 công vật lý) + (0.8 công vật lý cộng thêm) sát thương vật lý, tuy nhiên sẽ không thể gây chí mạng."
                        value={description1}
                        onChange={(e) => setDescription1(e.target.value)}
                      />
                    </Form.Group>
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label className="text-black text-center text-xl">
                        Chiêu 2
                      </Form.Label>
                      <Form.Group className="mb-3" controlId="HeroName">
                        <Form.Label className="text-black">
                          Tên chiêu thức
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Viễn trình kích"
                          name="name"
                          required
                          value={nameSkill2}
                          onChange={(e) => setNameSkill2(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="HeroType">
                        <Form.Label className="text-black">
                          Loại sát thương
                        </Form.Label>
                        <Form.Control
                          as="select"
                          onChange={(e) => setTypeDamage2(e.target.value)}
                          value={typeDamage2}
                        >
                          <option>Chọn loại sát thương</option>
                          {TypeSkill &&
                            TypeSkill.length > 0 &&
                            TypeSkill.map((hero, index) => {
                              return (
                                <>
                                  <option value={hero.id}>{hero.name}</option>
                                </>
                              );
                            })}
                        </Form.Control>
                      </Form.Group>
                      <Form.Label className="text-black">Mô tả</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={7}
                        placeholder="Elsu nhắm bắn gây 1050/1200/1350/1500/1650/1800 + ( 0.4 công vật lý cộng thêm) sát thương vật lý kèm làm chậm tốc chạy lên tướng đầu tiên trúng phải."
                        value={description2}
                        onChange={(e) => setDescription2(e.target.value)}
                      />
                    </Form.Group>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label className="text-black text-center text-xl">
                        Chiêu 3
                      </Form.Label>
                      <Form.Group className="mb-3" controlId="HeroName">
                        <Form.Label className="text-black">
                          Tên chiêu thức
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Giật bắn"
                          name="name"
                          required
                          value={nameSkill3}
                          onChange={(e) => setNameSkill3(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="HeroType">
                        <Form.Label className="text-black">
                          Loại sát thương
                        </Form.Label>
                        <Form.Control
                          as="select"
                          onChange={(e) => setTypeDamage3(e.target.value)}
                          value={typeDamage3}
                        >
                          <option>Chọn loại sát thương</option>
                          {TypeSkill &&
                            TypeSkill.length > 0 &&
                            TypeSkill.map((hero, index) => {
                              return (
                                <>
                                  <option value={hero.id}>{hero.name}</option>
                                </>
                              );
                            })}
                        </Form.Control>
                      </Form.Group>
                      <Form.Label className="text-black">Mô tả</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={7}
                        placeholder="Elsu lộn ra phía sau rồi lập tức bắn về phía trước gây 500/700/900 + (0.6 công vật lý) sát thương vật lý và làm chậm 50% tốc chạy của nạn nhân."
                        value={description3}
                        onChange={(e) => setDescription3(e.target.value)}
                      />
                    </Form.Group>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="success"
              onClick={
                formSkill === "edit" ? handleSubmitEditSkill : handleSubmitSkill
              }
            >
              {formSkill === "edit" ? "Cập Nhật" : "Thêm"}
            </Button>
            <Button variant="secondary" onClick={handleCloseSkill}>
              Đóng
            </Button>
          </Modal.Footer>
        </Modal>
      }

      {
        <Modal show={showStory} onHide={handleCloseStory}>
          <Modal.Header closeButton className="bg-green">
            <Modal.Title className="text-white">
              {formStory === "edit"
                ? "Chỉnh sửa cốt truyện"
                : "Thêm cốt truyện"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="text-black">Cốt truyện</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={11}
                  placeholder="Ta từng là hy vọng duy nhất của nhân loại trong cả thế kỷ chiến tranh với ma cà rồng.

                  Trước khi trở thành Thợ săn ác quỷ, cả dòng họ của Valhein đều chỉ là cống phẩm đối với bè lũ Huyết tộc. Họ chỉ đơn giản là lũ dê béo được nuôi dưỡng hàng ngày chờ đến khi Huyết tộc cần cung cấp lương thực mà thôi. Là thành viên ưu tú nhất của cả dòng họ, Valhein quyết không thể tiếp tục số phận đen tối này, anh đã cùng khẩu súng huyền thoại của mình phá nát gông cùm xiềng xích của bầy Huyết tộc một lần và mãi mãi."
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleCloseStory}>
              {formStory === "edit" ? "Cập nhật" : "Thêm"}
            </Button>
            <Button variant="secondary" onClick={handleCloseStory}>
              Đóng
            </Button>
          </Modal.Footer>
        </Modal>
      }
    </div>
  );
}
