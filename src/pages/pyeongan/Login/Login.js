import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

export default function LoginP() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    userid: '',
    userpwd: '',
  });

  const [idValue, setText] = useState('');

  const [pwdValue, setText2] = useState('');

  const onChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onChange1 = e => {
    setText(e.target.value);
  };

  const onChange2 = e => {
    setText2(e.target.value);
  };

  const clicklink = () => {
    navigate('/main');
  };

  const reset = () => {
    setText('');
    setText2('');
  };

  return (
    <div className="loginbox container">
      <div>
        <p className="logofont">westagram</p>
      </div>
      <div>
        <input
          onChange={onChange1}
          value={idValue}
          id="userId"
          className="userInformation"
          type="text"
          name="userid"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
      </div>
      <div>
        <input
          onChange={onChange2}
          value={pwdValue}
          className="userInformation"
          type="password"
          name="userpwd"
          placeholder="비밀번호"
        />
      </div>
      <div>
        <button
          className="loginbtn"
          onClick={() => {
            idValue && pwdValue
              ? alert('로그인 성공!')
              : // ? clicklink()
                reset && alert('아이디 및 비밀번호를 확인해주세요.');
          }}
          // onClick={() => {
          //   if (idValue && pwdValue) {
          //     clicklink();
          //   } else {
          //     reset();
          //
          //   }
          // }}
        >
          로그인
        </button>
      </div>
    </div>
  );
}
