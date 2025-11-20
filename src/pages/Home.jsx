import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Herosection from "../comp/herosection/Herosection";
import About from "../comp/about/About";
import Facilities from "../comp/facilities/Facilities";
import Faq from "../comp/faq/Faq";
import Vehicels from "../comp/vehicels/Vehicels";
import { IoCallOutline } from "react-icons/io5";
import Packages from "../comp/packagee/Packages";

const Home = ({ setPopUp }) => {
  return (
    <>
      <Herosection setPopUp={setPopUp} />
      {/* <Info /> */}
      <About />
      <Vehicels setPopUp={setPopUp} />
      <Facilities />
      {/* <Gallery /> */}
      <Faq />
      <Packages />

      <a
        href="https://wa.me/+918482940705"
        target="_blank"
        className="whats_app"
      >
        <span>
          <FaWhatsapp />
        </span>
      </a>

      <a href="tel:+918482940705" className="call">
        <span>
          <IoCallOutline />
        </span>
      </a>
    </>
  );
};

export default Home;
