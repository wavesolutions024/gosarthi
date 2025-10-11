import React from "react";
import "./Herosection.scss";
import hro_img from "../../assets/hero.png"
const Herosection = () => {
  return (
    <>
      <div class="herosection_parent parent">
        <div class="herosection_cont cont">
          <div class="left">
            <h4 className="header_text">Plan your trip now</h4>
            <h1 className="hero_heading" >Explore the world with comfortable car</h1>
            <p>
              Embark on unforgettable adventures and discover the world in
              unparalleled comfort and style with our fleet of exceptionally
              comfortable cars.
            </p>

            <div class="btn">Know More</div>
          </div>
          <div class="right">
            <img src={hro_img} alt=""/>
          </div>
        </div>

        <div class="mask_image bg-img-cover"></div>
      </div>
    </>
  );
};

export default Herosection;
