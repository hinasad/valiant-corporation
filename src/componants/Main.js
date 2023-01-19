import "./Main.css";
import background11 from "../images/background11.svg";
import service from "../images/service.svg";
import gotback from "../images/gotback.svg";
import smart from "../images/smart.svg";


function Main() {
    return (
        // <div className="main1" id="main">
        //     <img className="background" alt="" src={background11} />
        //     <input type="checkbox" name="check" id="box"></input>

        <div className="container d-flex _main justify-content-center">

            {/* ----------select your services-------- */}
            {/* --------frame1-------- */}
            <div className="row ">
                <div className="card col-lg-4 col-md-6 col-sm-12 text-center px-5">
                <div className="card-body text-center">
                    <img className="" alt="" src={service} />

                 
                        <p>
                           Lorem ipsum, dolor sit amet consectetur deleniti quidem odit vitae at aut dolor, commodi molestias!
                        </p>
                   

                   </div>
                </div>

                {/* --------------frame2----------- */}
                <div className="card col-lg-4 col-md-6 col-sm-12 text-center px-5">
                    <div className="card-body text-center">
                    <img className="" alt="" src={gotback} />

                    <p>
                    Lorem ipsum dolor sit amet consectetur incidunt natus quos consequatur repellat quo minus excepturi veritatis.
                    </p>
                      
              
                        </div>
                   
                </div>

                {/*----------frame3---------  */}
                <div className="card col-lg-4 col-md-6 col-sm-12 text-center px-5">
                <div className="card-body text-center">
                    <img className="" alt="" src={smart} />

                  
                        <p>
                           Lorem ipsum dolor sit amet alias error minima dolorem modi eos incidunt officiis officia non unde at.
                        </p>
           

                   </div>

                </div>
            </div>
        </div>
      

    );
};

export default Main;
