import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosApiInstance from "../../../config/interceptor";

// import { Link } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
import toast, { Toaster } from "react-hot-toast";

import { Button, Modal, Form, Row, Col } from "react-bootstrap";
// import HeroesDetail from "./HeroesDetail";
import "./Heroes.scss";
// import VanHeo from "../../../img/smallVanheo.jpg";
import { FaPlus, FaEye } from "react-icons/fa";
import link from "../../../config/base";

export default function Heroes() {
  // const [load, setLoad] = useState(false);

  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState();
  const [change, setChange] = useState(false);

  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [coin, setCoin] = useState();
  const [avatar, setAvatar] = useState();
  const [attackDamage, setAttackDamage] = useState();
  const [magicDamage, setMagicDamage] = useState();
  const [baseHp, setBaseHP] = useState();
  const [armor, setArmor] = useState();
  const [magicArmor, setMagicArmor] = useState();
  const [attackSpeed, setAttackSpeed] = useState();
  const [speed, setSpeed] = useState();
  const [mana, setMana] = useState();
  const [armorPierce, setArmorPierce] = useState();
  const [magicPierce, setMagicPierce] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const [type, setType] = useState();

  let Types = [
    { id: 1, name: "Sát thủ" },
    { id: 2, name: "Pháp sư" },
    { id: 3, name: "Xạ thủ" },
    { id: 4, name: "Trợ thủ" },
    { id: 5, name: "Đỡ đòn" },
    { id: 6, name: "Đấu sĩ" },
  ];

  const handleClose = () => setShow(false);
  const [isHovered, setIsHovered] = useState(false);

  async function getHeroes() {
    const result = await axiosApiInstance.get(
      axiosApiInstance.defaults.baseURL + "/api/v1/hero/get"
    );
    setList(result?.data.data);
    // console.log(result.data);
  }

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

  // const handleShowEdit = (e) => {
  //   setForm("edit");
  //   // setName(e.currentTarget.title);
  //   // setID(e.currentTarget.id);
  //   setShow(true);
  // };
  const handleShowAdd = (e) => {
    // setName(null);
    // setID(null);
    setForm("add");
    setShow(true);
  };

  const handleSubmit = async () => {
    console.log(avatar);
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
    formData.append("classify", type);
    console.log(formData);

    const result = await axios.post(
      axiosApiInstance.defaults.baseURL + "/api/v1/hero/create",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    console.log("result: ", result);
    setChange(!change);
    setShow(false);
    setAvatar(null);
    setSelectedImage(null);
    if (result.errCode == 1) toast.error(result.message);
    else toast.success("Thêm tướng mới thành công");
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClickPath = (id_hero) => {
    window.location.href = `/heroes-detail/${id_hero}`;
  };

  useEffect(() => {
    getHeroes();
  }, [change]);

  return (
    <div class="heroes-page">
      <Toaster
        toastOptions={{
          className: "",
          duration: 1700,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 1000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      ></Toaster>

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

        <div className="add-heroes-button">
          <button
            className="btn btn-success add-heroes-btn"
            onClick={handleShowAdd}
          >
            <FaPlus />
          </button>
        </div>

        <div className="list-heroes">
          <ul className="list-hero overflow-hidden">
            {list.map((hero) => (
              <li key={hero.id} id="champion-1" className="list-champion">
                <div
                  className="heroes"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    // src={VanHeo}
                    src={`${link.LINK_PUBLIC}${hero.avatar}`}
                    alt="img"
                    className="hover:opacity-75"
                  ></img>
                  {isHovered && (
                    <>
                      {/* <div className="edit-heroes-button">
                        <button
                          className="edit-heroes-btn"
                          onClick={handleShowEdit}
                        >
                          <FaPencilAlt />
                        </button>
                      </div> */}

                      <div className="edit-heroes-button btn-view">
                        <button
                          className="edit-heroes-btn"
                          onClick={() => handleClickPath(hero.id)}
                        >
                          <FaEye />
                        </button>
                      </div>
                    </>
                  )}

                  <p className="name-heroes whitespace-nowrap mt-2 text-center">
                    {hero.name}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {
        <Modal size="sl" show={show} onHide={handleClose} animation={true}>
          <Modal.Header className="bg-green" closeButton>
            <Modal.Title centered className="text-white text-center">
              {form === "edit" ? "Cập Nhật" : "Thêm Tướng"}
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
                      placeholder="Chọn ảnh tướng"
                      onChange={(e) => handleOnChangeImage(e)}
                    />
                    {selectedImage && (
                      <div>
                        <h5>Hình ảnh nhân vật:</h5>
                        <img src={selectedImage} alt="Selected Image" />
                      </div>
                    )}
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
                      name="blood"
                      required
                      value={baseHp}
                      onChange={(e) => setBaseHP(e.target.value)}
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
                  <Form.Group className="mb-3" controlId="HeroAttackDamage">
                    <Form.Label className="text-black">Tốc đánh</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="0"
                      name="attackDamage"
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
                      onChange={(e) => setType(e.target.value)}
                    // value={type}
                    >
                      <option>Chọn vai trò</option>
                      {Types &&
                        Types.map((hero, index) => {
                          return (
                            <>
                              <option value={hero.id}>{hero.name}</option>
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
