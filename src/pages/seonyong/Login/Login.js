import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

export default function LoginS() {
const navigate = useNavigate();
const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const saveUserId = (e) => {
    saveUserId(e.target.value);
  }
  console.log('id', id);

  const saveUserPw = (e) => {
    saveUserId(e.target.value);
  }
  console.log('pw', pw);

  
  return (
    <>
      <section className="login_contents">
        <div className="contents_box">
          <div className="title">Westagram</div>
          <div className="login_container">
            <input
              type="text"
              id="user_id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={saveUserId}
            />
            <input type="password" id="user_pw" placeholder="비밀번호" onChange={saveUserPw} />
            <button className="login_button">로그인</button>
          </div>
          <div className="bottom_word">비밀번호를 잊으셨나요?</div>
        </div>
      </section>
    </>
  );
}
