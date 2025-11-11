import React from "react";
import "./BeforeFooter.scss";
import { MdPhone } from "react-icons/md";

const BeforeFooter = () => {
  return (
    <>
      <div className="parent bf_parent bg-img-cover">
        <div className="cont bf_cont">
          <div className="bf_left">
            <h3>
              Call us for further information. Rentaly customer care is here to
              help you anytime.
            </h3>
          </div>
          <div className="bf_right">
            <div className="call-wrap">
              <span>
                <MdPhone />
              </span>
              <span className="call_text">Call Us Now</span>
              <h3>8482940705</h3>
              <div className="btn">Contact Us</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeforeFooter;
