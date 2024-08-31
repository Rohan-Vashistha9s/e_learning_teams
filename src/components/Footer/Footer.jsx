import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
        <footer>
         <div className="footer-inner">
            <div className="f-logo-sec">
                <div className="f-logo">
                   <div className="f-box">
                    {/* <i className="fa-thin fa-square"></i> */}
                   </div>
                   <h4>TOTC</h4>
                </div>
                <div className="line">
                  {/* <!-- <i className="fa-solid fa-slash"></i> --> */}
                </div>
                <div>
                  <p>Virtual class <br /> for Zoom</p>
                </div>
            </div>

            <div>
             <h5> Subscribe to get our Newsletter</h5>
            </div>

            <div className="f-input">
              <div className="in">
                <input type="text" placeholder="Your Email" />
              </div>
              <div>
                <button>Subscribe</button>
              </div>
             
            </div>
            <div>
              <span>Careers |</span>
              <span>Privacy Policy |</span>
              <span>Terms & Conditions</span>

            </div>
            <div>
              <h6>© 2021 className Technologies Inc. </h6>
            </div>
         </div>
       </footer>
  )
}

export default Footer;