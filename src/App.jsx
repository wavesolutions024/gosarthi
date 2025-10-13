import React, { useState } from "react";

import "./App.scss";

import Footer from "./comp/footer/Footer";
import BeforeFooter from "./comp/before-footer/BeforeFooter";

import Header from "./comp/header/Header";
import BeforeHeader from "./comp/before_header/BeforeHeader";
import ContactPopup from "./comp/contact_popup/ContactPopup";

import NotFound from "./comp/notfound/NotFound";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [popup, setPopUp] = useState(false);

  return (
    <>
      <div class="app">
        <BrowserRouter>
          {popup && <ContactPopup setPopUp={setPopUp} />}
          <BeforeHeader />
          <Header setPopUp={setPopUp} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* <BeforeFooter /> */}
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
