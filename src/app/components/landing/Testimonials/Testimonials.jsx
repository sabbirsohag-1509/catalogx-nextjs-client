"use client";

import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonialsData = [
  {
    name: "Sarah Williams",
    position: "Fashion Blogger",
    avatar: "https://i.ibb.co.com/PvJjsZsB/emily.jpg",
    rating: 5,
    text: "CatalogX has completely transformed the way I shop online. The product quality is top-notch, and the delivery is always super fast. I can't recommend them enough!",
  },
  {
    name: "James Anderson",
    position: "Tech Enthusiast",
    avatar: "https://i.ibb.co.com/hxjhGRwx/mikel.jpg",
    rating: 4,
    text: "I love how smooth and easy the shopping experience is on CatalogX. From browsing to checkout, everything is seamless. Great customer support as well!",
  },
  {
    name: "Emily Johnson",
    position: "Entrepreneur",
    avatar: "https://i.ibb.co.com/PvJjsZsB/emily.jpg",
    rating: 5,
    text: "I have been using CatalogX for months now, and I am consistently impressed. The handpicked products, secure payment, and fast shipping make it my favorite online store.",
  },
  {
    name: "Michael Smith",
    position: "Student",
    avatar: "https://i.ibb.co.com/hxjhGRwx/mikel.jpg",
    rating: 4,
    text: "Amazing experience! The website is very user-friendly, and the quality of the items is excellent. I especially appreciate their attention to customer satisfaction.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-base-200" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg text-base-content/70 mt-4 max-w-3xl mx-auto">
            Don't just take our word for it — hear what our satisfied customers
            have to say about their experience shopping at CatalogX.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((t, index) => (
            <div
              key={index}
              className="card bg-base-100 p-6 shadow-lg rounded-2xl hover:shadow-2xl transition-shadow duration-300 flex flex-col gap-4"
            >
              {/* Quote Icon */}
              <div className="text-primary text-3xl">
                <FaQuoteLeft />
              </div>

              {/* Testimonial Text */}
              <p className="text-base sm:text-lg text-base-content/70">{t.text}</p>

              {/* Rating */}
              <div className="flex gap-1 mt-2">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              {/* Customer Info */}
              <div className="flex items-center gap-4 mt-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover shadow"
                />
                <div>
                  <h3 className="font-semibold text-lg text-base-content">{t.name}</h3>
                  <p className="text-sm text-base-content/70">{t.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA / More Testimonials */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="btn btn-primary btn-lg transition-transform duration-300 hover:scale-105"
          >
            Read More Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
