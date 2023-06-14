import React from "react";
import AHeader from "../AHeader/AHeader";
import { FaLock, FaUnlock } from "react-icons/fa";
import "./Account.scss";

export default function Account() {
  return (
    <>
      <AHeader />

      <div className="account-main-container pt-20">
        <div className="d-flex justify-content-center title-account text-center">
          Danh sách tài khoản
        </div>
        <div className="table-user-account">
          <table id="customers-account">
            <tbody>
              <tr>
                <th>STT</th>
                <th>Ảnh đại diện</th>
                <th>Tên tài khoản</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th>Thao tác</th>

                {/* <th>Địa chỉ</th> */}

                {/* email phone name address avatar */}
              </tr>
              <tr>
                <td>1</td>
                <td>No</td>
                <td>XiaoMing</td>
                <td>xiaoming@gmail.com</td>
                <td>09999999</td>
                <td>
                  <button
                    className="btn-edit"
                    // onClick={() => this.handleEditProduct(item)}
                  >
                    <FaLock />
                  </button>
                  <button
                    className="btn-delete"
                    // onClick={() => this.handleDeleteProduct(item)}
                  >
                    <FaUnlock />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
