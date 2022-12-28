import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import '../Main/Main';

function LoginC() {
  //로그인현재 안보이지만, 아이디 넣고(현재, 아이디 넣은 상태), 비번넣으면(현재,비번넣은상태)
  const [active, setActive] = useState(false);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const activeLogin = () => {
    return id.includes('@') && password.length >= 5
      ? setActive(true)
      : setActive(false); //비번필수요소
  };
  const goToMain = () => {
    return activeLogin
      ? navigate('/main')
      : alert('아이디와 비밀번호를 다시 입력해주세요.');
  };
  const inputHandleId = event => {
    //e.target input이 발생하는 이벤트, value 그 값
    setId(event.target.value);
  };
  const inputHandlePassword = event => {
    setPassword(event.target.value);
  };

  const buttonDefaultStyle = {
    //버튼 활성화 비활성화 때의 버튼 색 변수 ->버튼에가서 필수요소 구현
    backgroundColor: '#bfdffd',
  };
  const buttonActiveStyle = {
    backgroundColor: '#1c7ed6',
  };

  return (
    <>
      {}
      <div className="container">
        <h1>westgram</h1>
        <div className="login_inner">
          <input
            type="text"
            className="id"
            placeholder="전화번호,사용자 또는 이메일"
            onKeyUp={activeLogin}
            onChange={inputHandleId}
          />
          <input
            type="password"
            className="password"
            placeholder="비밀번호"
            onKeyUp={activeLogin}
            onChange={inputHandlePassword}
          />

          {/* 버튼이 구현됬을 때의  반응형 */}
          <button
            className="btn"
            style={active ? buttonActiveStyle : buttonDefaultStyle}
            onClick={goToMain}
            disabled={active ? false : true}
          >
            로그인
          </button>
        </div>
      </div>
      <div className="footer">
        <p>비밀번호를 잊으셨나요???</p>
      </div>
    </>
  );
}
export default LoginC;
