import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Skin.scss";

const AddSkin = ({ onHide }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [detail, setDetail] = useState("");
  const [status, setStatus] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fileSelectedHandle = (event) => {
    this.setState({
      avatar: {
        ...this.state.avatar.selectedFile,
        selectedFile: event.target.files[0],
      },
    });

    const file = event.target.files[0];
    file.preview = URL.createObjectURL(file);
    this.setState({
      image: file.preview,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setPrice("");
    onHide();
  };

  const notifyAdd = () => {
    console.log("có chạy mà");
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
              <Form.Label>Tên</Form.Label>
              <Form.Control
                className="input-Skin"
                type="text"
                placeholder="Nhập tên trang phục"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formHeroes">
              <Form.Label>Tướng</Form.Label>
              <Form.Control
                as="select"
                className="input-Heroes"
                // value={Heroes}
                // onChange={(e) => setHeroes(e.target.value)}
              >
                <option>Violet</option>
                <option>Amily</option>
                <option>Batman</option>
                <option>Slimz</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label>Giá</Form.Label>
              <Form.Control
                className="input-Price"
                type="text"
                placeholder="Nhập giá trang phục"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formSkin">
              <Form.Label>Bậc</Form.Label>

              <div value={status} onChange={(e) => setStatus(e.target.value)}>
                <Form.Check
                  inline
                  type="radio"
                  name="status"
                  label="S+"
                  id="s+"
                  shape="circle"
                />

                <Form.Check
                  inline
                  type="radio"
                  name="status"
                  label="S"
                  id="s"
                  shape="circle"
                />
                <Form.Check
                  inline
                  type="radio"
                  name="status"
                  label="A"
                  id="a"
                  shape="circle"
                />
              </div>
            </Form.Group>
            <Form.Group controlId="formImg">
              <Form.Label>Ảnh</Form.Label>
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
          <Button variant="primary" onClick={doubleFunction}>
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
