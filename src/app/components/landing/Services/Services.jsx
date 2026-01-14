"use client";

import React from "react";
import { FaTruck, FaHeadset, FaShieldAlt, FaGift, FaStar, FaTags } from "react-icons/fa";

const servicesData = [
  {
    icon: <FaTruck className="text-primary text-4xl" />,
    title: "Fast Shipping",
    description: "Receive your orders quickly with our reliable delivery service.",
  },
  {
    icon: <FaHeadset className="text-primary text-4xl" />,
    title: "24/7 Support",
    description: "Our friendly support team is always ready to help you anytime.",
  },
  {
    icon: <FaShieldAlt className="text-primary text-4xl" />,
    title: "Secure Payment",
    description: "Shop with confidence using our secure payment options.",
  },
  {
    icon: <FaGift className="text-primary text-4xl" />,
    title: "Special Offers",
    description: "Enjoy exclusive deals and discounts regularly.",
  },
  {
    icon: <FaStar className="text-primary text-4xl" />,
    title: "Premium Quality",
    description: "We handpick every product to ensure the best quality.",
  },
  {
    icon: <FaTags className="text-primary text-4xl" />,
    title: "Affordable Prices",
    description: "Get the best value without compromising on quality.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-base-100" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-base-content/70 mt-4 max-w-2xl mx-auto">
            We provide a range of top-notch services to ensure a smooth and
            satisfying shopping experience for our customers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="card p-6 flex flex-col items-center text-center bg-base-200 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-base-content/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
