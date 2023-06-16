import React from "react";
import { Link, NavLink } from "react-router-dom";
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
                  <Link className="top-menu-link py-0 px-4" to="/news">
                    Tin tức
                  </Link>
                </li>
                <li className="title-menu-top float-left">
                  <Link className="top-menu-link py-0 px-4" to="/academy">
                    Học viện
                  </Link>
                </li>
                <li className="title-menu-top float-left">
                  <Link className="top-menu-link py-0 px-4" to="/profile">
                    Cá nhân
                  </Link>
                </li>
                <li className="title-menu-top float-left">
                  <Link className="top-menu-link py-0 px-4" to="/giftcode">
                    GiftCode
                  </Link>
                </li>
                <li className="title-menu-top float-left">
                  <Link className="top-menu-link py-0 px-4" to="/naptien">
                    Nạp tiền
                  </Link>
                </li>
              </ul>
            </div>

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
          // className="hover:opacity-80"
          ></img>

          {/* <img
            src="https://lienquan.garena.vn/files/upload/images/Thanh%20Th%E1%BA%A3o%20CTV/webteaser2_1920x864.jpg"
            alt="img-top"
            className="hover:opacity-90"
          ></img> */}

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
