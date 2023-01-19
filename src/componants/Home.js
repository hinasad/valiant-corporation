// import { Carousel } from "bootstrap/dist/js/bootstrap.bundle";
import Carousel from 'react-elastic-carousel';
import React from "react";
import GoalandVision from "./GoalandVision";
import Main from "./Main";
import Mensection from "./Mensection";
import NavBar from "./Navbar";
import Ourcompany from "./Ourcompany";
// import Partners from "./Partners";
import Services from "./Services";
import TheValiantCorporation from "./TheValiantCorporation";
import Carousel1 from "./Carousel";


const Home = () => {
  return (
    <>
      <div className="main py-2 ">
        <NavBar />
        <div className="main-header ">
          <section id="hero" className="d-flex align-items-center">
            <div className="container pt-md-5 mt-md-5 pt-sm-2 mt-sm-2 " data-aos="zoom-out" data-aos-delay="100">
              <h2 className="hero-text pt-md-5 pt-sm-2">THE VALIANT CORPORATION</h2>
              <h1 className="hero-para">
                we provide the industry
                <br /> with advanced solutions
              </h1>
              <div className="d-flex">
                <button className="hero-btn">Get Started Now</button>
              </div>
            </div>
          </section>
        </div>
        </div>


        <TheValiantCorporation />
        <Services />
        <Ourcompany />
        <GoalandVision />
        <Main />
        {/* <Partners /> */}
        <Carousel1 />
        <Mensection />


      

    </>
  );
};

export default Home;
