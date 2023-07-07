import React, { useState, useEffect } from "react";
import axiosApiInstance from "../../../config/interceptor";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import "./Skins.scss";
import { FaPlus, FaEye } from "react-icons/fa";
import link from "../../../config/base";
import toast, { Toaster } from "react-hot-toast";

export default function Skin() {
  const [list, setList] = useState([]);
  const [listHero, setListHero] = useState([]);
  const [show, setShow] = useState(false);
  const [change, setChange] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [idHero, setIdHero] = useState("");
  const [type, setType] = useState(1);
  const [img, setImg] = useState();
  const [selectedImage, setSelectedImage] = useState(null);

  let Types = [
    { id: 1, name: "Bậc A" },
    { id: 2, name: "Bậc S" },
    { id: 3, name: "Bậc S+" },
    { id: 4, name: "Bậc SS" },
    { id: 6, name: "Bậc SSS" },
    { id: 6, name: "Bậc SS hữu hạn" },
  ];

  async function getHeroes() {
    const result = await axiosApiInstance.get(
      axiosApiInstance.defaults.baseURL + "/api/v1/hero/get"
    );
    setListHero(result?.data.data);
    // console.log(result.data);
  }

  async function getSkins() {
    const result = await axiosApiInstance.get(
      axiosApiInstance.defaults.baseURL + "/api/v1/skin/get"
    );
    setList(result?.data.data);
    // console.log(result.data);
  }

  useEffect(() => {
    getHeroes();
    getSkins();
  }, [change]);

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

  const handleShowAdd = (e) => {
    setShow(true);
  };
  const handleClose = () => setShow(false);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price.valueOf());
    formData.append("classify", type.valueOf());
    formData.append("avatar", img);
    formData.append("id_hero", idHero.valueOf());

    const result = await axiosApiInstance.post(
      axiosApiInstance.defaults.baseURL +
        `/api/v1/skin/create?id_hero=${idHero}`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    // console.log("result: ", result);
    setChange(!change);
    setShow(false);
    setImg(null);
    if (result.errCode === 1) toast.error(result.message);
    else toast.success("Thêm trang phục mới thành công");
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClickPath = (id_skin) => {
    window.location.href = `/skin-detail/${id_skin}`;
  };

  return (
    <div className="skins-page">
      <Toaster
        toastOptions={{
          className: "",
          duration: 2000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 2000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      ></Toaster>
      <div className="inner-page">
        <div className="filter-skins">
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
              placeholder="Nhập tên trang phục ..."
            ></input>
          </form>
        </div>

        <div className="add-skins-button">
          <button
            className="btn btn-success add-skins-btn"
            onClick={handleShowAdd}
          >
            <FaPlus />
          </button>
        </div>

        <div className="list-skins">
          <ul className="list-skin overflow-hidden">
            {list.map((hero) => (
              <li key={hero.id} id="champion-1" className="list-champion">
                <div
                  className="heroes"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={`${link.LINK_PUBLIC}${hero.avatar}`}
                    alt="img"
                    className="hover:opacity-75"
                  ></img>
                  {isHovered && (
                    <>
                      <div className="edit-skins-button btn-view">
                        <button
                          className="edit-skins-btn"
                          onClick={() => handleClickPath(hero.id)}
                        >
                          <FaEye />
                        </button>
                      </div>
                    </>
                  )}

                  <p className="name-skins mt-2 text-center">{hero.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="bg-green" closeButton>
            <Modal.Title className="text-white">Thêm trang phục</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
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
            <Button variant="success" onClick={handleSubmit}>
              Thêm
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Huỷ
            </Button>
          </Modal.Footer>
        </Modal>
      }
    </div>
  );
}
