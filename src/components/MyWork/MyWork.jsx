// eslint-disable-next-line no-unused-vars
import React from "react";
import "./MyWork.css";
// import graphic from "../../assets/graphic.png";
import mywork_data from "../../assets/mywork_data";
// import arrow from "../../assets/arrow.png"
const MyWork = () => {
  return (
    <div id="portfolio" className="mywork">
      <div className="mywork-title">
        <h1>My lastest work</h1>

      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt=""></img>;
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        {/* <img src={arrow} alt="" /> */}
      </div>
    </div>
  );
};

export default MyWork;
