import React from "react";
import "./Footer.scss";
import { IoLocationSharp } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="parent footer_parent">
        <div className="cont footer_cont">
          <div className="footer-wrap">
            <div className="info">
              <h4>About Rentaly</h4>
              <p>
                Where quality meets affordability. We understand the importance
                of a smooth and enjoyable journey without the burden of
                excessive costs. That's why we have meticulously crafted our
                offerings to provide you with top-notch vehicles at minimum
                expense.
              </p>
            </div>
              <div className="cont_info">
              <h4>Contact Info</h4>

              <div className="contact-wrap">
                <div className="location">
                  <span>
                    <IoLocationSharp />
                  </span>
                  <p>08 W 36th St, New York, NY 10001</p>
                </div>
                <div className="location">
                  <span>
                    <MdPhone />
                  </span>
                  <p>+91 8482940705</p>
                </div>
                <div className="location">
                  <span>
                    <FaEnvelope />
                  </span>
                  <p>contact@example.com</p>
                </div>
              </div>
            </div>
            <div className="quick_link">
              <h4>Quick Links</h4>

              <a>About</a>
              <a>Features</a>
              <a>Blog</a>
              <a>Carrer</a>
              <a>Packages</a>
            </div>
          
            <div className="social_icon">
              <h4>Social Network</h4>

              <div className="social-wrap">
                <span><FaFacebookF /></span>
                <span><GrInstagram /></span>
                <span><FaLinkedinIn /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
