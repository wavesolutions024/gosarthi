import React, { useState } from "react";
import "./Info.scss";
import car from "../../assets/hero.png";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Info = () => {
  const cars = [
    { id: 1, name: "Jeep Renegade", image: car, rate: 30 },
    { id: 2, name: "Audi Q3", image: car, rate: 14 },
    { id: 3, name: "BMW X1", image: car, rate: 13 },
  ];

  const [totalKm, setTotalKm] = useState();

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="parent info_parent">
        <div className="cont info_cont">
          <h1>
            Calulate Your Trip
          </h1>
          <div className="info-wrap">
            <div className="custom-select" onClick={() => setOpen(!open)}>
              <div className="select_input">
                {selected !== null ? (
                  <p>{cars[selected]?.name}</p>
                ) : (
                  <>
                    <p>Select Car</p>

                    <div class="icon">
                      {!open ? <IoIosArrowDown /> : <IoIosArrowUp />}
                    </div>
                  </>
                )}
              </div>
              {open && (
                <div className="option_list">
                  {cars.map((item, index) => (
                    <div
                      className="option"
                      value=""
                      key={index}
                      onClick={() => setSelected(index)}
                    >
                      <span>
                        {" "}
                        <img src={item.image} alt="" />{" "}
                      </span>
                      {item.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="form-row">
              <label for="">Km Rate</label>
              <input
                type="text"
                placeholder="Km Rate"
                value={cars[selected]?.rate}
                disabled
              />
            </div>
            <div className="form-row">
               <label for="">Enter Total Kilometer</label>
              <input
                type="text"
                placeholder="Total Km"
                value={totalKm}
                onChange={(e) => setTotalKm(e.target.value)}
              />
            </div>
            <div className="form-row">
               <label for=""> Total Amount</label>
              <input
                type="text"
                placeholder="Total Rate"
                value={totalKm * cars[selected]?.rate || ""}
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
