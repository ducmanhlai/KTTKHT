import React, { useEffect, useState } from "react";
import axiosApiInstance from "../../config/interceptor";

import "./profile.scss";
import imguse from "../../img/user2.jpg";
import Header from "../../Component/Header/Header";
export default () => {
  const [account, setAccount] = useState({});
  const [analysis, setAnalysis] = useState({});
  const [activeTab, setActiveTab] = useState("account");
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
                      activeTab === "account" ? "active " : "activenew"
                    }`}
                    onClick={() => handleTabClick("account")}
                    href="#account"
                    role="tab"
                    aria-controls="account"
                    aria-selected={activeTab === "account"}
                  >
                    <i className="fa fa-home text-center mr-1"></i>
                    Tài khoản
                  </a>
                  <a
                    className={`nav-link ${
                      activeTab === "password" ? "active " : "activenew"
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
                            className=" text-inputmt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
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
                            type="password"
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
                          </span>
                          <input
                            type="password"
                            name="password-new"
                            className="text-input mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder=""
                          />
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="block">
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Nhập lại mật khẩu mới
                          </span>
                          <input
                            type="password"
                            name="confim-password"
                            className="text-input mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder=""
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
