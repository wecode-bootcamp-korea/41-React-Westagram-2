import React from 'react';
import { useState } from 'react';

export default function MainAddComment(props) {
  return (
    <div className="addcomment">
      <span>hapyeongan : </span>
      <span>{props.item}</span>
    </div>
  );
}
