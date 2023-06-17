import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./AHeader.scss";

export default function AHeader() {
  // const [activeTab, setActiveTab] = useState("tab1");

  // const handleTabClick = (tab) => {
  //   setActiveTab(tab);
  // };

  return (
    <div>
      <header>
        <div className="top-pc">
          <nav className="nav-top absolute top-0 left-0 right-0 h-40">
            <div className="inner-page relative my-0 mx-auto">
              <NavLink to="/" className="logo absolute top-0 left-1/2">
                <img
                  src="https://cdn.vn.garenanow.com/web/kg/home/images/logo-new.png"
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
                  <NavLink className="top-menu-link py-0 px-4" to="/giftcode">
                    Tặng quà
                  </NavLink>
                </li>

                <li className="float-left">
                  <NavLink className="top-menu-link py-0 px-4" to="/rule">
                    Luật chơi
                  </NavLink>
                </li>
              </ul>
            </div>

            <NavLink
              to="/login"
              className="logout py-0 px-4 no-underline absolute right-4 top-4 text-base text-white hover:text-slate-300"
            >
              Đăng xuất
            </NavLink>
          </nav>
        </div>
      </header>
    </div>
  );
}
