import React from "react";

function Header() {
  return (
    <header>
      <div className="left_box">
        <div className="camera_box">
          <img class="camera" src="./images/camera.png" alt="" />
        </div>
        <div className="line">|</div>
        <div className="logo_box">
          <img className="logo" src="./images/logo.PNG" alt="" />
        </div>
      </div>
      <span className="seach_box">
        <input type="search" class="search" placeholder="검색" />
      </span>
      <div className="right_box">
        <div className="explor_box">
          <img className="img_size" src="./images/explore.PNG" alt="" />
        </div>
        <div className="like_box">
          <img className="img_size" src="./images/like.PNG" alt="" />
        </div>
        <div className="proile_box">
          <img className="compass" src="./images/profile.png" alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
