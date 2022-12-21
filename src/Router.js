import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import LoginC from './pages/chaeyeon/Login/Login';
import MainC from './pages/chaeyeon/Main/Main';
import LoginJ from './pages/jeongeun/Login/Login';
import MainJ from './pages/jeongeun/Main/Main';
import LoginP from './pages/pyeongan/Login/Login';
import MainP from './pages/pyeongan/Main/Main';
import LoginS from './pages/seonyong/Login/Login';
import MainS from './pages/seonyong/Main/Main';
import LoginW from './pages/woosung/Login/Login';
import MainW from './pages/woosung/Main/Main';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/LoginC" element={<LoginC />} />
        <Route path="/LoginJ" element={<LoginJ />} />
        <Route path="/LoginP" element={<LoginP />} />
        <Route path="/LoginS" element={<LoginS />} />
        <Route path="/LoginW" element={<LoginW />} />
        <Route path="/MainC" element={<MainC />} />
        <Route path="/MainJ" element={<MainJ />} />
        <Route path="/MainP" element={<MainP />} />
        <Route path="/MainS" element={<MainS />} />
        <Route path="/MainW" element={<MainW />} />
      </Routes>
    </BrowserRouter>
  );
}
