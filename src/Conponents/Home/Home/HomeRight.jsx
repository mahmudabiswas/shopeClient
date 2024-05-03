import React from "react";
import Typewriter from "typewriter-effect";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/navigation";
// import "./style.css";

// img
import img1 from "../../../../public/Brand/mack.webp";
import img2 from "../../../../public/Brand/mobile1.webp";
import img3 from "../../../../public/Brand/3watch.webp";

// import required modules
import { Navigation } from "swiper/modules";
const HomeRight = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="swiper-slide  " data-swiper-autoplay="1000">
          <div>
            <div>
              {" "}
              <img src={img2} alt="" />
            </div>
            <div className="md:text-6xl font-bold text-black  text-center">
              <Typewriter
                options={{
                  strings: ["iPhone 13", "Serious in Astor"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>{" "}
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" data-swiper-autoplay="2000">
          <div>
            <img src={img1} alt="" />
          </div>
          <div className="md:text-6xl font-bold text-black  text-center">
            <Typewriter
              options={{
                strings: ["MackBook With", "retina display"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" data-swiper-autoplay="2000">
          <div>
            <img src={img3} alt="" />
          </div>
          <div className="md:text-6xl font-bold text-black  text-center">
            <Typewriter
              options={{
                strings: ["Future of Health", "is on your  wrist"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeRight;

