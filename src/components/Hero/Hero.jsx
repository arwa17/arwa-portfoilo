/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./hero.css";
import profile from "../../assets/profile-img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img className="profile-img" src={profile} alt="" />
      <h1>
    
        <span>Arwa Alzahrani,</span> Crafting Immersive Digital Experiences
      </h1>
      <p>
        As a dedicated frontend developer, I transform ideas into engaging and
        user-centric web applications. With expertise in React, JavaScript,
        HTML, and CSS, I create seamless digital experiences. Let's collaborate
        and build something extraordinary together.
      </p>

      <div className="hero-action">
        <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href="#contact">Connect with me</AnchorLink></div>
        <div className="hero-resume"> <a href={"https://drive.google.com/file/d/1xo5V5KScKEu2GW6A4PtF-3x4bnNRL-9v/view?usp=share_link"} target="_blank" rel="noopener noreferrer" className='resume-link'>
            My resume
          </a></div>
      </div>
    </div>
  );
};

export default Hero;
