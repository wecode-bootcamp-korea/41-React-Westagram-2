import React from 'react';
import '../Main.scss';

export default function main() {
  return (
    <>
      <div className="divMainRight">
        <div className="userImportant">
          <img
            className="rightprofileimg"
            alt="wecode logo"
            src="./images/pyeongan/wecode.jpeg"
          />
          <span className="rightprofileid">wecode_WECODE</span>
          <span className="rightprofilenickname">위코드</span>
          <span className="changeid">전환</span>
        </div>

        <div className="storyBox">
          <div>
            <span className="addfriend">회원님을 위한 추천</span>
            <span className="seeall">모두 보기</span>
          </div>
        </div>

        <div className="corporateInformation">
          <span className="companyinfo1">
            소개 도움말 홍보 센터 API채용 위치 언어 개인정보처리약관
          </span>
          <p>© 2022 INSTAGRAM FROM META</p>
        </div>
      </div>
    </>
  );
}
