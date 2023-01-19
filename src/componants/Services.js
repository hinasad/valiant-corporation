import React from "react";
import Card from "./Card";
import Data from "./Data";
import Business from "../images/icon1.png";

const Services = () => {
  return (
    <>
      <section id="services">
        <h3 id="services_section">Our Services</h3>
        <h2>We Offer Professional Services For Business</h2>
        <p>
          As a services providing company we provide the industry with advanced
          solutions to their problems with DCS, PLCs and <br /> other Control
          Systems.
        </p>
        <div className="container">
          <div className="row">
         
            {Data.map((val, ind) => {
               
              return (
              
                <Card
                  key={ind}
                  imgsrc={val.imgsrc}
                  title={val.title}
                  description={val.description}
                />
               
              );
             
            })}
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
