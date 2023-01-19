// import "./footer.css";
import Recaptcha from '../images/reCAPTCHA.svg';
import send from '../images/send.svg';
import logo from '../images/logo.svg'
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import linkdin from '../images/linkdin.svg';
import insta from '../images/insta.svg';
import ReCAPTCHA from "react-google-recaptcha";
function onChange(value) {
    console.log("Captcha value:", value);
}
const Footer = () => {
    return (
        <footer className=" footer">
            <div className="row rectangle4 " />
            <div className="footer1  ">

                <div className="footerlogo sm-12 -md-3">
                    <div className="frame6">

                        <div className="frame7 col-sm-12">

                            {/* <button className="frame8" autoFocus>
                                <div className="rectangle5" />
                                <div className="subscribe-now">Subscribe Now</div>
                            </button> */}

                            <div className="rectangle6" />
                            <div className="rectangle7">
                                <img className='send sm-12' alt='' src={send} />
                            </div>

                            <div className="subscribe-to-our">
                                SUBSCRIBE TO OUR NEWSLETTER
                            </div>

                        </div>

                    </div>

                    <img className="image-icon12 col sm-12" alt="" src={logo} />
                    
                    <div className='captcha'>
                        <ReCAPTCHA
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            onChange={onChange}
                        />,
                    </div>


                </div>

                <div className="footerfb">
                    <div className="div"><img alt='' src={linkdin} /></div>
                    <div className="div1"><img alt='' src={insta} /></div>
                    <div className="div2"><img alt='' src={facebook} /></div>
                    <div className="div3"><img alt='' src={twitter} /></div>
                </div>

                <div className="servicesfooter">
                    <div className="frame9">
                        <div className="services11">Services</div>
                        <div className="about-us">About Us</div>
                        <div className="engineering-services">Engineering Services</div>
                        <div className="corporate-services">Corporate Services</div>
                        <div className="contact-us">Contact Us</div>
                    </div>
                    <div className="services1">Services</div>
                </div>

                <div className="career">Career</div>

                <div className="contactinfo">
                    <div className="frame10">
                        <div className="c17-block-a">
                            C.17 block A kazimabad, Jinnah Avenue post office Model Coloney,
                            Karachi - Pakistan
                        </div>
                    </div>
                    <div className="contact-info">Contact Info</div>
                </div>
                <a
                    className="infovaliant-corporationcom"
                    href="mailto:info@valiant-corporation.com"
                    target="_blank"
                >
                    info@valiant-corporation.com
                </a>
                <div className="div4">+92-21-34508181</div>
                <div className="div5">+92-302-822-0047</div>
                <div className="wwwvaliant-corporationcom">
                    www.valiant-corporation.com
                </div>
                <div className="phone">Phone:</div>
                <div className="email">Email:</div>
                <div className="whatsapp">Whatsapp:</div>
                <div className="web">web:</div>
            </div>
            <div className="copyright">
                <div className="rectangle8" />
                <div className="copytext">
                    <div className="frame11">
                        <div className="digi-tech-infra">Digi tech infra</div>
                        <div className="copyright-2022">
                            Copyright © 2022 Valiant Corporation
                        </div>
                    </div>
                    <div className="frame12">
                        <div className="terms-conditions">{`Terms & Conditions`}</div>
                        <div className="privacy-policy">Privacy Policy</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
