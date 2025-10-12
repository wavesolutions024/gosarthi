import React from "react";
import "./Gallery.scss";


const Gallery = () => {
  return (
    <>
      <div className="parent gallery-parent">
        <div className="cont gallery-cont">
          <div className="wrap-gallery">
            <div className="box box1 bg-img-cover"></div>
            <div className="box box2 bg-img-cover"></div>
            <div className="box box3 bg-img-cover"></div>
            <div className="box box4 bg-img-cover"></div>
            <div className="box box5 bg-img-cover"></div>
            <div className="box box6 bg-img-cover"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
