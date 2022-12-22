import React from "react";
import MainLayout from "./components/MainLayout";
import MainRightLayout from "./components/MainRightLayout";
import "./Main.scss";

export default function MainP() {
  return (
    <div>
      <div className="mainbackground">
        <MainLayout />
        <MainRightLayout />
      </div>
    </div>
  );
}
