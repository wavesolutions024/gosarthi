import React from "react";
import "./About.scss";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Go Sarthi | Car Rental & Luxury Car Services</title>
        <meta
          name="description"
          content="Go Sarthi offers a wide range of commercial and luxury cars for rental. Our mission is to provide high-quality, convenient, and customer-friendly car rental services."
        />
        <meta
          name="keywords"
          content="Go Sarthi, Car Rental, Luxury Cars, Commercial Cars, Pune Car Rental, Self Drive Cars, Hire Cars"
        />
        <meta name="author" content="Go Sarthi" />
        <link rel="canonical" href="https://gosarathi.com/about" />
      </Helmet>

      <div className="parent about-parent" id="about">
        <div className="cont about-cont">
          <div className="about-left">
            <h3>
              {" "}
              We offer customers a wide range of <span>
                commercial cars
              </span>{" "}
              and <span>luxury cars</span> for any occasion.
            </h3>
          </div>
          <div className="about-right">
            <p>
              At Rentaly, we are dedicated to providing exceptional car rental
              services to our valued customers. With a commitment to quality,
              convenience, and customer satisfaction, we strive to make every
              rental experience a seamless and enjoyable one. We understand that
              every customer has unique needs and preferences when it comes to
              renting a car. That's why we maintain a diverse fleet of
              well-maintained vehicles to cater to various requirements. From
              compact cars for solo travelers to spacious SUVs for families, we
              have a wide range of options to choose from.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
