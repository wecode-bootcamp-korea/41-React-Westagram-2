import React from "react";
import { FooterData } from "./FooterData";
const Footer = () => {
  return;
  <div>
    {FooterData.map((value, key) => {
      <span key={key}>{value}</span>;
    })}
  </div>;
};

export default Footer;
//
