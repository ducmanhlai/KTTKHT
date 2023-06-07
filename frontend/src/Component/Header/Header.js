import React from "react";
// import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <div>
      <img
        src="https://lienquan.garena.vn/asset/images/rating-18.jpg"
        className="fixed top-5 z-50"
        alt="age-img"
      ></img>

      <header className="relative">
        <div className="top-pc">
          <nav className="nav-top absolute top-0 left-0 right-0 h-40">
            <div className="inner-page relative my-0 mx-auto">
              <a href="!#" className="logo absolute top-1 left-1/2">
                <img
                  src="https://cdn.vn.garenanow.com/web/kg/home/images/logo-new.png"
                  alt="logo-img"
                  className="hover:opacity-75"
                ></img>
              </a>

              <ul className="menu-top overflow-hidden">
                <li className="title-menu-top float-left">
                  <a className="top-menu-link py-0 px-4" href="!#">
                    Trang chủ
                  </a>
                </li>
                <li className="title-menu-top float-left">
                  <a className="top-menu-link py-0 px-4" href="!#">
                    Tướng
                  </a>
                </li>
                <li className="title-menu-top float-left">
                  <a className="top-menu-link py-0 px-4" href="!#">
                    Trang phục
                  </a>
                </li>

                <li className="title-menu-top float-left">
                  <a className="top-menu-link py-0 px-4" href="!#">
                    Tài khoản
                  </a>
                </li>
                <li className="title-menu-top float-left">
                  <a className="top-menu-link py-0 px-4" href="!#">
                    GiftCode
                  </a>
                </li>
                <li className="title-menu-top float-left">
                  <a className="top-menu-link py-0 px-4" href="!#">
                    Nạp tiền
                  </a>
                </li>
              </ul>
            </div>

            <a
              href="https://www.facebook.com/"
              className="py-0 px-4 absolute right-4 top-4 text-base text-white hover:text-slate-300"
            >
              Đăng nhập
            </a>
          </nav>

          <div className="bx-top">
            <p className="logo-down">
              <a className="down-play" href="!#">
                {" "}
              </a>
              <a
                // onclick="goog_report_conversion1('https://app.appsflyer.com/id1150288115?pid=OragnicA&c=cbt_lp_ios');fbq('trackCustom', 'cbt_lp_ios'); var that=this;ga('send', 'event', ',Home_carrousel',',appstore_download',',button');"
                className="down-app"
                href="!#"
              >
                {" "}
              </a>
            </p>
          </div>
        </div>

        <div
          id="slider"
          className="owl-carousel owl-theme owl-loaded owl-drag pt-16"
        >
          <img
            src="https://lienquan.garena.vn/files/upload/images/ThanhTu/APL2023/1920x864.jpg"
            alt="img-top"
          ></img>

          <img
            src="https://lienquan.garena.vn/files/upload/images/Thanh%20Th%E1%BA%A3o%20CTV/webteaser2_1920x864.jpg"
            alt="img-top"
            className="hover:opacity-90"
          ></img>

          <div className="owl-dots">
            <button className="owl-dot">
              <span></span>
            </button>
            <button className="owl-dot">
              <span></span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
