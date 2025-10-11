import React from "react";
import "./About.scss";

const About = () => {
  return (
    <>
      <div className="parent about-parent">
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
