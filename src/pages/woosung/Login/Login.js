import React, { useState } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState('');

  const handleIdInput = event => {
    setId(event);
  };

  return (
    <div>
      <div className="wrap">
        <h1>westagram</h1>
        <div className="box1">
          <input
            className="form-input"
            type="text"
            placeholder="전화번호,사용자 이름 또는 이메일"
            name=""
            onChange={handleIdInput}
          />
          <input
            className="form-input"
            type="password"
            placeholder="비밀번호"
            name=""
          />
        </div>

        <div
          className="button"
          type="button"
          onClick={() => {
            navigate('/main');
          }}
          main으로
          이동
        >
          로그인
        </div>

        <p className="sentence">비밀번호를 잊으셨나요?</p>
      </div>
      <script src="./style/js/login.js" defer>
        {' '}
      </script>
    </div>
  );
}

export default Login;
