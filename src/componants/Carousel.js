import React from "react";
import { Carousel } from "react-bootstrap";
import moodle from '../images/moodle.svg';
import magento from '../images/magento.svg';
import wordpress from '../images/wordpress.svg';
import themeforest from '../images/themeforest.svg';
import rails from '../images/rails.svg';
import advity from '../images/advity.svg';

const Carousel1 = () => {
  return (
    <div>
      <Carousel itemPadding={[10, 50]} itemsToShow={3}>
      <div className="container py-5">
    <h1 className="text-center py-5">Our Partners</h1>
    <div className="row d-flex justify-content-center">
      <div className="col-lg-2 col-md-4 py-lg-1 py-md-3 py-xs-4 col-sm-6  ">
      <img className="" alt="" src={moodle} />
      </div>
      <div className="col-lg-2 col-md-4 py-lg-1 py-md-3 py-xs-4 col-sm-6  ">
      <img className="" alt="" src={wordpress}/>
      </div>
      <div className="col-lg-2 col-md-4 py-lg-1 py-md-3 py-xs-4 col-sm-6  ">
      <img className="" alt="" src={themeforest}/>
      </div>
      <div className="col-lg-2 col-md-4 py-lg-1 py-md-3 py-xs-4 col-sm-6  ">
      <img className="" alt="" src={rails}/>
      </div>
      <div className="col-lg-2 col-md-4 py-lg-1 py-md-3 py-xs-4 col-sm-6  ">
      <img className="" alt="" src={advity}/>
      </div>
      <div className="col-lg-2 col-md-4 py-lg-1 py-md-3 py-xs-4 col-sm-6  ">
      <img className="" alt="" src={magento}/>
      </div>
    </div>
    </div>
      </Carousel>
    </div>
  );
};

export default Carousel1;
