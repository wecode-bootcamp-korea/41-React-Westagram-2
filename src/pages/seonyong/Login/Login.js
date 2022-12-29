import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

export default function LoginS() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const saveUserId = e => {
    setId(e.target.value);
  };
  console.log('id', id);

  const saveUserPw = e => {
    setPw(e.target.value);
  };
  console.log('pw', pw);

  const active = id.includes('@') && pw.length >= 5;
  let blocked;
  active ? (blocked = false) : (blocked = true);

  let Color;
  active
    ? (Color = { backgroundColor: 'black' })
    : (Color = { backgroundColor: 'red' });

  const onClickSignUp = () => {
    fetch('http://10.58.52.199:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  const onClickSignEnter = () => {
    fetch('http://10.58.52.199:3000/signIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        localStorage.setItem('accessToken', data.accessToken);
      });
  };

  console.log(localStorage.getItem('accessToken'));

  return (
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
          <input
            type="password"
            id="user_pw"
            placeholder="비밀번호"
            onChange={saveUserPw}
          />
          <button
            className="login_button"
            style={Color}
            onClick={onClickSignUp}
            disabled={blocked}
          >
            회원가입
          </button>
          <button
            className="login_button"
            style={Color}
            onClick={onClickSignEnter}
            disabled={blocked}
          >
            로그인
          </button>
        </div>
        <div className="bottom_word">비밀번호를 잊으셨나요?</div>
      </div>
    </section>
  );
}
