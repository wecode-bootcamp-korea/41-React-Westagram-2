import React from 'react';
import '../Main.scss';
import { useState } from 'react';

export default function MainLayout() {
  const [comment, setComment] = useState('');

  const onChange = e => {
    setComment(e.target.value);
  };

  const addComment = e => {
    return <li>{e}</li>;
  };
  // {cm.map(item) => <li>{item}</li>}

  return (
    <>
      <div className="mainDiv">
        <div className="divFeed">
          <div className="post backWhite">
            <div className="userNickName">
              <div className="userProflieImg fontsize14"></div>
              <div className="userMiniProfile">
                <span>
                  <img
                    className="wecodelogoimg"
                    alt="wocodelogoimg"
                    src="./images/pyeongan/wecode.jpeg"
                  />
                  <span className="wecodenickname"> wecode_WECODE</span>
                </span>
                <span>
                  <i className="fa-solid fa-ellipsis"></i>
                </span>
              </div>
            </div>
            <div className="userPostImgDiv">
              <img
                id="userPostImg"
                alt="postImg"
                src="./images/pyeongan/postimg.jpg"
              />
            </div>

            <div className="imgUnderBox">
              <div>
                <div className="likeAndComment fontsize14">
                  <span>
                    <i id="iconpadding" className="fa-regular fa-heart"></i>
                    <i id="iconpadding" className="fa-regular fa-comment"></i>
                    <i
                      id="iconpadding"
                      className="fa-solid fa-arrow-up-from-bracket"
                    ></i>
                  </span>
                </div>
              </div>
              <div className="likeNum fontsize14">
                <p>좋아요 13.6만개</p>
              </div>
              <div className="userComment fontsize14">
                <p>wecode_WECODE 😀😀😀</p>
              </div>
              <div className="commentPopup fontsize14">
                <p>댓글 1000개 모두 보기</p>
              </div>
              <ul className="addcommentul">
                <li>
                  <div className="pincomment">
                    <span>wecode123 : </span>
                    <span>와우!</span>
                  </div>
                </li>
                <li>
                  <div className="pincomment">
                    <span>321edocew : </span>
                    <span>!우와</span>
                  </div>
                </li>
              </ul>
              <div className="postDate">
                <p>6 일 전</p>
              </div>
              <div>
                <ul id="commentBox"></ul>
              </div>
              <div className="commentAdd">
                <input
                  onChange={onChange}
                  value={comment}
                  id="commentjs"
                  type="text"
                  name="comment"
                  placeholder="🔖 댓글 달기..."
                />
                <button
                  id="btn"
                  onClick={() => {
                    comment ? addComment(comment) : alert('다시');
                  }}
                  type="button"
                >
                  게시
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
