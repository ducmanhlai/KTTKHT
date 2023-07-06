import React, { useEffect, useState } from "react";
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
import axiosApiInstance from "../../../config/interceptor";
import AHeader from "../AHeader/AHeader";
import link from '../../../config/base'
export default function Skin() {

  return (
    <div>
      <AHeader></AHeader>
      <div className="list">
        <div className="listContainer">
          <Box mt="300px" mb="200px" ml="300px"></Box>
          <SkinMain />
        </div>
      </div>
    </div>
  );
}

const SkinMain = () => {
  const [listSkin, setListSkin] = useState([]);
  useEffect(() => {
    (async () => {
      const result = (
        await axiosApiInstance.get(
          axiosApiInstance.defaults.baseURL + "/api/v1/skin/get"
        )
      ).data.data;
      setListSkin([...result])
    })().catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <div className="content-wrapper">
      <div className="container">
        <div className="main-content">
          <button className="button-add">
            <AddSkin/>
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
              {listSkin.lenght != 0 ? listSkin.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>
                      <img className="list-images" alt="Skin photos" src={`${link.LINK_PUBLIC}${item.avatar}`} />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.classify_type_skin.name}</td>
                    <td>
                      <button className="button-edit">
                        <EditSkin skin={item} />
                      </button>
                    </td>
                    {/* <td>
                    <button className="button-del">
                      <DeleteModal />
                    </button>
                  </td> */}
                  </tr>
                )
              }) : null}
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
