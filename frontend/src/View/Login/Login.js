import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import "./Login.scss";
import facebookImage from "../../img/facebook.png";
import instagramImage from "../../img/instagram.png";
import linkedinImage from "../../img/linkedin.png";
import twitterImage from "../../img/twitter.png";
import handleLogin from "../../services/handleLogin";
export default function Login() {
  const [username, setUserName] = useState("");
  const [isValidUser, setIsValidUser] = useState(true);
  const [password, setPassWord] = useState("");
  const [isValidPass, setIsValidPass] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleClick = () => {
    setIsSignup((prevState) => !prevState);
  };

  return (
    <div className="login-page">
      <Toaster
        toastOptions={{
          className: "",
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 2000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      ></Toaster>

      <div className="login-container">
        <div className="form sign-in">
          <h2>Đăng Nhập</h2>
          <label>
            <span>Email</span>
            <input
              type="text"
              id="login-name"
              name="name"
              value={username}
              onChange={handleOnChangeEmail}
            ></input>
            {username.length != 0 ? (
              isValidUser ? (
                <span style={{ color: "green" }}></span>
              ) : (
                <span style={{ color: "red" }}>Email không hợp lệ</span>
              )
            ) : null}
          </label>
          <label>
            <span>Mật Khẩu</span>
            <input
              type="password"
              id="login-password"
              name="password"
              value={password}
              onChange={handleOnChangePassword}
            ></input>
            {password.length != 0 ? (
              isValidPass ? null : (
                <span style={{ color: "red" }}>Mật khẩu không hợp lệ</span>
              )
            ) : null}
          </label>

          <button
            id="login-submit"
            className="submit"
            type="button"
            disabled={!isValidUser || !isValidPass}
            onClick={clickLogin}
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
              <p>Truy cập website để hiểu hơn về game đi nào</p>
            </div>

            <div className="img-btn">
              <Link className="m-up no-underline" to="/signup">
                Đăng Ký
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
  function handleOnChangeEmail(e) {
    const inputEmail = e.target.value;
    setUserName(inputEmail);
    const emailPattern = /\S+@\S+\.\S+/; // Pattern kiểm tra email hợp lệ
    setIsValidUser(emailPattern.test(inputEmail)); // Sử dụng test method để kiểm tra
  }
  function handleOnChangePassword(e) {
    const inputPassword = e.target.value;
    setPassWord(inputPassword);
    // Kiểm tra password chứa ít nhất 8 ký tự và không chứa khoảng trắng
    setIsValidPass(inputPassword.length >= 8 && !/\s/.test(inputPassword));
  }
  function clickLogin() {
    (async () => {
      const data = await handleLogin(username, password);
      toast.success(data.message);
    })().catch((err) =>
      toast.error(`Có lỗi xảy ra
    ${err}`)
    );
  }
}
