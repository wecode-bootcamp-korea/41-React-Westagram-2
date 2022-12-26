import React from 'react';

const Comments = props => {
  console.log(props);
  return (
    <div>
      <span className="userName">
        <strong>{props.id}User</strong>
      </span>
      <span></span>
      <span>{props.text}</span>
    </div>
  );
};

export default Comments;
