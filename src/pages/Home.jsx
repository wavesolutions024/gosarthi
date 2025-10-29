import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Herosection from "../comp/herosection/Herosection";
import About from "../comp/about/About";
import Info from "../comp/info/Info";
import Facilities from "../comp/facilities/Facilities";
import Gallery from "../comp/gallery/Gallery";
import Faq from "../comp/faq/Faq";
import Vehicels from "../comp/vehicels/Vehicels";
import { IoCallOutline } from "react-icons/io5";
import Packages from "../comp/packagee/Packages";

const Home = () => {
  return (
    <>
      <Herosection />
      {/* <Info /> */}
      <About />
      <Vehicels />
      <Facilities />
      {/* <Gallery /> */}
      <Faq />
      <Packages />

      <div className="whats_app">
        <span>
          <FaWhatsapp />
        </span>
      </div>

      <div className="call">
        <span>
          <IoCallOutline />
        </span>
      </div>
    </>
  );
};

export default Home;
