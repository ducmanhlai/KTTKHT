import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Modal, Form, Row, Col } from "react-bootstrap";
// import HeroesDetail from "./HeroesDetail";
import "./Heroes.scss";
import VanHeo from "../../../img/vanheo.jpg";
import { FaPlus, FaPencilAlt, FaEye } from "react-icons/fa";

export default function Heroes() {
  // const [load, setLoad] = useState(false);

  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState();
  const handleClose = () => setShow(false);
  const [isHovered, setIsHovered] = useState(false);

  let Types = [
    { name: "Đấu sĩ" },
    { name: "Pháp sư" },
    { name: "Trợ thủ" },
    { name: "Đỡ đòn" },
    { name: "Sát thủ" },
    { name: "Xạ thủ" },
  ];

  async function getHeroes() {
    const result = await axios.get("http://localhost:8081/api/v1/hero/get");
    setList(result?.data.data);
    // console.log(result.data);
  }

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

  const handleSubmit = () => {
    setShow(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClickPath = () => {
    window.location.href = "/heroes-detail";
  };

  useEffect(() => {
    getHeroes();
  }, []);

  return (
    <div class="heroes-page">
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
                    src={VanHeo}
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
                          onClick={handleClickPath}
                        >
                          <FaEye />
                        </button>
                      </div>
                    </>
                  )}

                  <p className="name whitespace-nowrap mt-1 text-center">
                    {hero.name}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {
        // <Modal size="lg" show={show} onHide={handleClose} animation={true}>
        //   <Modal.Header className="bg-lime-500" closeButton>
        //     <Modal.Title centered className="text-black text-center">
        //       {form === "edit" ? "Cập Nhật" : "Thêm Tướng"}
        //     </Modal.Title>
        //   </Modal.Header>
        //   <Modal.Body>
        //     <Form onSubmit={handleSubmit}>
        //       <Row>
        //         <Col>
        //           <Form.Group className="mb-3" controlId="HeroName">
        //             <Form.Label className="text-black">Tên tướng</Form.Label>
        //             <Form.Control
        //               type="text"
        //               placeholder="Nhập tên tướng"
        //               name="name"
        //               required
        //               // value={hero_name}
        //               // onChange={(e) => setName(e.target.value)}
        //             />
        //           </Form.Group>
        //         </Col>
        //         <Col>
        //           <Form.Group className="mb-3" controlId="HeroPrice">
        //             <Form.Label className="text-black">Giá vàng</Form.Label>
        //             <Form.Control
        //               type="number"
        //               placeholder="Nhập giá vàng"
        //               name="price"
        //               required
        //               // value={hero_price}
        //               // onChange={(e) => setPrice(e.target.value)}
        //             />
        //           </Form.Group>
        //         </Col>
        //         <Col>
        //           <Form.Group className="mb-3" controlId="HeroCoin">
        //             <Form.Label className="text-black">Giá quân huy</Form.Label>
        //             <Form.Control
        //               type="number"
        //               placeholder="Nhập quân huy"
        //               name="coin"
        //               required
        //               // value={hero_coin}
        //               // onChange={(e) => setCoin(e.target.value)}
        //             />
        //           </Form.Group>
        //         </Col>
        //       </Row>

        //       <Row>
        //         <Col>
        //           <Form.Group controlId="HeroImage">
        //             <Form.Label className="text-black">Ảnh tướng</Form.Label>
        //             <Form.Control
        //               type="file"
        //               // placeholder="Chọn ảnh tướng"
        //               // onChange={this.fileSelectedHandle}
        //             />
        //             {/* {this.state.img && (
        //           <img
        //             src={this.state.img}
        //             height={90}
        //             width={90}
        //             alt="img"
        //             className="d-block"
        //           />
        //         )} */}
        //           </Form.Group>
        //         </Col>
        //         <Col>
        //           <Form.Group className="mb-3" controlId="HeroAttackDamage">
        //             <Form.Label className="text-black">Công vật lý</Form.Label>
        //             <Form.Control
        //               type="number"
        //               placeholder="Nhập công vật lý"
        //               name="attackDamage"
        //               required
        //               // value={hero_attack_damage}
        //               // onChange={(e) => setAttackDamage(e.target.value)}
        //             />
        //           </Form.Group>
        //         </Col>
        //         <Col>
        //           <Form.Group className="mb-3" controlId="HeroMagicDamage">
        //             <Form.Label className="text-black">Công phép</Form.Label>
        //             <Form.Control
        //               type="number"
        //               placeholder="Nhập công phép"
        //               name="magicDamage"
        //               required
        //               // value={hero_magic_damage}
        //               // onChange={(e) => setMagicDamage(e.target.value)}
        //             />
        //           </Form.Group>
        //         </Col>
        //       </Row>

        //       <Row>
        //         <Col>
        //           <Form.Group className="mb-3" controlId="HeroBlood">
        //             <Form.Label className="text-black">Máu tối đa</Form.Label>
        //             <Form.Control
        //               type="number"
        //               placeholder="Nhập máu tối đa"
        //               name="blood"
        //               required
        //               // value={hero_blood}
        //               // onChange={(e) => setBlood(e.target.value)}
        //             />
        //           </Form.Group>
        //         </Col>
        //         <Col>
        //           <Form.Group className="mb-3" controlId="HeroArmor">
        //             <Form.Label className="text-black">Giáp</Form.Label>
        //             <Form.Control
        //               type="number"
        //               placeholder="Nhập giáp"
        //               name="armor"
        //               required
        //               // value={hero_armor}
        //               // onChange={(e) => setArmor(e.target.value)}
        //             />
        //           </Form.Group>
        //         </Col>
        //         <Col>
        //           <Form.Group className="mb-3" controlId="HeroMagicArmor">
        //             <Form.Label className="text-black">Giáp phép</Form.Label>
        //             <Form.Control
        //               type="number"
        //               placeholder="Nhập giáp phép"
        //               name="magicArmor"
        //               required
        //               // value={hero_magic_armor}
        //               // onChange={(e) => setMagicDamage(e.target.value)}
        //             />
        //           </Form.Group>
        //         </Col>
        //       </Row>

        //       <Row>
        //         <Col>
        //           <Form.Group className="mb-3" controlId="HeroAttackDamage">
        //             <Form.Label className="text-black">Tốc đánh</Form.Label>
        //             <Form.Control
        //               type="number"
        //               placeholder="Nhập tốc đánh"
        //               name="attackDamage"
        //               required
        //               // value={hero_attack_damage}
        //               // onChange={(e) => setAttackDamage(e.target.value)}
        //             />
        //           </Form.Group>
        //         </Col>
        //         <Col>
        //           <Form.Group className="mb-3" controlId="HeroSpeed">
        //             <Form.Label className="text-black">Tốc chạy</Form.Label>
        //             <Form.Control
        //               type="number"
        //               placeholder="Nhập tốc chạy"
        //               name="speed"
        //               required
        //               // value={hero_speed}
        //               // onChange={(e) => setSpeed(e.target.value)}
        //             />
        //           </Form.Group>
        //         </Col>
        //         <Col>
        //           <Form.Group className="mb-3" controlId="HeroMana">
        //             <Form.Label className="text-black">
        //               Hồi năng lượng/5s
        //             </Form.Label>
        //             <Form.Control
        //               type="number"
        //               placeholder="Nhập năng lượng"
        //               name="mana"
        //               required
        //               // value={hero_mana}
        //               // onChange={(e) => setMana(e.target.value)}
        //             />
        //           </Form.Group>
        //         </Col>
        //       </Row>

        //       <Row>
        //         <Col>
        //           <Form.Group className="mb-3" controlId="HeroArmorPierce">
        //             <Form.Label className="text-black">Xuyên giáp</Form.Label>
        //             <Form.Control
        //               type="number"
        //               placeholder="Nhập xuyên giáp"
        //               name="armorPierce"
        //               required
        //               // value={hero_armor_pierce}
        //               // onChange={(e) => setArmorPierce(e.target.value)}
        //             />
        //           </Form.Group>
        //         </Col>
        //         <Col>
        //           <Form.Group className="mb-3" controlId="HeroMagicPierce">
        //             <Form.Label className="text-black">
        //               Xuyên giáp phép
        //             </Form.Label>
        //             <Form.Control
        //               type="number"
        //               placeholder="Nhập xuyên giáp phép"
        //               name="magicPierce"
        //               required
        //               // value={hero_magic_pierce}
        //               // onChange={(e) => setmagicPierce(e.target.value)}
        //             />
        //           </Form.Group>
        //         </Col>
        //         <Col>
        //           <Form.Group className="mb-3" controlId="HeroType">
        //             <Form.Label className="text-black">Vai trò</Form.Label>
        //             <Form.Control
        //               as="select"
        //               // onChange={(event) =>
        //               //   this.handleOnChangeInput(event, "id_category")
        //               // }
        //               // value={this.state.id_category}
        //             >
        //               <option>Chọn vai trò</option>
        //               {Types &&
        //                 Types.map((hero, index) => {
        //                   return (
        //                     <>
        //                       <option key={hero.id}>{hero.name}</option>
        //                     </>
        //                   );
        //                 })}
        //             </Form.Control>
        //           </Form.Group>
        //         </Col>
        //       </Row>
        //     </Form>
        //   </Modal.Body>
        //   <Modal.Footer>
        //     <Button variant="secondary" onClick={handleClose}>
        //       Đóng
        //     </Button>
        //     <Button variant="success" onClick={handleSubmit}>
        //       {form === "edit" ? "Cập Nhật" : "Thêm"}
        //     </Button>
        //   </Modal.Footer>
        // </Modal>
        <Modal size="sl" show={show} onHide={handleClose} animation={true}>
          <Modal.Header className="bg-lime-500" closeButton>
            <Modal.Title centered className="text-black text-center">
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
            <Button variant="secondary" onClick={handleClose}>
              Đóng
            </Button>
            <Button variant="success" onClick={handleSubmit}>
              {form === "edit" ? "Cập Nhật" : "Thêm"}
            </Button>
          </Modal.Footer>
        </Modal>
      }
    </div>
  );
}
