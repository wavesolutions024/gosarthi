import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import Herosection from '../comp/herosection/Herosection';
import About from "../comp/about/About";
import Info from "../comp/info/Info";
import Facilities from "../comp/facilities/Facilities";
import Gallery from "../comp/gallery/Gallery";
import Faq from "../comp/faq/Faq";

const Home = () => {
  return (
    <>
        <Herosection />
         <Info />
        <About  />
       
        <Facilities />
        <Gallery />
        <Faq />


        <div className="whats_app">
          <span>
            <FaWhatsapp />
          </span>
        </div>
    </>
  )
}

export default Home
