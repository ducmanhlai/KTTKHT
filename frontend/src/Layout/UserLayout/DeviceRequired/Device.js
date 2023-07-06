import React from "react";
import "./Device.scss";
import ImgDown from "../../../img/img-down.png";

export default function device() {
  return (
    <section className="device-container">
      <div className="inner-page">
        <div className="img-bg">
          <picture>
            <source srcset={ImgDown}></source>
            <img src={ImgDown} alt="img"></img>
          </picture>
        </div>
        <h2 className="title">
          Yêu cầu
          <strong className="font-bold"> cấu hình thiết bị</strong>
        </h2>
        <h3 className="notice">
          Lưu ý: Các thiết bị đời thấp hoặc có cấu hình thấp hơn Cấu hình tối
          thiểu dưới đây vẫn có thể tải và chơi game, tuy nhiên có thể sẽ gặp
          tình trạng lag/giật/văng game do cấu hình thiết bị không đạt yêu cầu.
        </h3>
        <div className="info-device clear-fix">
          <div className="bx-ios">
            <div className="bx-block">
              <div className="left">Android</div>
              <div className="right">
                <h2>Yêu cầu thiết bị</h2>
                <p>
                  Cấu hình Android tối thiểu:
                  <br />
                  - Chip: CPU 2.5GHz 4 Cores
                  <br />
                  - RAM: 2GB
                  <br />
                  - Phiên bản: Android 4.4 hoặc cao hơn
                  <br />- Dung lượng bộ nhớ trống: 2GB hoặc nhiều hơn
                </p>
              </div>
            </div>
          </div>
          <div className="bx-ios">
            <div className="bx-block">
              <div className="left">IOS</div>
              <div className="right">
                <h2>Yêu cầu thiết bị</h2>
                <p>
                  Đầu tiên phải có tiền mua iPhone
                  <br />
                  Cấu hình iOS tối thiểu:
                  <br />
                  - iPhone 5S hoặc cao hơn
                  <br />
                  - Phiên bản: iOS 8.0 hoặc cao hơn
                  <br />- Dung lượng bộ nhớ trống: 2GB hoặc nhiều hơn
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
