import React, { useEffect, useState } from "react";
import axiosApiInstance from "../../../config/interceptor";
import "./Profile.scss";

import imguse from "../../../img/user2.jpg";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";

// import Header from "../../Component/Header/Header";
import { FaKey, FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { TiCameraOutline } from "react-icons/ti";
import link from "../../../config/base";

import Avatar from "react-avatar-edit";

export default function Profile() {
  const [account, setAccount] = useState({});
  const [analysis, setAnalysis] = useState({});
  const [activeTab, setActiveTab] = useState("account");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  //Phong
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew1, setPasswordNew1] = useState("");
  const [passwordNew2, setPasswordNew2] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [phone, setPhone] = useState("");
  const [change, setChange] = useState(false);

  const [imgCrop, setimgCrop] = useState(false);
  const [storeImage, setstoreImage] = useState([]);
  const [image, setimage] = useState("");
  const [src, setsrc] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const profileImageShow = storeImage.map((item) => item.imgCrop);

  const onCrop = (view) => {
    console.log(view);
    setimgCrop(view);
  };
  const onClose = () => {
    setimgCrop(null);
  };
  const saveImage = () => {
    console.log(storeImage, imgCrop);
    setstoreImage([...storeImage, { imgCrop }]);
    setShow(false);
  };

  // function togglePasswordVisibility() {
  //   setIsPasswordVisible((prevState) => !prevState);
  // }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const config = {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 9,
  };

  useEffect(() => {
    (async () => {
      // const result = (await axiosApiInstance.get(axiosApiInstance.defaults.baseURL + '/api/v1/user/getinfo')).data.data;
      // setAccount(result)
      const result = await Promise.all([
        axiosApiInstance.get(
          axiosApiInstance.defaults.baseURL + "/api/v1/user/getinfo"
        ),
        axiosApiInstance.get(
          axiosApiInstance.defaults.baseURL + "/api/v1/user/analysis"
        ),
      ]);

      if (result) {
        console.log(result);
        setAccount(result[0].data.data);
        setAnalysis(result[1].data.data);
      }
    })().catch((err) => {
      console.log(err);
    });
  }, [change]);

  //Phong
  const changePassword = async () => {
    console.log(
      "password cũ: ",
      passwordOld,
      "pass 1: ",
      passwordNew1,
      "pass 2: ",
      passwordNew2
    );
    const res = await axiosApiInstance.put(
      axiosApiInstance.defaults.baseURL + `/api/v1/auth/changepassword`,
      {
        oldPassword: passwordOld,
        currentPassword: passwordNew1,
        newPassword: passwordNew2,
      }
    );
    console.log(">>> Check change: ", res);
    if (res && res.data && res.data.errCode == 0) {
      setPasswordOld("");
      setPasswordNew1("");
      setPasswordNew2("");
    }
  };

  const handleUpdateInfo = async () => {
    console.log("Phone: ", phone, "Ten: ", nameUser, "Ảnh: ", image);
    const formData = new FormData();
    formData.append("name_user", nameUser);
    formData.append("phone", phone);
    formData.append("avatar", image);
    const res = await axiosApiInstance.put(
      axiosApiInstance.defaults.baseURL + `/api/v1/user/update`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    console.log(res);

    if (res) {
      setimage("");
      setNameUser("");
      setPhone("");
      setChange(!change);
    }
  };

  return (
    <div className="nb pt-14">
      <section className="body p-10 ml-10">
        {account?.id ? (
          <div className="container">
            {/* <div className="hd">
              <div className="hd-main">
                <div className="hd-trigger" id="J-msidebar-left-trigger"></div>
                <a className="hd-logo"></a>
              </div>
            </div> */}
            {/* <h1 className="mb-5 text-black">Thông tin tài khoản</h1> */}
            <div className="main-main shadow rounded-lg d-block d-sm-flex">
              <div className="profile-tab-nav">
                <div className="p-4">
                  <div className="img-circle text-center mb-3">
                    <img
                      // src={profileImageShow.length ? profileImageShow : imguse}
                      src={
                        profileImageShow.length
                          ? profileImageShow
                          : `${link.LINK_PUBLIC}${account["users.avatar"]}`
                      }
                      alt=""
                      className="shadow"
                    ></img>
                    <div className="camera absolute flex justify-center items-center z-10 bg-white p-1 rounded-full">
                      <div className="bg-cyan-700 p-1 rounded-full cursor-pointer">
                        <TiCameraOutline
                          type="file"
                          accept="image/*"
                          onClick={handleShow}
                          onChange={(Event) => {
                            console.log("hello");
                            console.log(Event);
                            const file = Event.target.files[0];
                            if (file && file.type.substring(0, 5) === "image") {
                              setimage(file);
                            } else {
                              setimage(null);
                            }
                          }}
                        ></TiCameraOutline>
                      </div>
                    </div>
                  </div>

                  {
                    <Modal size="sl" show={show} onHide={handleClose}>
                      <Modal.Header closeButton className="bg-green">
                        <Modal.Title className="text-white">
                          Cập nhật ảnh đại diện
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form className="flex justify-center items-center">
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                            type="file"
                            onChange={(Event) => {
                              console.log("hello");
                              console.log(Event);
                              const file = Event.target.files[0];
                              if (
                                file &&
                                file.type.substring(0, 5) === "image"
                              ) {
                                setimage(file);
                              } else {
                                setimage(null);
                              }
                            }}
                          >
                            <Avatar
                              width={300}
                              height={300}
                              onClose={onClose}
                              onCrop={onCrop}
                              // src={src}
                              // shadingColor={"#474649"}
                              // backgroundColor={"#474649"}
                            />
                          </Form.Group>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="success" onClick={saveImage}>
                          Cập nhật
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                          Đóng
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  }

                  {/* </div> */}
                  <h4 className="text-black text-center mb-3">
                    {account && account["users.name_user"]}
                  </h4>
                  <div className="text-black mt-4">
                    {/* Tướng sở hữu:{analysis?.hero ? analysis.hero : null} */}
                    Tướng sở hữu : 110
                    {/* // console.log(analysis) */}
                  </div>
                  <div className="text-black mt-1">
                    {/* Trang phục sở hữu:{analysis && analysis.skin} */}
                    Trang phục sở hữu : 420
                  </div>
                  <div className=" text-black mt-1">
                    Số tiền nạp: 44.000.000 đ
                    {/* {new Intl.NumberFormat("vi-VN", config)
                      .format(analysis && analysis.amount)
                      .toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                      })} */}
                  </div>
                </div>
                <div
                  className="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <div className="div">
                    <a
                      className={`nav-link ${
                        activeTab === "account" ? "active" : ""
                      }`}
                      onClick={() => handleTabClick("account")}
                      href="#account"
                      role="tab"
                      aria-controls="account"
                      aria-selected={activeTab === "account"}
                    >
                      <FaUser className="text-center mr-2 mt-1" />
                      Tài khoản
                    </a>
                  </div>

                  <div className="div">
                    <a
                      className={`nav-link  ${
                        activeTab === "password" ? "active" : ""
                      }`}
                      onClick={() => handleTabClick("password")}
                      href="#password"
                      role="tab"
                      aria-controls="password"
                      aria-selected={activeTab === "password"}
                    >
                      <FaKey className=" text-center mr-2 mt-1"></FaKey>
                      Mật khẩu
                    </a>
                  </div>
                </div>
              </div>
              <div className="tab-content p-5" id="v-pills-tabContent">
                <div
                  className={`tab-pane fade ${
                    activeTab === "account" ? "show active" : ""
                  }`}
                  id="account"
                  role="tabpanel"
                  aria-labelledby="account-tab"
                >
                  <h3 className="mb-4 text-black text-2xl uppercase text-center">
                    Thay đổi thông tin
                  </h3>
                  <div className="col">
                    <div className="col-md-6">
                      <div className="form-group ">
                        <label className="block">
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Tên người dùng
                          </span>
                          <input
                            type="text"
                            name="name"
                            className="text-input mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="Nhập tên người dùng"
                            value={nameUser}
                            onChange={(e) => setNameUser(e.target.value)}
                          ></input>
                        </label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="block">
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Số điện thoại
                          </span>
                          <input
                            type="tel"
                            name="phone"
                            className="text-input mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="Nhập số điện thoại"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      className="btn-update bg-green hover:bg-dark_blue"
                      onClick={() => handleUpdateInfo()}
                    >
                      Cập nhật
                    </button>
                    {/* <button className="btn-cancel py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm">
                      Hủy
                    </button> */}
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "password" ? "show active" : ""
                  }`}
                  id="password"
                  role="tabpanel"
                  aria-labelledby="password-tab"
                >
                  <h3 className="text-black mb-4 text-2xl text-center uppercase">
                    Thay đổi mật khẩu
                  </h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="block">
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Mật khẩu cũ
                          </span>
                          <input
                            type={isPasswordVisible ? "text" : "password"}
                            name="password-old"
                            className="text-input mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="Nhập mật khẩu cũ"
                            value={passwordOld}
                            onChange={(e) => setPasswordOld(e.target.value)}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="block">
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Mật khẩu mới
                            {/* <FaEye></FaEye> */}
                          </span>
                          <div className="relative mx-auto mt-1">
                            <input
                              id="2"
                              type={isPasswordVisible ? "text" : "password"}
                              placeholder="Nhập mật khẩu mới"
                              className="text-input mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                              value={passwordNew1}
                              onChange={(e) => setPasswordNew1(e.target.value)}
                            />
                            {/* <button
                              className="absolute inset-y-0 left-96 flex items-center px-4 text-gray-600"
                              onClick={togglePasswordVisibility}
                            >
                              {isPasswordVisible ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                </svg>
                              )}
                            </button> */}
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="block">
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Nhập lại mật khẩu mới
                          </span>
                          <div className="relative  mx-auto mt-1">
                            <input
                              id="1"
                              type={isPasswordVisible ? "text" : "password"}
                              placeholder="Nhập lại mật khẩu"
                              className="text-input mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                              value={passwordNew2}
                              onChange={(e) => setPasswordNew2(e.target.value)}
                            />
                            {/* <button
                              className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                              onClick={togglePasswordVisibility}
                            >
                              {isPasswordVisible ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                </svg>
                              )}
                            </button> */}
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      className="btn-update bg-green hover:bg-dark_blue"
                      onClick={() => changePassword()}
                    >
                      Cập nhật
                    </button>
                    {/* <button className="btn-cancel py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm">
                      Hủy
                    </button> */}
                  </div>
                </div>
                <div
                  className={`tab-pane fade p-4 sm:p-10 text-center overflow-y-auto ${
                    activeTab === "logout" ? "show active" : ""
                  }`}
                  id="logout"
                  role="tabpanel"
                  aria-labelledby="password-tab"
                >
                  <span className=" mr-20 mb-4 inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-yellow-50 bg-yellow-100 text-yellow-500">
                    <svg
                      className="w-5 h-5 "
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                    </svg>
                  </span>
                  <h3 className="text-black mb-4 text-lg mr-20">
                    Bạn có chắc chắn muốn đăng xuất khỏi tài khoản của mình?
                  </h3>

                  <div className="">
                    <button className="btn-update bg-sky-500 hover:bg-sky-700">
                      Đồng ý
                    </button>
                    <button
                      className="btn-cancel py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                      onClick={() => handleTabClick("account")}
                    >
                      Hủy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>Load</div>
        )}
      </section>
    </div>
  );
}
