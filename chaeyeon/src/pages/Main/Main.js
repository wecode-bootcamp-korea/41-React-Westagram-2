import React from "react";

import Header from "./Header";
import Article from "./Article";
import "./Main.scss";
import Aside from "./Aside";

function Main() {
  return (
    <>
      <Header />
      <div className="main_body">
        <Article />
        <Aside />
      </div>
    </>
  );
}
export default Main;
