import React from 'react';

interface Comments

const Comments = props => {
  console.log(props);
  return (
    <>
      <span>
        <strong>{props.id}User</strong>
      </span>
      <span></span>
      <span>{props.text}</span>
      <button className="removeBtn">X</button>
    </>
  );
};

export default Comments;
