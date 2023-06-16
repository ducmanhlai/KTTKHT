import React from "react";
import { Link } from "react-router-dom";

// import toast, { Toaster } from "react-hot-toast";
import "./SignUp.scss";

// import handleLogin from "../../services/handleLogin";
export default function Login() {
  // const [username, setUserName] = useState("");
  // const [isValidUser, setIsValidUser] = useState(true);
  // const [password, setPassWord] = useState("");
  // const [isValidPass, setIsValidPass] = useState(false);
  // const [isSignup, setIsSignup] = useState(false);

  // const handleClick = () => {
  //   setIsSignup((prevState) => !prevState);
  // };
  // const handleLinkClick = () => {
  //   // Xử lý logic chuyển hướng tại đây
  //   window.location.href = "/login";
  // };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="sub-signup-container">
          <div className="img">
            <div className="img-text m-up">
              <h2>Lưu ý!</h2>
              <p>Bạn cần đăng ký tài khoản để chơi game </p>
            </div>

            <div className="img-btn">
              <Link className="m-up no-underline" to="/login">
                Đăng Nhập
              </Link>
            </div>
          </div>
        </div>

        <div class="form sign-up">
          <h2>Đăng Ký</h2>
          <label>
            <span>Tên Đăng Nhập</span>
            <input type="text" name="name" id="signup-name"></input>
          </label>
          <label>
            <span>Email(Không bắt buộc)</span>
            <input type="email" name="email" id="signup-email"></input>
          </label>
          <label>
            <span>Mật Khẩu</span>
            <input type="password" name="password" id="signup-password"></input>
          </label>
          <label>
            <span>Xác nhận mật khẩu</span>
            <input
              type="password"
              name="confirm-password"
              id="signup-confirm-password"
            ></input>
          </label>
          <button type="button" id="signup-submit" class="submit">
            Đăng Ký
          </button>
        </div>
      </div>
    </div>
  );
  // function handleOnChangeEmail(e) {
  //   const inputEmail = e.target.value;
  //   setUserName(inputEmail);
  //   const emailPattern = /\S+@\S+\.\S+/; // Pattern kiểm tra email hợp lệ
  //   setIsValidUser(emailPattern.test(inputEmail)); // Sử dụng test method để kiểm tra
  // }
  // function handleOnChangePassword(e) {
  //   const inputPassword = e.target.value;
  //   setPassWord(inputPassword);
  //   // Kiểm tra password chứa ít nhất 8 ký tự và không chứa khoảng trắng
  //   setIsValidPass(inputPassword.length >= 8 && !/\s/.test(inputPassword));
  // }
  // function clickLogin() {
  //   (async () => {
  //     const data = await handleLogin(username, password);
  //     toast.success(data.message);
  //   })().catch((err) =>
  //     toast.error(`Có lỗi xảy ra
  //   ${err}`)
  //   );
  // }
}
