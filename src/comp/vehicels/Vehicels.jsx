import React from "react";
import "./Vehicels.scss";
import imag1 from "../../assets/car.jpeg";
const Vehicels = () => {
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

          <div class="list">
            {vehicle_image.map((item, index) => (
              <div class="vehicle_card" key={index}>
                <img src={item.image} alt="" />
                <div class="bottom">
                  <h2>{item.name}</h2>
                  <div class="btn">Contact Now</div>
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
