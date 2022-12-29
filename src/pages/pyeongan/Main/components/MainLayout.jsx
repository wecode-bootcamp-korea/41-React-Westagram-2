import { React, useState } from 'react';
import '../Main.scss';
import MainAddComment from './MainAddComment';

export default function MainLayout({ key, item }) {
  const [commentValue, setCommentValue] = useState('');
  const [commentArray, setCommentArray] = useState([]);

  const addComment = e => {
    if (commentValue.length > 0) {
      const addArray = [...commentArray];
      addArray.push(commentValue);
      setCommentArray(addArray);
      setCommentValue('');
    }
  };

  const onChange = e => {
    setCommentValue(e.target.value);
  };

  const onKeyDown = e => {
    if (e.keyCode === 13 && commentValue.length > 0) {
      e.preventDefault();
      addComment(e);
    }
  };

  // const onDelete = targetid => {
  //   const newcomment = commentArray.filter(item => item.id !== targetid);
  //   setCommentArray(newcomment);
  // };
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
              <img id="userPostImg" alt="postImg" src={item.src} />
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
                  <span className="bookmark">
                    <i class="fa-regular fa-bookmark"></i>
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
                    <span>와우!</span>{' '}
                    <button className="xBox">
                      <i class="fa-solid fa-x"></i>
                    </button>
                    <button className="heart">
                      <i class="fa-solid fa-heart"></i>
                    </button>
                  </div>
                </li>
                <li>
                  <div className="pincomment">
                    <span>321edocew : </span>
                    <span>!우와</span>
                    <button className="xBox">
                      <i class="fa-solid fa-x"></i>
                    </button>
                    <button className="heart">
                      <i class="fa-solid fa-heart"></i>
                    </button>
                  </div>
                </li>
              </ul>
              <div id="commentBox">
                {commentArray.map((item, idx) => (
                  <MainAddComment id={idx} item={item} />
                ))}
              </div>
              <div className="postDate">
                <p>6 일 전</p>
              </div>
              <div>
                <form className="commentAdd">
                  <input
                    id="commentjs"
                    placeholder=" 댓글 달기..."
                    value={commentValue}
                    type="text"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                  />
                  <button id="btn" type="button" onClick={addComment}>
                    게시
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
