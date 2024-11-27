// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import userIcon from "../../assets/user-icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p>dedicated frontend developer, I transform ideas into engaging and user-centric web applications.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={userIcon} alt="" />
            <input type="email"  placeholder="Enter Your Email"/>
         
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
   
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">@ 2024 Arwa Alzahrani. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Serivces</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
