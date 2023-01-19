import React from 'react'
import About2 from "../images/about2.png";
import Icon3 from "../images/icons/icons3.png"
import Icon4 from "../images/icons/icons4.png"
import AboutBG from "../images/about-backgrund.jpg";


const GoalandVision = () => {
  return (
    <>
      <section className="company-wrapper w-100" >
      <div className="container d-flex py-5">
          <div className="row ">
         
          <div className="col-lg-6 col-sm-12">
        
            <h3 className=' mt-5'>Goal and Vision</h3>

            <h2 className='pt-2 pb-5'>Goal and Vision</h2>
            <p className='line-height'>
              Valiant Corporation  continue making our efforts to establish the higher quality SCM aligning with customer requirements by proactively making substantial investment to upsizing of logistics facilities, construction of smart logistics with utilization of IT, employee training and as such. Moreover, we are targeting to provide the high-quality services by precisely catching the demand in market expanding year by year.


            </p>
            <div className="icon-div ">
            <div className="row d-flex">
            <div className="col-6 d-flex align-items-center">
         
              <figure className="me-2"><img src={Icon3} /></figure>
              <h2 className="icons_height">Fast Delivery</h2>
              </div>
              <div className="col-6 d-flex align-items-center ">
              <figure  className="me-2"><img src={Icon4} /></figure>
              <h2 className="icons_height">Ongoing Report</h2>
            </div>
            </div>

          </div>
        </div>
        <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
          <img className='goal-img' src={About2} alt="vision" />
          </div>
        </div>
        </div>
      </section>

    </>
  )
}

export default GoalandVision