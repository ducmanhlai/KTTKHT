import React from "react";
import "./Footer.scss";
import FooterLogo from "../../../img/logo-footer.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="inner-page ">
        <p className="logo-page mb-1">
          <img className="logo-aov" src={FooterLogo} alt="img-footer"></img>
        </p>

        <p className="address">
          CÔNG TY CỔ PHẦN GIẢI TRÍ VÀ THỂ THAO ĐIỆN TỬ XIAO MING
          <br />
          Giấy CNĐKKD số 0105301438, cấp lần đầu ngày 30/02/2023.
          <br />
          Cơ quan cấp: Phòng Đăng ký kinh doanh- Sở Kế hoạch và đầu tư TP Hồ Chí
          Minh.
          <br />
          Địa chỉ trụ sở chính: Tầng 81 Tòa nhà Landmark 81, 720A Điện Biên Phủ,
          Phường 22, Quận Bình Thạnh, TPHCM.
          <br />
          Thành phố Hồ Chí Minh, Việt Nam.
          <br />
          Điện thoại: 09 66 93 22 67
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
            Chính sách giải quyết tranh chấp
          </a>
        </li>
      </ul>
    </div>
  );
}
