import React, { useState } from 'react';
const arrList = [
  { id: 1, name: '박채연', content: '불라불라' },
  { id: 2, name: '박채연', content: '불라불라' },
  { id: 3, name: '박채연', content: '불라불라' },
  { id: 4, name: '박채연', content: '불라불라' },
  { id: 5, name: '박채연', content: '불라불라' },
  { id: 6, name: '박채연', content: '불라불라' },
];
export const Aside = () => {
  return (
    <aside>
      <div className="feed_right_container">
        <div className="my_profile">
          <div className="profile_none">
            <div className="my_profile_box1">
              <img src="images/chaeyeon/peple01.png" alt="내 프로필" />
            </div>
            <div className="my_profile_id">cccodus313</div>
          </div>
        </div>
        <div className="recommendation_box">
          <div className="recommendation">스토리</div>
          <div className="comment">모두 보기</div>
        </div>
        <div className="users">
          {arrList.map(({ id, name, content }) => {
            return (
              <div className="user" key={id}>
                {' '}
                {/* map은 고유한 키 값을 필요로 하기때문에 무조건 부모요소에 key값을 주어야 함!!*/}
                <div className="my_profile_box2">
                  <img src="images/chaeyeon/peple01.png" alt="내 프로필" />
                </div>
                <div className="my_profile_main_box">
                  <div className="my_profile_id_box">
                    <div className="my_profile_id1">{name}</div>
                    <div className="my_profile_id2">{content}</div>
                  </div>
                  <div className="follow">팔로우</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Aside;
