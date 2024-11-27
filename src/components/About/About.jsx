// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./About.css"
import about from "../../assets/about-img.png"
import graphic from "../../assets/graphic.png"


const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={graphic} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={about} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>As a dedicated frontend developer, I transform ideas into engaging and user-centric web applications. With expertise in React, JavaScript, HTML, and CSS, I create seamless digital experiences.</p>
                        
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{width:"50%"}}/>
                        </div> 
                        <div className="about-skill">
                            <p>React JS</p>
                            <hr style={{width:"70%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p>
                            <hr style={{width:"60%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>UI/UX</p>
                            <hr style={{width:"50%"}}/>
                        </div>
                
                    </div>
                
                </div>
            </div>
    <div className="about-achievements">
        <div className="about-achievement">
            <h1>2+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>30+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>HAPPY CLIENTS</p>
        </div>

    </div>
        </div>
    );
}

export default About;
