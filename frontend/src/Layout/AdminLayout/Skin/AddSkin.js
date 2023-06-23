import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Skin.scss";
import axiosApiInstance from "../../../config/interceptor";
const AddSkin = ({ onHide }) => {
  const [listHero, setListHero] = useState([])
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [idHero, setIdHero] = useState('');
  const [type, setType] = useState(1);
  const [img, setImg] = useState()
  const [show, setShow] = useState(false);
  useEffect(() => {
    (async () => {
      const result = (await axiosApiInstance('/api/v1/hero/get')).data.data
      setListHero([...result.map((item, index) => {
        return {
          id: item.id,
          name: item.name
        }
      })])
    })().catch(err => console.log(err))

  }, [])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fileSelectedHandle = (event) => {
    setImg(event.target.files[0])
  };

  function handleSubmit(e) {
    (async () => {
      const formData = new FormData();
      formData.append('name', name)
      formData.append('price', price.valueOf())
      formData.append('classify', type.valueOf())
      formData.append('avatar', img)
      formData.append('id_hero', idHero.valueOf());
      const result = (await axiosApiInstance.post(`/api/v1/skin/create?id_hero=${idHero}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      ))
      toast.success('Thành công')
    })().catch(err =>
      {
        console.log(err)
        toast.error('Thất bại')

      })
    handleClose()
  };

  const notifyAdd = () => {
    toast.success("Thêm trang phục thành công", {
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

  const doubleFunction = () => {
    setTimeout(notifyAdd, 500);
    setTimeout(handleClose, 3000);
  };

  return (
    <>
      {/* <Button variant='info' onClick={handleShow}>{title}</Button> */}

      <button className="btn btn-outline-success" onClick={handleShow}>
        Thêm trang phục
      </button>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title className="btn-title">Thêm trang phục</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label
                className="Name" >Tên</Form.Label>
              <Form.Control
                className="input-Skin"
                type="text"
                placeholder="Nhập tên trang phục"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formHeroes">
              <Form.Label className="Heroes">Tướng</Form.Label>
              <Form.Control
                as="select"
                className="input-Heroes"
                onChange={e => setIdHero(e.target.value)}
              >
                {listHero.length > 0 ? listHero.map(item => {
                  return <option key={item.id} value={item.id}>{item.name}</option>
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
                onChange={(e) => setType(e.target.value)}
              >
                <option value={4}>S+</option>
                <option value={2}>S</option>
                <option value={3}>A+</option>
                <option value={1}>A</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formImg">
              <Form.Label className="Photo" >Ảnh</Form.Label>
              <Form.Control
                className="input-Skin"
                type="file"
                placeholder="Chọn ảnh trang phục"
                onChange={(event) => fileSelectedHandle(event)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Thêm
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

export default AddSkin;
