import React from "react";

import facebookImage from "../../img/facebook.png";
import instagramImage from "../../img/instagram.png";
import linkedinImage from "../../img/linkedin.png";
import twitterImage from "../../img/twitter.png";

export default function Login() {
  return (
    <div className="login-page">
      <div className="account-container">
        <div className="form">
          <h2>Đăng Nhập</h2>
          <label>
            <span>Email</span>
            <input
              type="text"
              id="login-name"
              name="name"
              value={this.state.username}
              onChange={(event) => this.handleOnChangeEmail(event)}
            ></input>
          </label>
          <label>
            <span>Mật Khẩu</span>
            <input
              type="password"
              id="login-password"
              name="password"
              value={this.state.password}
              onChange={(event) => this.handleOnChangePassword(event)}
            ></input>
          </label>

          <button
            id="login-submit"
            className="submit"
            type="button"
            onClick={() => this.handleLogin()}
          >
            Đăng Nhập
          </button>

          <p className="forgot-pass">Quên Mật Khẩu?</p>

          <div className="social-media">
            <p>Hoặc đăng nhập bằng</p>
            <ul>
              <li>
                <img src={facebookImage} alt="facebook" />
              </li>
              <li>
                <img src={twitterImage} alt="twitter" />
              </li>
              <li>
                <img src={linkedinImage} alt="linkedin" />
              </li>
              <li>
                <img src={instagramImage} alt="instagram" />
              </li>
            </ul>
          </div>
        </div>

        <div className="sub-login-container">
          <div className="img">
            <div className="img-text m-up">
              <h2>Có gì mới?</h2>
              <p>Truy cập website để tìm kiếm đồ uống ưa thích đi nào</p>
            </div>
            <div className="img-btn">
              <span className="m-up">Đăng Ký</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
