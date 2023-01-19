// import "./mensection.css";
import background1 from "../images/background2.svg";
import men from "../images/men.svg";
const Mensection = () => {
    return (
        <div className="container-fluid call-to-action mt-5">


            <div className="container">

                <div className="row pt-5">
                <div className="col-md-6 col-sm-12 d-flex justify-content-center ">
                   
                   <img className="men-img" alt="" src={men} />
                   </div>
                <div className="col-md-6 col-sm-12 pt-5 pb-md-0 pb-sm-5">

                        <h5 className="pt-5 mt-5">READY TO STARTED?</h5>
                    

                    <h1>We would love to hear from you</h1>

                    <p>
                        Whether you have question about feature, trials, pricing , need a
                        demo, or anything else. our team is ready to answer all you question
                    </p>

                     <button>Get Started Now</button>
                  </div>
                    

                

                </div>
            </div>
        </div>
    );
};

export default Mensection;
