import React from "react";
import "./Packages.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import lonavala from "../../assets/lonavala.jpg";
import mahabaleshwar from "../../assets/Mahabaleshwar.jpg";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Tours & Packages | Go Sarthi Travel Services</title>
        <meta
          name="description"
          content="Explore curated tours and travel packages from Pune to popular destinations like Mumbai, Lonavala, Mahabaleshwar, and more with Go Sarthi."
        />
        <meta
          name="keywords"
          content="Pune to Mumbai, Pune to Mahabaleshwar, Pune to Lonavala, Go Sarthi Tours, Maharashtra travel packages, taxi packages Pune"
        />
        <link rel="canonical" href="https://gosarathi.com/packages" />
      </Helmet>

      <div className="parent packagee_parent" id="packages">
        <div className="cont packagee_cont">
          <h2>Tours and Packages</h2>
          <p>
            Explore the beauty of Maharashtra with our specially curated travel
            experiences. Whether you're looking for a quick weekend getaway or a
            scenic road trip through the Western Ghats, we’ve got you covered.
            Discover stunning forts, lush valleys, and serene hill stations —
            all just a drive away from Pune!
          </p>
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
