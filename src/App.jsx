import React from "react";

import "./App.scss";
import Herosection from "./comp/herosection/Herosection";
import Facilities from "./comp/facilities/Facilities";
import About from "./comp/about/About";
import Footer from "./comp/footer/Footer";
import BeforeFooter from "./comp/before-footer/BeforeFooter";
import { FaWhatsapp } from "react-icons/fa";
import Info from "./comp/info/Info";

function App() {
  return (
    <>
      <div class="app">
        <Herosection />
        <About />
        <Info />
        <Facilities />
        <BeforeFooter />
        <Footer />

        <div className="whats_app">
          <span>
            <FaWhatsapp />
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
