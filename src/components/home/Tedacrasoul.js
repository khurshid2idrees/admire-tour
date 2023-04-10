
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../../../src/App.css";

// import required modules
import { EffectCoverflow, Pagination ,Autoplay} from "swiper";

import kashmir from '../../Images/home/kashmir.jpeg';
import shimla from '../../Images/home/shimla.jpeg';
import manali from '../../Images/home/manali.jpeg';
import nainital from '../../Images/home/nainital.jpeg';
import dubai from '../../Images/home/dubai.jpeg';
import singapore from '../../Images/home/singapore.jpeg';
import istanbul from '../../Images/home/istanbul.jpeg';
// import kashmir from '../../Images/home/kashmir.jpeg';


export default function Tedacrasoul() {
  return (

    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
        autoplay={{
            delay: 800,
            disableOnInteraction: false,
          }}
      >
        <SwiperSlide>
          <img src={kashmir}  />
          <p className="text-white absolute bottom-6 tracking-wide left-24 font-semibold">KASHMIR</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={shimla} />
          <p className="text-white absolute bottom-6 tracking-wide left-24 font-semibold">SHIMLA</p>

        </SwiperSlide>
        <SwiperSlide>
          <img src={manali} />
          <p className="text-white absolute bottom-6 tracking-wide left-24 font-semibold">MANALI</p>

        </SwiperSlide>
        <SwiperSlide>
          <img src={nainital} />
          <p className="text-white absolute bottom-6 tracking-wide left-24 font-semibold">NAINITAL</p>

        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          <p className="text-white absolute bottom-6 tracking-wide left-24 font-semibold">GOA</p>

        </SwiperSlide>
        <SwiperSlide>
          <img src={dubai} />
          <p className="text-white absolute bottom-6 tracking-wide left-24 font-semibold">DUBAI</p>

        </SwiperSlide>
        <SwiperSlide>
          <img src={singapore} />
          <p className="text-white absolute bottom-6 tracking-wide left-24 font-semibold">SINGAPORE</p>

        </SwiperSlide>
        <SwiperSlide>
          <img src={istanbul} />
          <p className="text-white absolute bottom-6 tracking-wide left-24 font-semibold">INSTANBUL</p>

        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          <p className="text-white absolute bottom-6 tracking-wide left-24 font-semibold">KASHMIR</p>

        </SwiperSlide> */}
      </Swiper>
    </>
  );
}

