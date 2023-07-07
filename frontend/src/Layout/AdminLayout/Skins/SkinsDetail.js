import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import link from "../../../config/base";
import axiosApiInstance from "../../../config/interceptor";
import toast, { Toaster } from "react-hot-toast";
import "./SkinsDetail.scss";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { FaPencilAlt, FaPlus } from "react-icons/fa";
import Hair from "../../../img/SkinImage/toc.jpg";

export default function SkinDetail() {
  const [listSkin, setListSkin] = useState([]);
  const [listHero, setListHero] = useState([]);
  const [show, setShow] = useState(false);
  const [formItem, setFormItem] = useState();
  const [showItem, setShowItem] = useState(false);
  const [change, setChange] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [idHero, setIdHero] = useState();
  const [type, setType] = useState();
  const [img, setImg] = useState();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClose = () => setShow(false);
  const handleCloseItem = () => setShowItem(false);

  const [nameItem, setNameItem] = useState();
  const [typeItem, setTypeItem] = useState();

  const { id } = useParams();
  console.log(id);

  let TypeItem = [
    { id: 1, name: "Tóc" },
    { id: 2, name: "Kiếm" },
    { id: 3, name: "Mặt nạ" },
    { id: 4, name: "Súng" },
  ];

  async function getSkins() {
    const result = await axiosApiInstance.get(
      axiosApiInstance.defaults.baseURL + `/api/v1/skin/get?id=${id}`
    );
    setListSkin(result?.data.data);

    if (result?.data.data) {
      let data = result.data.data;
      setName(data.name);
      setPrice(data.price);
      setIdHero(data.id_hero);
      setType(data.classify);
      setImg(data.avatar);
    }
  }

  async function getHeroes() {
    const result = await axiosApiInstance.get(
      axiosApiInstance.defaults.baseURL + `/api/v1/hero/get`
    );
    setListHero(result?.data.data);
    // console.log(result.data.data);
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleOnChangeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImg(file);
      setSelectedImage(URL.createObjectURL(file));
    } else {
      setImg(null);
      setSelectedImage(null);
    }
  };

  const handleShowEdit = () => {
    setShow(true);
  };

  const handleSubmitEditInfo = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("classify", type);
    formData.append("avatar", img);
    formData.append("id_hero", idHero);

    const result = await axiosApiInstance.put(
      `/api/v1/skin/update?id_skin=${id}`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    console.log("result: ", result);
    setChange(!change);
    setShow(false);
    if (result.errCode == 1) toast.error(result.message);
    toast.success(
      "Sửa thông tin " +
        `${listSkin.id_hero_hero?.name}` +
        "  " +
        `${listSkin.name}` +
        " thành công"
    );
  };

  const handleShowEditItem = (e) => {
    setFormItem("edit");
    setShowItem(true);
  };
  const handleShowAddItem = (e) => {
    setFormItem("add");
    setShowItem(true);
  };

  const handleSubmitEditItem = () => {};

  const handleSubmitItem = async () => {
    console.log(nameItem, typeItem, id);

    const result = await axiosApiInstance.post(
      axiosApiInstance.defaults.baseURL + `/api/v1/item/create`,
      {
        name: nameItem,
        type: typeItem,
        id_skin: id,
      }
    );

    setChange(!change);
    setShowItem(false);
  };

  useEffect(() => {
    getSkins();
    getHeroes();
  }, [change]);

  return (
    <div className="skins-detail">
      <Toaster
        toastOptions={{
          className: "",
          duration: 2000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      ></Toaster>

      <section className="skins-detail-page pb-12">
        <div className="inner-page mx-auto my-0 relative">
          <div className="skins-hero">
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
              <div className="edit-skins-button">
                <button
                  className="edit-skins-btn float-right"
                  onClick={handleShowEdit}
                >
                  <FaPencilAlt />
                </button>
              </div>
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
                                  {listSkin && listSkin.items[index].name}
                                  {/* {console.log(listSkin.items)} */}
                                </h2>
                                <div className="txt"></div>
                                <div className="txt"></div>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : null}
                  {listSkin.items && listSkin.items.length > 0 ? (
                    <div className="edit-skins-button">
                      <button
                        className="edit-skins-btn float-right"
                        onClick={handleShowEditItem}
                      >
                        <FaPencilAlt />
                      </button>
                    </div>
                  ) : (
                    <div className="edit-skins-button relative top-5">
                      <button
                        className="edit-skins-btn float-right"
                        onClick={handleShowAddItem}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  )}
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
      {
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="bg-green" closeButton>
            <Modal.Title className="text-white">
              Chỉnh sửa trang phục
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmitEditInfo}>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label className="text-black">
                      Nhập tên trang phục
                    </Form.Label>
                    <Form.Control
                      className="input-Skin"
                      type="text"
                      placeholder="Khiêu chiến"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formHeroes">
                    <Form.Label className="text-black">Chọn tướng</Form.Label>
                    <Form.Control
                      as="select"
                      className="input-Heroes"
                      value={idHero}
                      onChange={(e) => setIdHero(e.target.value)}
                    >
                      {listHero.length > 0 ? (
                        listHero.map((item) => {
                          return (
                            <option key={item.id} value={item.id}>
                              {item.name}
                            </option>
                          );
                        })
                      ) : (
                        <></>
                      )}
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formPrice">
                    <Form.Label className="text-black">
                      Nhập giá trang phục
                    </Form.Label>
                    <Form.Control
                      className=""
                      type="number"
                      placeholder="999"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formValue">
                    <Form.Label className="text-black">
                      Chọn bậc trang phục
                    </Form.Label>
                    <Form.Control
                      as="select"
                      className=""
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option>Chọn bậc</option>
                      <option value={1}>A</option>
                      <option value={2}>S</option>
                      <option value={3}>S+</option>
                      <option value={4}>SS</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="formImg">
                <Form.Label className="text-black">
                  Chọn ảnh trang phục
                </Form.Label>
                <Form.Control
                  className="text-black"
                  type="file"
                  placeholder="Chọn ảnh trang phục"
                  onChange={(e) => handleOnChangeImage(e)}
                />
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt="Selected Image"
                    height={90}
                    width={90}
                    className="mt-3"
                  />
                )}
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleSubmitEditInfo}>
              Cập nhật
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Huỷ
            </Button>
          </Modal.Footer>
        </Modal>
      }

      {
        <Modal show={showItem} onHide={handleCloseItem}>
          <Modal.Header closeButton className="bg-green">
            <Modal.Title className="text-white">
              {formItem === "edit" ? "Chỉnh sửa phụ kiện" : "Thêm phụ kiện"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="text-black text-center text-xl">
                    Tên phụ kiện
                  </Form.Label>
                  <Form.Group className="mb-3" controlId="ItemName">
                    <Form.Control
                      type="text"
                      placeholder="Tóc đỏ"
                      name="name"
                      required
                      value={nameItem}
                      onChange={(e) => setNameItem(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="ItemType">
                    <Form.Label className="text-black">
                      Loại phụ kiện
                    </Form.Label>
                    <Form.Control
                      as="select"
                      value={typeItem}
                      onChange={(e) => setTypeItem(e.target.value)}
                    >
                      <option>Chọn loại phụ kiện</option>
                      {TypeItem &&
                        TypeItem.length > 0 &&
                        TypeItem.map((item, index) => {
                          return (
                            <>
                              <option value={item.id}>{item.name}</option>
                            </>
                          );
                        })}
                    </Form.Control>
                  </Form.Group>
                </Form.Group>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="success"
              onClick={
                formItem === "edit" ? handleSubmitEditItem : handleSubmitItem
              }
            >
              {formItem === "edit" ? "Cập nhật" : "Thêm"}
            </Button>
            <Button variant="secondary" onClick={handleCloseItem}>
              Đóng
            </Button>
          </Modal.Footer>
        </Modal>
      }
    </div>
  );
}
