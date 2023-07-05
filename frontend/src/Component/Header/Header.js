import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <div className="user-header">
      <img
        src="https://lienquan.garena.vn/asset/images/rating-18.jpg"
        className="fixed top-5 z-50"
        alt="age-img"
      ></img>

      <header className="relative">
        <div className="top-pc">
          <nav className="nav-top absolute top-0 left-0 right-0 h-40">
            <div className="inner-page relative my-0 mx-auto">
              <NavLink to="/" className="logo absolute top-1 left-1/2">
                <img
                  src="https://cdn.vn.garenanow.com/web/kg/home/images/logo-new.png"
                  alt="logo-img"
                  className="hover:opacity-75"
                ></img>
              </NavLink>

              <ul className="menu-top overflow-hidden">
                <li className="title-menu-top float-left">
                  <NavLink className="top-menu-link py-0 px-4" to="/">
                    Trang chủ
                  </NavLink>
                </li>
                <li className="title-menu-top float-left">
                  <a
                    className="top-menu-link py-0 px-4"
                    href="https://lienquan.garena.vn/tin-tuc"
                  >
                    Tin tức
                  </a>
                </li>
                <li className="title-menu-top float-left">
                  <NavLink className="top-menu-link py-0 px-4" to="/academy">
                    Học viện
                  </NavLink>
                </li>
                <li className="title-menu-top float-left">
                  <NavLink className="top-menu-link py-0 px-4" to="/profile">
                    Cá nhân
                  </NavLink>
                </li>
                <li className="title-menu-top float-left">
                  <a
                    className="top-menu-link py-0 px-4"
                    href="https://lienquan.garena.vn/giftcode/"
                  >
                    GiftCode
                  </a>
                </li>
                <li className="title-menu-top float-left">
                  <a
                    className="top-menu-link py-0 px-4"
                    href="https://napthe.vn/app"
                  >
                    Nạp tiền
                  </a>
                </li>
              </ul>
            </div>

            {localStorage.getItem("accessToken") ? (
              <NavLink
                to="/login"
                id="logout-btn"
                className="logout py-0 px-4 no-underline absolute right-4 top-4 text-base text-white hover:text-slate-300"
                onClick={() => {
                  localStorage.removeItem("accessToken");
                  localStorage.removeItem("refreshToken");
                }}
              >
                Đăng xuất
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className="logout py-0 px-4 no-underline absolute right-4 top-4 text-base text-white hover:text-slate-300"
                // onClick={() => {
                //   localStorage.removeItem("accessToken");
                //   localStorage.removeItem("refreshToken");
                // }}
              >
                Đăng nhập
              </NavLink>
            )}
          </nav>

          {/* <div className="bx-top">
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
          </div> */}
        </div>

        {/* <div
          id="slider"
          className="owl-carousel owl-theme owl-loaded owl-drag pt-16"
        >
          <img
            src="https://lienquan.garena.vn/files/upload/images/ThanhTu/APL2023/1920x864.jpg"
            alt="img-top"
            // className="hover:opacity-80"
          ></img>

          <div className="owl-dots">
            <button className="owl-dot">
              <span></span>
            </button>
            <button className="owl-dot">
              <span></span>
            </button>
          </div>
        </div> */}
      </header>
    </div>
  );
}
