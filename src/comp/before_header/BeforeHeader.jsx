import React from "react";
import "./BeforeHeader.scss";
import { FaPhone } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGoogle } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
const BeforeHeader = () => {
  return (
    <>
      <div class="before_header parent">
        <div class="before_header_cont cont">
          <div class="left">
            <a href="">
              <span>
                <FaPhone />
              </span>
              <span className="text">+91 1234 567 890</span>
            </a>
          </div>

          <div class="right">
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <BiLogoGoogle />
            </a>
            <a href="">
              <IoLocationSharp />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeforeHeader;
