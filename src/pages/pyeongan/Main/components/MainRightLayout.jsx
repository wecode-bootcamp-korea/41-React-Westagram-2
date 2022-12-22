import React from "react";
import "../Main.scss";

export default function main() {
  return (
    <>
      <div className="divMainRight">
        <div className="userImportant">
          <img
            className="rightprofileimg"
            alt="wecode logo"
            src="./images/wecode.jpeg"
          />
          <span className="rightprofileid">wecode_WECODE</span>
          <span className="rightprofilenickname">위코드</span>
          <span className="changeid">전환</span>
        </div>

        <div className="storyBox">
          <div>
            <span className="addfriend">회원님을 위한 추천</span>
            <span className="seeall">모두 보기</span>
          </div>
        </div>

        <div className="corporateInformation">
          <span className="companyinfo1">
            소개 도움말 홍보 센터 API채용 위치 언어 개인정보처리약관
          </span>
          <p>© 2022 INSTAGRAM FROM META</p>
        </div>
      </div>
    </>
  );
}

{
  /* const inputTextnAndBtn = () => {
  const commentInput = document.getElementById("commentjs");
  const commentBtn = document.getElementById("btn");

  const addNewComment = () => {
    const addUl = document.getElementsByclassNameName("addcommentul")[0];
    const addLi = document.createElement("li");

    addLi.innerHTML = `<div className="pincomment">
        <span>WecodeID : </span>
        <span>${commentInput.value}</span><button id="delButton"><i className="fa-regular fa-circle-xmark"></i></button><button className="heartOnOff"><i className="fa-solid fa-heart"></i></button>
      </div>`;

    addUl.appendChild(addLi);
    commentInput.value = "";

    const btnDel = document.getElementById("delButton");
    btnDel.addEventListener("click", () => {
      addUl.removeChild(addLi);
    });

    const heartbtn = document.querySelector(".heartOnOff");
    heartbtn.addEventListener("click", () => {
      heartbtn.classNameList.toggle("hearttoggle");
    });
  };

  commentBtn.addEventListener("click", () => {
    if (commentInput.value) {
      addNewComment();
    } else {
      alert("댓글을 달아주세요.");
    }
  });

  commentInput.addEventListener("keypress", (e) => {
    if (commentInput.value.length !== 0 && e.key === "Enter") {
      addNewComment();
    }
  });
};

inputTextnAndBtn();

const popup = document.getElementsByclassNameName("headertextline")[0];

popup.addEventListener("click", () => {
  const popuppage1 = document.getElementsByclassNameName("searchpopuppage")[0];
  popuppage1.classNameList.toggle("popuppage");
}); */
}
