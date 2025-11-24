import React, { useState } from "react";
import "./Facilities.scss";
import { Helmet } from "react-helmet";

const Facilities = () => {
  const [tab, setTab] = useState("Luxury");

  return (
    <>
      <Helmet>
        <title>Car Rental Facilities | Luxury, Comfort & Prestige</title>
        <meta
          name="description"
          content="Explore premium car rental facilities offering Luxury, Comfort, and Prestige cars. High-quality vehicles for travel across Pune and Maharashtra."
        />
        <meta
          name="keywords"
          content="car rental pune, luxury cars pune, comfort cars, prestige cars, rental services"
        />
        <link rel="canonical" href="https://gosarathi.com/facilities" />

        {/* OG TAGS */}
        <meta property="og:title" content="Best Car Rental Facilities" />
        <meta
          property="og:description"
          content="Choose from Luxury, Comfort, and Prestige car rentals."
        />
        <meta property="og:url" content="https://gosarathi.com/facilities" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="parent facility_parent" id="facilities">
        <div className="facility-left bg-img-cover"></div>
        <div className="facility-right">
          <h2>Only Quality For Clients</h2>

          <div className="tabs">
            <div
              className={`btns ${tab === "Luxury" ? "active" : ""}`}
              onClick={() => setTab("Luxury")}
            >
              Luxury
            </div>
            <div
              className={`btns ${tab === "Comfort" ? "active" : ""}`}
              onClick={() => setTab("Comfort")}
            >
              Comfort
            </div>
            <div
              className={`btns ${tab === "Prestige" ? "active" : ""}`}
              onClick={() => setTab("Prestige")}
            >
              Prestige
            </div>
          </div>

          {tab === "Luxury" && (
            <p>
              We offer a meticulously curated collection of the most
              sought-after luxury vehicles on the market. Whether you prefer the
              sporty allure of a high-performance sports car, the sophistication
              of a sleek and luxurious sedan, or the versatility of a premium
              SUV, we have the perfect car to match your discerning taste.
            </p>
          )}

          {tab === "Comfort" && (
            <p>
              We prioritize your comfort and convenience throughout your
              journey. We understand that a comfortable ride can make a world of
              difference, whether you're embarking on a business trip or
              enjoying a leisurely vacation. That's why we offer a wide range of
              well-maintained, comfortable cars that cater to your specific
              needs.
            </p>
          )}

          {tab === "Prestige" && (
            <p>
              We understand that prestige goes beyond luxury. It's about making
              a statement, embracing sophistication, and indulging in the finer
              things in life. That's why we offer an exclusive selection of
              prestigious cars that exude elegance, style, and status.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Facilities;
