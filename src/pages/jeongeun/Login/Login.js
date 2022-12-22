import React from 'react';
import Style from './Login.scss';

export default function LoginJ() {
  return (
    <div className="loginbox">
      <div className="content">
        <a href="#" className="logo">
          Westagram
        </a>

        <div className="login">
          <input
            id="inputId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input id="inputPw" type="text" placeholder="비밀번호" />
          <button id="btn" type="button">
            로그인
          </button>
        </div>

        <div className="forgetpw">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </div>
  );
}
