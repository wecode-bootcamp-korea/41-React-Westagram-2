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

  const onChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const { userid, userpwd } = values;

  const clicklink = () => {
    navigate('/mainP');
  };

  const reset = e =>
    setValues({
      userid: '',
      userpwd: '',
    });

  const effectiveness = userid.indexOf('@') > 0 && userpwd.length >= 5;
  //이메일은 @로 시작하지 않아

  const buttoncompatibility = () => {
    effectiveness
      ? clicklink()
      : reset() && alert('아이디 및 비밀번호를 확인해주세요.');
  };

  return (
    <div>
      <div className="loginCenter">
        <div
          className="loginBox container boxPadding backColor"
          id="marginBoxTop"
        >
          <div>
            <p className="font">westagram</p>
          </div>
          <div className="fontSize12">
            <input
              onChange={onChange}
              value={userid}
              id="userId"
              className="userInformation"
              type="text"
              name="userid"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
          </div>
          <div className="fontSize12">
            <input
              onChange={onChange}
              value={userpwd}
              className="userInformation"
              type="password"
              name="userpwd"
              placeholder="비밀번호"
            />
          </div>
          <div>
            <button
              className="loginbtn loginBtn"
              style={
                effectiveness
                  ? { backgroundColor: '#2b82cf' }
                  : { backgroundColor: '#b3dbff' }
              }
              disabled={effectiveness ? false : true}
              onClick={() => {
                buttoncompatibility();
              }}
            >
              로그인
            </button>
          </div>

          <div className="line">
            <p>또는</p>
          </div>

          <div>
            <p className="FontSize16 linkpadding">
              <a href="https://www.facebook.com/0">
                <i className="fa-brands fa-square-facebook"></i> Facebook으로
                로그인
              </a>
            </p>
          </div>
          <div>
            <p className="fontSize14 linkpadding">
              <a href="https://www.instagram.com/accounts/password/reset/">
                비밀번호를 잊으셨나요?
              </a>
            </p>
          </div>
        </div>

        <div
          className="loginBox container middleBoxMargin boxPadding backColor"
          id="marginMiddleBoxTop"
        >
          <p className="fontSize14 linkpadding">
            계정이 없으신가요?
            <a href="https://www.instagram.com/accounts/emailsignup/">
              가입하기
            </a>
          </p>
        </div>

        <div className="container fontSize14">
          <p>앱을 다운로드 하세요.</p>
        </div>

        <div className="img-container">
          <a href="">
            <img
              alt="App Store에서 다운로드 하기"
              src="https://static.cdninstagram.com/rsrc.php/v3/yi/r/cWx_hQBPmbo.png"
            />
          </a>
          <p>
            <a href="">
              <img
                alt="다운로드 하기 Google Play"
                src="https://static.cdninstagram.com/rsrc.php/v3/ye/r/UtJtFmFLCiD.png"
              />
            </a>
          </p>
        </div>
      </div>
      <footer className="footerLine fontSize14">
        <p>© 2022 Instagram from Meta</p>
      </footer>
    </div>
  );
}
