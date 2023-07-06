import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import Rate18Age from "../../../img/rating-18.jpg";
import LogoNew from "../../../img/logo-new.png";

export default function Header() {
  return (
    <div className="user-header">
      <img src={Rate18Age} className="fixed top-5 z-50" alt="age-img"></img>

      <header className="relative">
        <div className="top-pc">
          <nav className="nav-top absolute top-0 left-0 right-0 h-40">
            <div className="inner-page relative my-0 mx-auto">
              <NavLink to="/" className="logo absolute top-1 left-1/2">
                <img
                  src={LogoNew}
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
        </div>
      </header>
    </div>
  );
}
