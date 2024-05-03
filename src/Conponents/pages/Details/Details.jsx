import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "./Detail";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/navigation";
// import "./style.css";

import { Navigation } from "swiper/modules";
const Details = () => {
  const [brand, setBrand] = useState([]);
  const { brandName } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/brand`)
      .then((res) => res.json())
      .then((data) => {
        const filter = data.filter((item) => item.brandName === brandName);
        setBrand(filter);
      });
  }, []);
  return (
    <div>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide className="swiper-slide  " data-swiper-autoplay="1000">
            {brand.map((item) => (
              <img src={item.img} alt="" />
            ))}
          </SwiperSlide>
          <SwiperSlide className="swiper-slide  " data-swiper-autoplay="1000">
            {brand.map((item) => (
              <img src={item.img} alt="" />
            ))}
          </SwiperSlide>
          <SwiperSlide className="swiper-slide  " data-swiper-autoplay="1000">
            {brand.map((item) => (
              <img src={item.img} alt="" />
            ))}
          </SwiperSlide>
        </Swiper>
      </div>
      <h1></h1>
      {brand.map((item) => (
        <>
          <Detail key={item.id} item={item} />
        </>
      ))}
    </div>
  );
};

export default Details;
