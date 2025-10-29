import React from "react";
import "./Packages.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import lonavala from "../../assets/lonavala.jpg";
import mahabaleshwar from "../../assets/Mahabaleshwar.jpg";

const Packages = () => {
  const data = [
    {
      image: lonavala,
      title: "Pune to Mumbai",
    },
    {
      image: mahabaleshwar,
      title: "Pune to Mahabaleshwar",
    },
    {
      image: lonavala,
      title: "Pune to Lonavala",
    },
    {
      image: lonavala,
      title: "Pune to Mumbai",
    },
    {
      image: mahabaleshwar,
      title: "Pune to Mahabaleshwar",
    },
    {
      image: lonavala,
      title: "Pune to Lonavala",
    },
  ];

  return (
    <>
      <div className="parent packagee_parent">
        <div className="cont packagee_cont">
          <h2>Tours and Packages</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dignissimos dicta voluptate dolorum nobis accusamus excepturi fugit. Quis provident, rem quidem vero doloremque, aliquid debitis magni blanditiis corrupti obcaecati itaque.</p>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={3}
            spaceBetween={10}
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 1 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={true}
            modules={[EffectCoverflow, Navigation]}
            className="mySwiper"
          >
            {data.map((item) => (
              <SwiperSlide key={item.title}>
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Packages;
