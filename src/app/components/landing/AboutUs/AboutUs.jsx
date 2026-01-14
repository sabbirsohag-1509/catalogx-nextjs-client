"use client";

import Link from "next/link";
import React from "react";
import { FaShippingFast, FaHeadset, FaShieldAlt } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="py-20 bg-base-200" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/images/product.jpg"
            alt="About CatalogX"
            className="rounded-2xl shadow-xl object-cover w-full max-w-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Right: Text + Features */}
        <div className="lg:w-1/2 text-center lg:text-left flex flex-col gap-6">
          
          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">
            About CatalogX
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-base-content/70">
            At <span className="font-semibold text-primary">CatalogX</span>, we
            are passionate about bringing you the best products at unbeatable value.
            Our mission is to make online shopping simple, secure, and enjoyable
            for everyone.
          </p>

          <p className="text-base sm:text-lg text-base-content/70">
            With handpicked selections, fast shipping, and top-notch customer
            support, we ensure that every purchase leaves you happy and satisfied.
          </p>

          {/* Key Features / Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <div className="flex flex-col items-center gap-3 p-4 bg-base-100 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
              <FaShippingFast className="text-primary text-3xl" />
              <h3 className="font-semibold text-lg">Fast Shipping</h3>
              <p className="text-sm text-base-content/70 text-center">
                Get your orders delivered quickly with our reliable shipping.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 p-4 bg-base-100 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
              <FaHeadset className="text-primary text-3xl" />
              <h3 className="font-semibold text-lg">24/7 Support</h3>
              <p className="text-sm text-base-content/70 text-center">
                Our friendly support team is always ready to help you anytime.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 p-4 bg-base-100 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
              <FaShieldAlt className="text-primary text-3xl" />
              <h3 className="font-semibold text-lg">Secure Payment</h3>
              <p className="text-sm text-base-content/70 text-center">
                Shop with confidence with our fully secure payment system.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <Link
              href="items"
              className="btn btn-primary btn-lg transition-transform duration-300 hover:scale-105"
            >
              Shop Now
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
