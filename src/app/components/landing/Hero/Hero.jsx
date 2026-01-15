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
    {
      img: "item-1.jpg",
      title: "Experience iPhone 17 Pro Max",
      subtitle: "Discover high-quality gadgets curated for your lifestyle."
    },
    {
      img: "item-2.jpg",
      title: "Explore Digital DSLR Cameras",
      subtitle: "Capture moments with precision and clarity."
    },
    {
      img: "item-3.jpg",
      title: "Smart Wireless JBL bluetooth Speaker",
      subtitle: "Immerse yourself in premium sound quality."
    },
    {
      img: "item-4.jpg",
      title: "CatalogX Smart Watch s9 Pro",
      subtitle: "Stay connected and track your fitness in style."
    },
    {
      img: "item-5.jpg",
      title: "Macbook Pro 2026 Edition",
      subtitle: "Power and performance for professionals on the go."
    },
  ];

  return (
    <section className="py-16 bg-base-100">
      {/* Text Content Above Slider */}
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">
          Discover Products with <span className="text-primary">CatalogX</span>
        </h1>
        <p className="mt-4 text-base-content/70">
          Explore curated catalogs, trending collections, and premium products — all in one platform.
        </p>
        <Link href="/items" className="btn btn-primary mt-6">
          Explore Catalogs
        </Link>
      </div>

      {/* Slider */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        autoplay={{ delay: 2500 }}
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
        className="max-w-6xl mx-auto relative"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="max-w-[70vw] max-h-[450px] relative">
            {/* Slide Image */}
            <img
              src={`/images/hero/${slide.img}`}
              className="rounded-xl shadow-lg w-full h-full object-cover"
              alt={`CatalogX Slide ${index + 1}`}
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-12 bg-black/30 rounded-xl">
              <h2 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="mt-2 text-base md:text-lg text-white/90 drop-shadow-md">
                {slide.subtitle}
              </p>
              <Link
                href="/items"
                className="mt-4 btn btn-primary text-sm md:text-base"
              >
                Shop Now
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
