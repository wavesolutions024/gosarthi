import React, { useState } from "react";
import "./Vehicels.scss";
import imag1 from "../../assets/car.jpeg";
import { FaArrowUpLong } from "react-icons/fa6";

const Vehicels = () => {
  const [showInfo, setShowInfo] = useState(false);

  const vehicle_image = [
    {
      name: "Innova",
      image: imag1,
    },
    {
      name: "Ertiga",
      image: imag1,
    },
    {
      name: "Swift",
      image: imag1,
    },
    {
      name: "Zest",
      image: imag1,
    },
    {
      name: "Verna",
      image: imag1,
    },
  ];
  return (
    <>
      <div class="vehicels_parent parent">
        <div class="vehicels_cont cont">
          <h2>Our Vehicels</h2>
          <div className="list">
            {vehicle_image.map((item, index) => (
              <div className="vehicle_card" key={index} onMouseLeave={() => setShowInfo(false)}>
                <div class="tag">15rs/km</div>
                <img src={item.image} alt="" />
                <h2>{item.name}</h2>
                <div className="bottom">
                  <span
                    className="arrow_info"
                    onClick={() => setShowInfo(index)}
                  >
                    Info
                    <FaArrowUpLong />
                  </span>
                  <div className="btn">Contact Now</div>
                </div>

                <div
                  className={`info_card ${showInfo === index ? "show" : ""}`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  explicabo possimus, similique non quibusdam alias. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Et explicabo
                  possimus, similique non quibusdam alias.
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Vehicels;
