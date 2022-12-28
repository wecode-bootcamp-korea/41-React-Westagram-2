import React from 'react';
import { data } from './data';

function Aside() {
  return (
    <>
      <aside className="main_right">
        <div className="right_title">
          <img
            className="right_title_img"
            src="images/seonyong/story.png"
            alt="right_profile_img1"
          />
          <div className="r_t_text">
            <div className="r_t_t1">MmNnOo</div>
            <div className="r_t_t2">위코드 | 엠엔오</div>
          </div>
        </div>
        <div className="right_box1">
          <div className="right_box_title">
            <div className="r_b_t1">
              <strong>스토리</strong>
            </div>
            <div className="r_b_t2">
              <strong>모두 보기</strong>
            </div>
          </div>
          <div className="right_box_content1">
            <div className="profile_container">
              <img
                className="right_profile"
                src="images/seonyong/right_profile1.png"
                alt="right_profile_img2"
              />
              <div className="r_b_c1_text1">
                <div className="text_gray">
                  <strong>PpQqRr</strong>
                </div>
                <div className="r_b_c1_text1_2">
                  <strong>44초 전</strong>
                </div>
              </div>
            </div>
            <div className="profile_container">
              <img
                className="right_profile"
                src="images/seonyong/right_profile2.png"
                alt="right_profile_img3"
              />
              <div className="r_b_c1_text2">
                <div className="text_gray">
                  <strong>SsTtUu</strong>
                </div>
                <div className="r_b_c1_text2_2">
                  <strong>44분 전</strong>
                </div>
              </div>
            </div>
            <div className="profile_container">
              <img
                className="right_profile"
                src="images/seonyong/right_profile3.png"
                alt="right_profile_img4"
              />
              <div className="r_b_c1_text3">
                <div className="text_gray">
                  <strong>VvWwXx</strong>
                </div>
                <div className="r_b_c1_text3_2">
                  <strong>4시간 전</strong>
                </div>
              </div>
            </div>
            <div className="profile_container">
              <img
                className="right_profile"
                src="images/seonyong/right_profile4.png"
                alt="right_profile_img5"
              />
              <div className="r_b_c1_text4">
                <div className="text_gray">
                  <strong>YyZz</strong>
                </div>
                <div className="r_b_c1_text4_2">
                  <strong>4일 전</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right_box2">
          <div className="right_box2_title">
            <div className="r_b2_t1">
              <strong>회원님을 위한 추천</strong>
            </div>
            <div className="r_b2_t2">
              <strong>모두 보기</strong>
            </div>
          </div>
          <div className="profile_container">
            <div className="r_b_c2_box1">
              <div className="r_b_c2_b1_1">
                <img
                  className="right_profile"
                  src="images/seonyong/right_profile5.png"
                  alt="right_profile_img6"
                />
                <div className="r_b_c2_text1">
                  <div className="text_gray">
                    <strong>AaBbCc</strong>
                  </div>
                  <div className="r_b_c2_text1_2">
                    <strong>BbBbBb님 외 4명이 ...</strong>
                  </div>
                </div>
                <div className="follow">
                  <strong>팔로우</strong>
                </div>
              </div>
            </div>
            <div className="profile_container">
              <div className="r_b_c2_b2_2">
                <img
                  className="right_profile"
                  src="images/seonyong/right_profile6.png"
                  alt="right_profile_img7"
                />
                <div className="r_b_c2_text2">
                  <div className="text_gray">
                    <strong>CcCcCc</strong>
                  </div>
                  <div className="r_b_c2_text2_2">
                    <strong>DdDdDd님 외 44영 ...</strong>
                  </div>
                </div>
                <div className="follow">
                  <strong>팔로우</strong>
                </div>
              </div>
            </div>
            <div className="profile_container">
              <div className="r_b_c2_b3_3">
                <img
                  className="right_profile"
                  src="images/seonyong/right_profile7.png"
                  alt="right_profile_img8"
                />
                <div className="r_b_c2_text3">
                  <div className="text_gray">
                    <strong>EeEeEe</strong>
                  </div>
                  <div className="follow_text">
                    <strong>FfFfFf님 외 444 ...</strong>
                  </div>
                </div>
                <div className="follow">
                  <strong>팔로우</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Aside">
          <span>
            {data.map((value, key) => (
              <AsideBottom value={value} key={key} />
            ))}
          </span>
        </div>
      </aside>
    </>
  );
}

export default Aside;

const AsideBottom = ({ value }) => {
  return <span>{value}</span>;
};
