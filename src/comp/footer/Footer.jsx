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
              <h4>About GoSarthi</h4>
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
                <a
                  href="https://maps.app.goo.gl/TjSSxSFLGeZPuwMg9"
                  target="_blank"
                  className="location"
                >
                  <span>
                    <IoLocationSharp />
                  </span>
                  <p>
                    B-23,Sidhivinayak Appartment,Kasturba Housing
                    Society,Vishrantwadi
                  </p>
                </a>
                <a
                  href="tel:+918482940705"
                  target="_blank"
                  className="location"
                >
                  <span>
                    <MdPhone />
                  </span>
                  <p>+91 8482940705</p>
                </a>
                <a
                  href="mailto:gosarathi4@gmail.com"
                  target="_blank"
                  className="location"
                >
                  <span>
                    <FaEnvelope />
                  </span>
                  <p>gosarathi4@gmail.com</p>
                </a>
              </div>
            </div>
            <div className="quick_link">
              <h4>Quick Links</h4>

              <a href="#about">About</a>
              <a href="#vehicles">Our Vehicels</a>
              <a href="#facilities">Facilities</a>
              <a href="#packages">Packages</a>
            </div>

            <div className="social_icon">
              <h4>Extra Links</h4>

              <div className="social-wrap">
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms-condition">Terms and Conditions</a>
              </div>
            </div>

            {/* <div className="social_icon">
              <h4>Social Network</h4>

              <div className="social-wrap">
                <span><FaFacebookF /></span>
                <span><GrInstagram /></span>
                <span><FaLinkedinIn /></span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
