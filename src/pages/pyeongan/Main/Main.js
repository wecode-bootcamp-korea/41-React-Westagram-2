import React, { useEffect, useRef, useState } from 'react';
import MainLayout from './components/MainLayout';
import MainRightLayout from './components/MainRightLayout';
import './Main.scss';
import MaiaNav from './components/MaiaNav';
import Feed from './components/Feed';

export default function MainP() {
  return (
    <div>
      <div className="mainbackground">
        <MaiaNav />
        <Feed />
        <MainRightLayout />
      </div>
    </div>
  );
}
