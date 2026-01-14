"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Link from "next/link";

const Hero = () => {
  const slides = [
    "item-1.jpg",
    "item-2.jpg",
    "item-3.jpg",
    "item-4.jpg",
    "item-5.jpg",
  ];

  return (
    <section className="py-16 bg-base-100">
      {/* Text Content */}
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">
          Discover Products with <span className="text-primary">CatalogX</span>
        </h1>
        <p className="mt-4 text-base-content/70">
          Explore curated catalogs, trending collections, and premium products —
          all in one powerful platform.
        </p>
        <Link href="/items" className="btn btn-primary mt-6">Explore Catalogs</Link>
      </div>

      {/* Slider */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        autoplay={{ delay: 2000 }}
        loop={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 120,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="max-w-6xl mx-auto"
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index} className="max-w-[70vw] max-h-[450px]">
            <img
              src={`/images/hero/${img}`}
              className="rounded-xl shadow-lg w-full h-full object-cover"
              alt={`CatalogX Slide ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
