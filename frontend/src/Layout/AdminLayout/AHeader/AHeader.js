import React from "react";
import { Link } from "react-router-dom";
import "./AHeader.scss";

export default function AHeader() {
  return (
    <div>
      <header className="relative">
        <div className="top-pc">
          <nav className="nav-top absolute top-0 left-0 right-0 h-40">
            <div className="inner-page relative my-0 mx-auto">
              <Link to="/" className="logo absolute top-1 left-1/2">
                <img
                  src="https://cdn.vn.garenanow.com/web/kg/home/images/logo-new.png"
                  alt="logo-img"
                  className="hover:opacity-75"
                ></img>
              </Link>

              <ul className="menu-top overflow-hidden">
                <li className="title-menu-top float-left">
                  <Link className="top-menu-link py-0 px-4" to="/">
                    Trang chủ
                  </Link>
                </li>
                <li className="title-menu-top float-left">
                  <Link className="top-menu-link py-0 px-4" to="/heroes">
                    Tướng
                  </Link>
                </li>
                <li className="title-menu-top float-left">
                  <Link className="top-menu-link py-0 px-4" to="/skin">
                    Trang phục
                  </Link>
                </li>

                <li className="title-menu-top float-left">
                  <Link className="top-menu-link py-0 px-4" to="/account">
                    Tài khoản
                  </Link>
                </li>
                <li className="title-menu-top float-left">
                  <Link className="top-menu-link py-0 px-4" to="/giftcode">
                    Tặng quà
                  </Link>
                </li>
                <li className="title-menu-top float-left">
                  <Link className="top-menu-link py-0 px-4" to="/notifications">
                    Luật chơi
                  </Link>
                </li>
              </ul>
            </div>

            <Link
              to="/login"
              className="py-0 px-4 absolute right-4 top-4 text-base text-white hover:text-slate-300"
            >
              Đăng xuất
            </Link>
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

        {/* <div
          id="slider"
          className="owl-carousel owl-theme owl-loaded owl-drag pt-16"
        >
          <img
            src="https://lienquan.garena.vn/files/upload/images/1920.499%281%29.jpg"
            alt="img-top"
            // className="hover:opacity-80"
          ></img>
        </div> */}
      </header>
    </div>
  );
}
