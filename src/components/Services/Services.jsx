import { useState } from "react";
import "./services.css";
import Services_Data from "../../assets/services-data";
import arrow from "../../assets/arrow.png";


const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          const [isExpanded, setIsExpanded] = useState(false);

          return (
            <div key={index} className="services_format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>
                {isExpanded ? service.s_desc : `${service.s_desc.substring(0, 100)}...`}
              </p>
              <div className="services-readmore" onClick={() => setIsExpanded(!isExpanded)}>
                <p>{isExpanded ? "Read Less" : "Read More"}</p>
                <img src={arrow} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;