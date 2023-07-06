import React, { useEffect, useState } from "react";
import axiosApiInstance from "../../../config/interceptor";

import "./Profile.scss";
import imguse from "../../../img/user2.jpg";

export default function Profile() {
  const [account, setAccount] = useState({});
  const [analysis, setAnalysis] = useState({});
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
    <div className="bg-white">
      <section className="body">
        {account?.id ? (
          <div className="container">
            <h1 className="mb-12 text-2xl">Thông tin tài khoản </h1>
            <div className="bg-white shadow rounded block">
              <div className="profile-tab-nav flex-col">
                <div className="p-12 text-center">
                  <div className="img-circle text-center mb-4">
                    <img src={imguse} alt="img" className="shadow"></img>
                  </div>
                  <h4 className="name">Ngô Duy Tân</h4>
                </div>
                <div
                  className="nav nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  // aria-orientation="vertical"
                >
                  <a
                    className="nav-link active"
                    id="account-tab"
                    data-toggle="pill"
                    href="#account"
                    role="tab"
                    aria-controls="account"
                    aria-selected="true"
                  >
                    <i className="fa fa-home text-center mr-1"></i>
                    Tài Khoản
                  </a>
                  <a
                    className="nav-link"
                    id="password-tab"
                    data-toggle="pill"
                    href="#password"
                    role="tab"
                    aria-controls="password"
                    aria-selected="false"
                  >
                    <i className="fa fa-key text-center mr-1"></i>
                    Đổi mật khẩu
                  </a>
                </div>
              </div>
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="account"
                  role="tabpanel"
                  aria-labelledby="account-tab"
                >
                  <h3 className=" txt mb-4 text-black">Cài đặt tài khoản</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label class="block">
                        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                          Tên tài khoản
                        </span>
                        <input
                          type="email"
                          name="email"
                          class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                          placeholder="Ngô Duy Tân"
                        />
                      </label>
                    </div>
                    <div className="form-group">
                      <label class="block">
                        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                          Email
                        </span>
                        <input
                          type="email"
                          name="email"
                          class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                          placeholder="@gmail.com"
                        />
                      </label>
                    </div>
                    <div className="form-group ">
                      <label class="block">
                        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                          Số điện thoại
                        </span>
                        <input
                          type="email"
                          name="email"
                          class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                          placeholder="091214568"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button class="btn-update bg-sky-500 hover:bg-sky-700">
                      Cập nhập
                    </button>
                    <button class="btn-cancel bg-white-500 hover:bg-red-500 rounded-md">
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
