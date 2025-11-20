import React from "react";
import "./Herosection.scss";
import hro_img1 from "../../assets/car_p.webp";
import hro_img2 from "../../assets/slide2.webp";
import hro_img3 from "../../assets/slide3.webp";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Herosection = ({setPopUp}) => {
  const heroSlides = [
    {
      title: "Plan your trip now",
      heading: "Explore the world with comfortable car",
      desc: "Embark on unforgettable adventures and discover the world in unparalleled comfort and style with our fleet of exceptionally comfortable cars.",
      btnText: "Know More",
      img: hro_img1,
    },
    {
      title: "Luxury car rental service",
      heading: "Drive premium cars at affordable rates",
      desc: "Experience top-class vehicles that combine elegance and performance for a smooth journey every time.",
      btnText: "Book Now",
      img: hro_img2,
    },
    {
      title: "Explore more destinations",
      heading: "Your adventure begins with a comfortable drive",
      desc: "Whether it’s a road trip or business tour, travel comfortably with our modern fleet of cars.",
      btnText: "Start Now",
      img: hro_img3,
    },
  ];

  return (
    <>
      <div className="herosection_parent bg-img-cover parent">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          // pagination={{ clickable: true }}
          navigation
          modules={[Autoplay, Navigation]}
          className="hero_swiper"
        >
         
          {heroSlides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="bg-img-cover"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
               <div className="overlay_hero"></div>
              <div className="herosection_cont cont">
                <div class="hero_content">
                  <h4 className="header_text">{slide.title}</h4>
                  <h1 className="hero_heading">{slide.heading}</h1>
                  <p className="hero_para">{slide.desc}</p>
                  <div onClick={() => setPopUp(true)} className="btn" style={{ width: "fit-content" }}>
                    {slide.btnText}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <div class="mask_image bg-img-cover"></div> */}
      </div>
    </>
  );
};

export default Herosection;
