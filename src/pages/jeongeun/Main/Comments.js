import React from 'react';

const Comments = (props) => {
  console.log(props);

  return (
    <>
      <span className="commentList">
        <strong>{props.id}User</strong>
      </span>
      <span></span>
      <span>{props.text}</span>
      <button className="removeBtn">X</button>
    </>
  );
};

export default Comments;
