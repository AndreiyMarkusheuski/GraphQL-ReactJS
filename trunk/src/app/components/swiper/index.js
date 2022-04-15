import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.scss";
import "./style.scss";

const SwiperCarusel = ({ items }) => {
  console.log(items);
  return (
    <Swiper slidesPerView={1} spaceBetween={0}>
      {items.map((img_src, index) => (
        <SwiperSlide key={index}>
          {" "}
          <img src={img_src} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCarusel;
