/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "../contact/contact.css";
import locationIcon from "../../assets/location-icon.png";
import emailIcon from "../../assets/email-icon.png";
import phoneIcon from "../../assets/phone-icon.png";

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "19db6736-3e4e-4801-be71-c88914175738");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
        alert(res.message)
        }
      };
  return (

<div className="contact" id="contact">
      <div className="contact-title">
        <h1>Get in touch </h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
        <h1>Let's talk</h1>
        <p>
          {" "}
          Specializing in crafting exceptional front-end experiences. Ready to
          bring your vision to life. Contact me to discuss your next project.
        </p>
      
        <div className="contact-details">
          <div className="contact-detail">
            
            <img src={emailIcon} alt="" />
            <a href="mailto:arwa11886611@gmail.com" >
            <p>
                arwaalali11@gmail.com
            </p>
            </a>
          </div>
          <div className="contact-detail">
            <img src={phoneIcon} alt="" />
             <a href="tel:0570456559">
            <p>
                +966 570456559
            </p>
            </a>
          </div>
          <div className="contact-detail">
            <img src={locationIcon} alt="" />
            <p>
                Jeddah, Saudi Arabia
            </p>
          </div>

        </div>
      </div>
<form onSubmit={onSubmit} className="contact-right">
    <label htmlFor="name">Your Name</label>
    <input type="text" name="name" id="name" placeholder="Enter Your Name"/>
    <label htmlFor="email">Your Email</label>
    <input type="email" name="email" id="email" placeholder="Enter Your Email"/>
    <label htmlFor="message"> Write Your Message Here</label>
    <textarea name="message" id="message" placeholder="Enter Your Message" rows="8"></textarea>
<button  type="submit"className="contact-submit">Submit Now</button>
</form>
    </div>
    </div>
  );
};

export default Contact;


