import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import AddSkin from "./AddSkin";
import EditSkin from "./EditSkin";
import { Typography, Box } from "@mui/material";
import skin from "./Image/skin.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Skin.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Skin() {
  return (
    <div className="list">
      <div className="listContainer">
        <Box mt="300px" mb="200px" ml="300px">
        
          
        </Box>

        <SkinMain />
      </div>
    </div>
  );
}

const SkinMain = () => {
  return (
    <div className="content-wrapper">
      
      <div className="container">
        <div className="main-content">
        <button className="button-add">
            <AddSkin />
          </button>
          <Table striped bordered hover size="sm">
            <thead className="Skin-inf">
              <tr>
                <th style={{ width: "80px" }}>STT</th>
                <th style={{ width: "150px" }}>Ảnh</th>
                <th style={{ width: "200px" }}>Tên trang phục</th>
                <th style={{ width: "150px" }}>Giá</th>
                <th style={{ width: "150px" }}>Bậc</th>
                <th style={{ width: "100px" }}>Sửa</th>
                {/* <th style={{ width: "100px" }}>Xóa</th> */}
              </tr>
            </thead>
            <tbody className=" Skin-list">
              <tr>
                <td>1</td>
                <td>
                  <img
                    className="list-images"
                    alt="Skin photos"
                    src={skin}
                  />
                </td>
                <td>Violet thần tiên tỉ tỉ</td>
                <td>40.000</td>
                <td>Bậc S+</td>
                <td>
                  <button className="button-edit">
                    <EditSkin />
                  </button>
                </td>
                {/* <td>
                  <button className="button-del">
                    <DeleteModal />
                  </button>
                </td> */}
              </tr>

              <tr>
                <td>2</td>
                <td>
                  <img
                    className="list-images"
                    alt="Skin photos"
                    src={skin}
                  />
                </td>
                <td>Amily Vinh Quang</td>
                <td>30.000</td>
                <td>Bậc S</td>
                <td>
                  <button className="button-edit">
                    <EditSkin />
                  </button>
                </td>
                {/* <td>
                  <button className="button-del">
                    <DeleteModal />
                  </button>
                </td> */}
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <img
                    className="list-images"
                    alt="Skin photos"
                    src={skin}
                  />
                </td>
                <td>Slimz thỏ ngọc</td>
                <td>20.000</td>
                <td>Bậc A</td>
                <td>
                  <button className="button-edit">
                    <EditSkin />
                  </button>
                </td>
                {/* <td>
                  <button className="button-del">
                    <DeleteModal />
                  </button>
                </td> */}
               
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <img
                    className="list-images"
                    alt="Skin photos"
                    src={skin}
                  />
                </td>
                <td>Batman Matcha</td>
                <td>20.000</td>
                <td>Bậc A</td>
                <td>
                  <button className="button-edit">
                    <EditSkin />
                  </button>
                </td>
                {/* <td>
                  <button className="button-del">
                    <DeleteModal />
                  </button>
                </td> */}
              </tr>
              
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

const DeleteModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const notifyDelete = () => {
    console.log("có chạy mà");
    toast.success("Xoá trang phục thành công", {
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
    setTimeout(notifyDelete, 500);
    setTimeout(handleClose, 3000);
  };

  return (
    <>
      <button className=" btn btn-outline-danger" onClick={handleShow}>
        Xóa
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xóa trang phục</Modal.Title>
        </Modal.Header>
        <Modal.Body>Xác nhận xoá trang phục?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="px-3" onClick={doubleFunction}>
            Có
            <ToastContainer />
          </Button>
          <Button variant="danger" className="px-3" onClick={handleClose}>
            Không
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
