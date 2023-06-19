import React, { useEffect, useState } from "react";
import axiosApiInstance from "../../config/interceptor";
import "./profile.scss";
import imguse from "../../img/user2.jpg";
import Header from "../../Component/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShowhidePassword from "./ShowhidePassword";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
export default () => {
  const [account, setAccount] = useState({});
  const [analysis, setAnalysis] = useState({});
  const [activeTab, setActiveTab] = useState("account");
  const [trangthai, setTrangthai] = useState("account");
  const [PasswordInput, ToggleIcon] = ShowhidePassword();
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleAction = (newTrangthai) => {
    setTrangthai(newTrangthai);
  };

  const handleClick = (newTab, newTrangthai) => {
    handleTabClick(newTab);
    handleAction(newTrangthai);
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
      setAccount(result[0].data.data);
      setAnalysis(result[1].data.data);
    })().catch((err) => {
      console.log(err);
    });
  }, []);
  return (
    <div className="bg-white pt-14">
      <section className=" body p-10 ml-10">
        {account?.id ? (
          <div className="container">
            <h1 className="mb-5 text-black">Thông tin tài khoản</h1>
            <div className="bg-white shadow rounded-lg d-block d-sm-flex">
              <div className="profile-tab-nav">
                <div className="p-4">
                  <div className="img-circle text-center mb-3">
                    <img src={imguse} alt="img" className="shadow"></img>
                  </div>
                  <h4 className=" name text-center mb-3">Newblack</h4>
                  <div className="text-black">Tướng sở hữu:{analysis.hero}</div>
                  <div className="text-black">
                    Trang phục sở hữu:{analysis.skin}
                  </div>
                  <div className=" text-black ">
                    Số tiền nạp:{" "}
                    {new Intl.NumberFormat("vi-VN", config)
                      .format(analysis.amount)
                      .toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                      })}
                  </div>
                </div>
                <div
                  className="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a
                    className={`nav-link ${
                      activeTab === "account"
                        ? trangthai === "account"
                          ? "active1"
                          : "active2"
                        : ""
                    }`}
                    onClick={() => handleClick("account")}
                    href="#account"
                    role="tab"
                    aria-controls="account"
                    aria-selected={activeTab === "account"}
                  >
                    {/* <FontAwesomeIcon icon={faEye} /> */}
                    Tài khoản
                  </a>
                  <a
                    className={`nav-link ${
                      activeTab === "password" ? "active1 " : "active2"
                    }`}
                    onClick={() => handleTabClick("password")}
                    href="#password"
                    role="tab"
                    aria-controls="password"
                    aria-selected={activeTab === "password"}
                  >
                    <i className="fa fa-key text-center mr-1"></i>
                    Mật khẩu
                  </a>
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
                  <h3 className="mb-4 text-black">Cài đặt tài khoản</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="block">
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Tên tài khoản
                          </span>
                          <input
                            type="text"
                            name="name"
                            className="text-input mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="Ngô Duy Tân"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="block">
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Email
                          </span>
                          <input
                            type="email"
                            name="email"
                            className=" text-input mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="@gmail.com"
                          />
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
                            placeholder="091214568"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className="btn-update bg-sky-500 hover:bg-sky-700">
                      Cập nhập
                    </button>
                    <button className="btn-cancel bg-white-500 hover:bg-red-500 rounded-md">
                      Hủy
                    </button>
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
                  <h3 className="text-black mb-4">Đổi lại mật khẩu</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="block">
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Mật khẩu cũ
                          </span>
                          <input
                            type="text"
                            name="password-old"
                            className="text-input mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder=""
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
                          <div className="relative  mx-auto mt-1">
                            <input
                              id="2"
                              type={isPasswordVisible ? "text" : "password"}
                              placeholder="Password"
                              className="text-input mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            />
                            <button
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
                            </button>
                          </div>
                        </label>
                      </div>
                    </div>
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
                              placeholder="Password"
                              className="text-input mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            />
                            <button
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
                            </button>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className="btn-update bg-sky-500 hover:bg-sky-700">
                      Cập nhập
                    </button>
                    <button className="btn-cancel bg-white-500 hover:bg-red-500 rounded-md">
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
};
