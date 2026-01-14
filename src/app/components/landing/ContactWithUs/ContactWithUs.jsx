"use client";

import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactWithUs = () => {
  return (
      <section className="py-24 bg-base-100" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 flex flex-col lg:flex-row gap-16">
        
        {/* Left: Contact Form */}
        <div className="lg:w-1/2 bg-base-200 p-8 rounded-2xl shadow-lg">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg text-base-content/70 mb-8">
            Have questions or feedback? Fill out the form below, and our friendly
            support team will get back to you as soon as possible. We love hearing
            from our customers and are committed to providing quick and helpful
            responses.
          </p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered input-lg w-full"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered input-lg w-full"
            />
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered input-lg w-full"
            />
            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered textarea-lg w-full"
              rows={6}
            ></textarea>
            <button type="submit" className="btn btn-primary btn-lg mt-2">
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="lg:w-1/2 flex flex-col gap-8 justify-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">
            Contact Information
          </h2>
          <p className="text-base sm:text-lg text-base-content/70">
            You can also reach us directly using the information below. Our team is
            available to answer your questions, provide assistance, and ensure your
            shopping experience is smooth and enjoyable.
          </p>

          <div className="flex flex-col gap-6 mt-6">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-primary text-2xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-base-content/70">
                  123 CatalogX Street, Dhaka, Bangladesh
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-primary text-2xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-base-content/70">+880 1234 567890</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-primary text-2xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-base-content/70">support@catalogx.com</p>
              </div>
            </div>
          </div>

          {/* Optional: Map or Illustration */}
          <div className="mt-8">
            <img
              src="/images/product.jpg" 
              alt="Map location"
              className="rounded-xl shadow-lg object-cover w-full max-h-64"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactWithUs;
