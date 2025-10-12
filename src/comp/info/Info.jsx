import React from "react";
import "./Info.scss";
import car from "../../assets/hero.png";
const Info = () => {
  const cars = [
    { id: 1, name: "Jeep Renegade", image: carImg },
    { id: 2, name: "Audi Q3", image: carImg },
    { id: 3, name: "BMW X1", image: carImg },
  ];

  return (
    <>
      <div className="parent info_parent">
        <div className="cont info_cont">
          <div className="info-wrap">
            <div style={{ width: 350 }}>
              <select
                options={options}
                placeholder="Select Cars"
                styles={{
                  control: (base) => ({
                    ...base,
                    borderColor: "#001F54",
                    boxShadow: "none",
                    padding: "4px",
                  }),
                  placeholder: (base) => ({
                    ...base,
                    fontWeight: "bold",
                    color: "#001F54",
                  }),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
