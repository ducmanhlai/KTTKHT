import React from "react";
import { NavLink } from "react-router-dom";
import "./AHeader.scss";
import LogoNew from "../../../img/logo-new.png";

export default function AHeader() {
  return (
    <div className="admin-header">
      <header>
        <div className="top-pc">
          <nav className="nav-top absolute top-0 left-0 right-0 h-40">
            <div className="inner-page relative my-0 mx-auto">
              <NavLink to="/" className="logo absolute top-0 left-1/2">
                <img
                  src={LogoNew}
                  alt="logo-img"
                  className="hover:opacity-75"
                ></img>
              </NavLink>

              <ul className="menu-top overflow-hidden">
                <li className="float-left">
                  <NavLink className="top-menu-link py-0 px-4" to="/">
                    Trang chủ
                  </NavLink>
                </li>

                <li className="float-left">
                  <NavLink className="top-menu-link py-0 px-4" to="/heroes">
                    Tướng
                  </NavLink>
                </li>

                <li className="float-left">
                  <NavLink className="top-menu-link py-0 px-4" to="/skin">
                    Trang phục
                  </NavLink>
                </li>

                <li className="float-left">
                  <NavLink className="top-menu-link py-0 px-4" to="/account">
                    Tài khoản
                  </NavLink>
                </li>

                <li className="float-left">
                  <NavLink className="top-menu-link py-0 px-4" to="/item">
                    Vật phẩm
                  </NavLink>
                </li>

                <li className="float-left">
                  <NavLink className="top-menu-link py-0 px-4" to="/rule">
                    Luật chơi
                  </NavLink>
                </li>
              </ul>
            </div>

            {localStorage.getItem("accessToken") ? (
              <NavLink
                to="/login"
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
