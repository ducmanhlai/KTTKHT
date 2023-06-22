import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Skin.scss";
import axiosApiInstance from "../../../config/interceptor";
const EditSkin = ({ skin }) => {
  const [listHero, setListHero] = useState([])
  const [name, setName] = useState(skin.name);
  const [price, setPrice] = useState(skin.price);
  const [idHero, setIdHero] = useState(skin.id_hero);
  const [status, setStatus] = useState("");
  const [type, setType] = useState(skin.classify);
  const [show, setShow] = useState(false);
  const [img, setImg] = useState()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    (async () => {
      const result = (await axiosApiInstance('/api/v1/hero/get')).data.data
      setListHero([...result.map((item, index) => {
        return {
          id: item.id,
          name: item.name
        }
      })])
      console.log(skin)
    })().catch(err => console.log(err))

  }, [])
  const fileSelectedHandle = (event) => {
    console.log(event.target.files[0])
    setImg(event.target.files[0]);
  };
  const notifyUpdate = () => {
    toast.success("Cập nhật trang phục thành công", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  function handleSubmit(e) {
    (async () => {
      const formData = new FormData();
      // console.log(img,formData)
      formData.append('name', name)
      formData.append('price', price.valueOf())
      formData.append('classify', type.valueOf())
      formData.append('avatar', img)
      formData.append('id_hero', idHero.valueOf());
      const result = (await axiosApiInstance.post(`/api/v1/skin/update?id_skin=${skin.id}`,
        formData,
         {headers: { "Content-Type": "multipart/form-data" } }
      ))
      console.log(result)
    })().catch(err => console.log(err))
    setTimeout(handleClose, 3000);
  };

  return (
    <>
      {/* <Button variant='info' onClick={handleShow}>{title}</Button> */}

      <button className="btn btn-outline-success" onClick={handleShow}>
        Sửa
      </button>
      <Modal show={show}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title className="btn-title">Sửa trang phục</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label className="Name">Tên</Form.Label>
              <Form.Control
                className="input-Skin"
                type="text"
                placeholder="Nhập tên trang phục"
                value={name}
                readOnly={false}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formHeroes">
              <Form.Label className="Heroes">Tướng</Form.Label>
              <Form.Control
                as="select"
                className="input-Skin"
                onChange={e => setIdHero(e.target.value)}
              >
                {listHero.length > 0 ? listHero.map(item => {
                  return <option key={item.id} value={item.id} selected={item.id == skin.id_hero}>{item.name}</option>
                }) : <></>}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label className="Price">Giá</Form.Label>
              <Form.Control
                className="input-Price"
                type="text"
                placeholder="Nhập giá trang phục"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formValue">
              <Form.Label className="Value">Bậc</Form.Label>
              <Form.Control
                as="select"
                className="input-Value"
                // value={Heroes}
                onChange={(e) => setType(e.target.value)}
                defaultValue={skin.classify}
              >
                <option value={4}>S+</option>
                <option value={2}>S</option>
                <option value={3}>A+</option>
                <option value={1}>A</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formImg">
              <Form.Label className="Photo">Ảnh</Form.Label>
              <Form.Control
                className="input-Img"
                type="file"
                placeholder="Chọn ảnh trang phục"
                onChange={(e) => setImg(e.target.files[0])}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Cập nhật
            <ToastContainer />
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Huỷ
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditSkin;
