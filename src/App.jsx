import React, { useState } from "react";

import "./App.scss";
import Herosection from "./comp/herosection/Herosection";
import Facilities from "./comp/facilities/Facilities";
import About from "./comp/about/About";
import Footer from "./comp/footer/Footer";
import BeforeFooter from "./comp/before-footer/BeforeFooter";
import { FaWhatsapp } from "react-icons/fa";
import Header from "./comp/header/Header";
import BeforeHeader from "./comp/before_header/BeforeHeader";
import ContactPopup from "./comp/contact_popup/ContactPopup";
import Info from "./comp/info/Info";
import Gallery from "./comp/gallery/Gallery";
import NotFound from "./comp/notfound/NotFound";

function App() {
  const [popup, setPopUp] = useState(false);

  return (
    <>
      <div class="app">
        {popup && <ContactPopup setPopUp={setPopUp} />}
        <BeforeHeader />
        <Header setPopUp={setPopUp} />
        <Herosection />
        <About />
        <Info />
        <Facilities />
        <Gallery />
        <BeforeFooter />
        <Footer />
        <NotFound />

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
