import React from 'react';
import './Main.scss';

const Main = () => {
  return (
    <section className="main">
      <nav className="nav">
        <div>
          <img
            src="/images/instagram.svg"
            alt="이미지"
            className="userImage2"
          />
          <span>|</span>
          <span className="logo">westagram</span>
        </div>
        <div>
          <input type="text" class="search" value="검색" name="btn" />
        </div>
        <div className="emoticon">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt="나침반"
          ></img>
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="하트"
          ></img>
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt="프로필"
          ></img>
        </div>
      </nav>
      <main className="maincontainer">
        <div className="feed">
          <div className="article">
            <div className="user">
              <img
                src="/images/instagram.svg"
                alt="이미지"
                className="userImage"
              />
              <div className="infoBox">
                <span>대한축구협회</span>
                <span>KFA</span>
              </div>
              <div>
                <img
                  src="/images/점세개.png"
                  alt="점세개"
                  className="userImage"
                ></img>
              </div>
            </div>
            <div className="soccer">
              <img
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F003%2F2022%2F12%2F03%2FNISI20221203_0019547012_web_20221203040401_20221203040515682.jpg&type=a340"
                alt=""
              ></img>
            </div>
          </div>
          <div>
            <p>FIFA님 외 1.1천명이 좋아합니다</p>
            <p>cadfadsfdsaf 와 너무 좋다</p>
            <p>fdsfsfsdfsdf 대한민국 자랑스럽다</p>
            <div className="box-inp-cmt">
              <input type="text" placeholder="댓글 달기..." />
              <button className="btn-submit" disabled="">
                게시
              </button>
            </div>
          </div>
        </div>
        <div className="mainRight">
          <div className="logoo">logoo</div>
          <div className="story">스토리</div>
          <div className="recommend">회원님을 위한 추천</div>
          <div>
            {MENU_LIST.map(menuList => {
              return (
                <span className="aside" key={menuList.id}>
                  {menuList.menuName}
                </span>
              );
            })}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Main;

export const MENU_LIST = [
  { id: 1, menuName: '소개·' },
  { id: 2, menuName: '도움말·' },
  { id: 3, menuName: '홍보 센터·' },
  { id: 4, menuName: 'API·' },
  { id: 5, menuName: '채용 정보·' },
  { id: 5, menuName: '개인정보처리방침·' },
  { id: 5, menuName: '약관·' },
  { id: 5, menuName: '위치·' },
  { id: 5, menuName: '인기 계정·' },
  { id: 5, menuName: '해시태그·' },
  { id: 5, menuName: '언어' },
];
