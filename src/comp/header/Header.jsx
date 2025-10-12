import React, { useEffect, useState } from "react";
import "./Header.scss";

import logo from "../../assets/temp_logo.png";
import Hamburger from "hamburger-react";
const Header = () => {
  const [active, setActive] = useState(false);
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        class={
          active || isOpen
            ? "header_parent parent active"
            : "header_parent parent"
        }
      >
        <div class="header_cont cont">
          <div class="logo">
            <img src={logo} alt="" />
          </div>
          <div class="nav_section">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Our Vehicels</a>
            <a href="">Facilities</a>
            <a href="">Gallery</a>
          </div>
          <div class="contact_us">
            <div class="btn">Contact Us</div>
          </div>

          <div class="hamburger">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>

        {isOpen && (
          <div class="mobile_section">
            <a href=""  onClick={()=>setOpen(false)} >Home</a>
            <a href=""  onClick={()=>setOpen(false)}  >About</a>
            <a href="" onClick={()=>setOpen(false)}  >Our Vehicels</a>
            <a href="" onClick={()=>setOpen(false)}  >Facilities</a>
            <a href="" onClick={()=>setOpen(false)}  >Gallery</a>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
