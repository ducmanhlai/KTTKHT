import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Anav.scss";

export default function Anav() {
  return (
    <div className="tab-link info-tab">
      <ul className="nav-link">
        <li className="link-title">
          <Link className="link-item" to="/introduce">
            Giới thiệu
          </Link>
        </li>
        <li className="link-title">
          <Link className="link-item current" to="/hero">
            Tướng
          </Link>
        </li>
        <li className="link-title">
          <Link className="link-item" to="/skin">
            Trang phục
          </Link>
        </li>
        <li className="link-title">
          <Link className="link-item" to="/equip">
            Trang bị
          </Link>
        </li>
        <li className="link-title">
          <Link className="link-item" to="/extra">
            Bỗ trợ
          </Link>
        </li>
      </ul>
    </div>
  );
}
