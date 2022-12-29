import React from 'react';
import '../Main.scss';

export default function MaiaNav() {
  return (
    <>
      <div className="backDiv">
        <header>
          <nav className="headerLine">
            <div className="headerleftComposition">
              <i id="camerafont" className="fa-brands fa-instagram"></i>
              <span className="headerwestagram">westagram</span>
            </div>
            <div className="headerMiddleComposition">
              <i id="findglass" className="fa-solid fa-magnifying-glass"></i>
              <input
                className="headertextline"
                type="text"
                placeholder="검색"
              />
              <div className="searchpopuppage">
                <p>친구</p>
                <p>친구</p>
              </div>
            </div>
            <div className="headerRightComposition">
              <img
                className="mainNavPng"
                alt="나침반"
                src="./images/pyeongan/compass.png"
              />
              <img
                className="mainNavPng"
                alt="하트"
                src="./images/pyeongan/heart.png"
              />
              <img
                className="mainNavPng"
                alt="프로필사진"
                src="./images/pyeongan/profile.png"
              />
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
