import React from "react";
import { NavLink } from "react-router-dom";
import RightArrow from "../images/chevron-right.png";
//  import Business from '../images/icon1.png';
//  import Data from './Data';

const Card = (props) => {
  return (
    <>
      <div className="col-md-4">
        <div className="service-box">
          <div className="dark-layer">
            <div className="card-header">
              <img
                className="card-img-top icon"
                src={props.imgsrc}
                alt={props.imgsrc}
              />
              <h4>{props.title}</h4>
            </div>
            <div className="card-body">
              <p>{props.description}</p>
              <div className="lm-btn">
                <span>
                  <img src={RightArrow} />
                </span>
                <NavLink to="/" className="learn-more">
                  Learn More
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
