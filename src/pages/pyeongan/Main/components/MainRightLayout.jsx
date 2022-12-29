import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import '../Main.scss';

export default function Main() {
  const [cat, setCat] = useState([]);
  const arr = [...obj];

  useEffect(() => {
    fetch('data/mock.json')
      .then(res => res.json())
      .then(data => setCat(data));
  }, []);

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
          {cat.map(item => (
            <div className="story" key={item.id}>
              <img className="storyimage" src={item.image} />
              <span className="storyname">{item.name}</span>
              <span className="storyuserid">{item.userid}</span>
              <span className="add">친구추가</span>
            </div>
          ))}
          <div>
            <span className="addfriend">회원님을 위한 추천</span>
            <span className="seeall">모두 보기</span>
          </div>
        </div>
        {arr.map(item => (
          <span className="cpn">{item.text} </span>
        ))}
      </div>
    </>
  );
}

const obj = [
  { id: 1, text: '소개' },
  { id: 2, text: '도움말' },
  { id: 3, text: '홍보' },
  { id: 4, text: '센터' },
  { id: 5, text: 'API채용' },
  { id: 6, text: '위치' },
  { id: 7, text: '언어' },
  { id: 8, text: '개인정보처리약관' },
  { id: 9, text: '© 2022 INSTAGRAM FROM META' },
];
