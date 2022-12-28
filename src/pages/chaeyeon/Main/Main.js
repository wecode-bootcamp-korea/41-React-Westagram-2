import React from 'react';

import Header from './Header';
import Article from './Article';
import './Main.scss';
import Aside from './Aside';
import Footer from './Footer';

function MainC() {
  return (
    <>
      <Header />
      <div className="main_body">
        <Article />
        <Aside />
        <Footer />
      </div>
    </>
  );
}
export default MainC;
