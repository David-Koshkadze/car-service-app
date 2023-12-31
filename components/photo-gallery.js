"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
  "/images/img7.jpg",
  "/images/img8.jpg",
  "/images/img9.jpg",
  "/images/img10.jpg",
  "/images/img11.jpg",
  "/images/img12.jpg",
];

export default function PhotoGallery() {
  return (
    <div className="max-w-[85rem] mx-auto px-8 py-12">
      <h1 className="text-3xl py-8 text-center">ფოტო გალერეა</h1>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        centeredSlidesBounds={true}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        autoplay={true}
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="bg-cover bg-no-repeat h-[500px] rounded-xl"
              style={{
                backgroundImage: `url(${image})`,
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
