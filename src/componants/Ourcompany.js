import React from "react";
import About1 from "../images/about1.png";
import Icon1 from "../images/icons/icons1.png"
import Icon2 from "../images/icons/icons2.png"
import AboutBG from "../images/about-backgrund.jpg";

const Ourcompany = () => {
  return (
    <>
      <section className="company-wrapper w-100">
        <div className="container d-flex py-5">
          <div className="row ">
          <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
            <img className="comapny-img" src={About1} alt="vision" />
            </div>
            <div className="col-lg-5 px-lg-3 col-sm-12">
          <h3>Our Company</h3>

          <h2 className="pt-2 pb-5">Our Company</h2>
          <p className="line-height">Valiant Corporation is a Service Provider to deliver the necessary
            consumer goods for the comfortable city life in prompt and
            appropriate way with reasonable price. Set customer satisfaction
            as 1st priority in our company business, Valiant Corporation makes
            much of building up the supply chain for our clients above all by
            prompt, appropriate and reasonable way. To realize our business
            strategy, experts with professional knowledge have designed the
            total logistics solution by making full use of advanced and
            improving method.
          </p>
           <div className="icon-div ">
            <div className="row d-flex">
            <div className="col-6 d-flex align-items-center">
            <figure className="me-2"><img src={Icon1} /></figure>
            <h2 className="icons_height">Brand Strategy</h2>
            </div>
            <div className="col-6 d-flex align-items-center ">
            <figure className="me-2"><img src={Icon2} /></figure>
            <h2 className="icons_height">Expert Team</h2>
            </div>

            </div>
            </div>

          </div>
         
          </div>
         
        </div>
      </section>
    </>
  );
};

export default Ourcompany;
