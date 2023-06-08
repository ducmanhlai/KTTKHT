import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="inner-page ">
        <p className="logo-page mb-1">
          <img
            className="logo-aov"
            src="https://lienquan.garena.vn/asset/images/logo-footer.png?v=2"
            alt="img-footer"
          ></img>
        </p>

        <p className="address">
          CÔNG TY CỔ PHẦN GIẢI TRÍ VÀ THỂ THAO ĐIỆN TỬ VIỆT NAM
          <br />
          Giấy CNĐKKD số 0105301438, cấp lần đầu ngày 10/05/2011
          <br />
          Cơ quan cấp: Phòng Đăng ký kinh doanh- Sở Kế hoạch và đầu tư TP Hà Nội
          <br />
          Địa chỉ trụ sở chính: Tầng 29, tòa nhà Trung tâm Lotte Hà Nội, số 54,
          đường Liễu Giai, Phường Cống Vị, Quận Ba Đình,
          <br />
          Thành phố Hà Nội, Việt Nam.
          <br />
          Điện thoại: 024 73053939
        </p>
      </div>

      <ul id="footer-nav" className="menu-nav text-center p-0 list-none">
        <li className="inline hover:opacity-80">
          <a target="!#" href="https://www.garena.vn/terms" title>
            Điều khoản dịch vụ
          </a>
        </li>
        |
        <li className="inline hover:opacity-80">
          <a target="!#" href="https://www.garena.vn/privacy" title>
            Chính sách bảo mật
          </a>
        </li>
        |
        <li className="inline hover:opacity-80">
          <a
            target="!#"
            href="https://lienquan.garena.vn/tin-tuc/chinh-sach-giai-quyet-tranh-chap"
            title
          >
            Chính sách giải quyết tranh chấp{" "}
          </a>
        </li>
      </ul>
    </div>
  );
}
