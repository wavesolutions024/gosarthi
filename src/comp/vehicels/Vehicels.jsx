import React, { useState } from "react";
import "./Vehicels.scss";
import { FaArrowUpLong } from "react-icons/fa6";
import ertiga from "../../assets/ertiga.png";
import innova from "../../assets/innova.png";
import swift from "../../assets/swift.jpeg";

const Vehicels = ({setPopUp}) => {
  const [showInfo, setShowInfo] = useState(false);
  

  const vehicle_image = [
    {
      name: "Innova",
      image: innova,
      price: "₹20 per km ",
      head: "Minimum package: ₹300",
      content: "Toll, parking, state tax, and driver food extra",
      tag: "20rs/km",
    },
    {
      name: "Ertiga",
      image: ertiga,
      price: "₹15 per km ",
      head: "Minimum package: ₹300",
      content: "Toll, parking, state tax, and driver food extra",
      tag: "15rs/km",
    },
    {
      name: "Swift",
      image: swift,
      price: "₹12 per km ",
      head: "Minimum package: ₹300",
      content: "Toll, parking, state tax, and driver food extra",
      tag: "12rs/km",
    },
  ];
  return (
    <>
      <div class="vehicels_parent parent" id="vehicles">
        <div class="vehicels_cont cont">
          <h2>Our Vehicels</h2>
          <div className="list">
            {vehicle_image.map((item, index) => (
              <div
                className="vehicle_card"
                key={index}
                onMouseLeave={() => setShowInfo(false)}
              >
                <div class="tag">{item.tag}</div>
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
                  <div onClick={() => setPopUp(true)} className="btn">
                    Contact Now
                  </div>
                </div>

                <div
                  className={`info_card ${showInfo === index ? "show" : ""}`}
                >
                  <div className="price_content">
                    <p className="price">{item.price}</p>
                    <p className="head">{item.head}</p>
                    <p className="contentt">{item.content}</p>
                  </div>
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
