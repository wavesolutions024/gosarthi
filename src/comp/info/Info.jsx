import React, { useState } from "react";
import "./Info.scss";
import car from "../../assets/hero.png";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Info = () => {
  const cars = [
    { id: 1, name: "Jeep Renegade", image: car },
    { id: 2, name: "Audi Q3", image: car },
    { id: 3, name: "BMW X1", image: car },
  ];

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="parent info_parent">
        <div className="cont info_cont">
          <div className="info-wrap">
            <div className="custom-select" onClick={() => setOpen(!open)}>
              <div className="selected">
                {selected ? (
                  <>
                    <img src={selected.image} alt={selected.name} />
                    <span>
                      <strong>{selected.name}</strong>
                    </span>
                  </>
                ) : (
                  <span className="placeholder">Select Cars</span>
                )}

                {/* Arrow icon toggle */}
                <span className={`arrow-icon ${open ? "open" : ""}`}>
                  {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </div>

              {open && (
                <div className="options">
                  {cars.map((car) => (
                    <div
                      key={car.id}
                      className="option"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelected(car);
                        setOpen(false);
                      }}
                    >
                      <img src={car.image} alt={car.name} />
                      <span>
                        <strong>{car.name}</strong>
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="kilometers">Rs.25 / km</div>
            <div className="kilometers">Distance</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
