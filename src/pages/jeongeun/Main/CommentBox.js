import React, { useState, useEffect } from 'react';
import Comments from './Comments';

const CommentBox = () => {
  const [comment, setComment] = useState('');
  const saveComment = (e) => {
    setComment(e.target.value);
  };

  const [commentArray, setCommentArray] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    setCommentArray((commentList) => [...commentList, comment]);
    setComment('');
  };

  const keyDown = (e) => {
    if (e.key === 'Enter') {
      setCommentArray((commentList) => [...commentList, comment]);
      setComment('');
    }
  };

  return (
    <div className="commentBigBox">
      <div className="commentbox">
        <ul className="allcomment">
          {commentArray.map((comment) => (
            <li className="newComment" key={comment}>
              <Comments id={comment.id} text={comment} />
            </li>
          ))}
        </ul>
      </div>
      <div className="inputcomment">
        <input
          onChange={saveComment}
          onKeyDown={keyDown}
          value={comment}
          className="comment"
          type="text"
          placeholder="댓글을 입력하세요"
        />
        <button onClick={handleClick} className="btn" type="button">
          게시
        </button>
      </div>
    </div>
  );
};

export default CommentBox;
