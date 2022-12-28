import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Style from './Login.scss';

const LoginJ = () => {
  const navigate = useNavigate();

  const [disabled, setDisabled] = useState(false);

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

  const isInputValue = id.includes('@') && pw.length >= 5;

  const name = isInputValue ? 'btnTwo' : 'btn';

  return (
    <div className="loginbox">
      <div className="content">
        <a href="#" className="logo">
          Westagram
        </a>

        <div className="login">
          <input
            onChange={saveUserId}
            id="inputId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={saveUserPw}
            id="inputPw"
            type="text"
            placeholder="비밀번호"
          />
          <button
            disabled={isInputValue ? false : true}
            className={name}
            type="button"
          >
            로그인
          </button>
        </div>

        <div className="forgetpw">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginJ;
