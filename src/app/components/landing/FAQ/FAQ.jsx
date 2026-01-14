"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "How can I place an order?",
    answer:
      "Placing an order on CatalogX is designed to be a smooth and hassle-free experience. Start by browsing through our extensive catalog of products. Each item has detailed descriptions, images, pricing, and specifications to help you make informed decisions. Once you find the product you wish to purchase, simply click the 'Add to Cart' button. You can continue shopping and add multiple items to your cart. When you are ready, click on the cart icon at the top of the page and proceed to checkout. Fill in your shipping details carefully, select your preferred payment method, and confirm the order. After completing the payment, you will receive a confirmation email with your order details and an estimated delivery date. You can also track your order status via your account dashboard. Our goal is to make every step intuitive and secure, ensuring that your shopping journey is seamless from start to finish.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "CatalogX supports a wide range of secure and convenient payment options to make your shopping experience effortless. We accept all major credit and debit cards, including Visa, MasterCard, American Express, and Discover. Additionally, we provide support for digital wallets such as PayPal, Google Pay, and Apple Pay for faster checkout. All payments are processed through highly secure payment gateways using industry-standard encryption to protect your personal and financial information. You will receive an immediate payment confirmation upon successful completion of your transaction. Furthermore, our system is designed to prevent unauthorized access and ensure that your payment details are never stored on our servers. By offering multiple payment options, we ensure that every customer can choose the method that is most convenient and safe for them.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes! CatalogX provides real-time order tracking for all purchases. Once your order has been processed and shipped, you will receive a detailed email containing a unique tracking number and a link to the courier's tracking portal. This allows you to monitor your package at every stage of its journey, from dispatch to delivery. Additionally, if you are logged into your CatalogX account, you can view your order history and tracking status directly from your dashboard. We also provide estimated delivery times and updates if there are any delays or changes in the shipping schedule. Our aim is to keep you fully informed so you can plan accordingly and know exactly when your items will arrive. Customer satisfaction is our priority, and order transparency is a big part of that.",
  },
  {
    question: "What is the return policy?",
    answer:
      "CatalogX strives to ensure that you are completely satisfied with your purchase. If you are not fully happy with an item, our return policy allows you to return products within 7 days of delivery for a full refund or exchange. To initiate a return, please contact our customer support team via email or live chat and provide your order number along with the reason for the return. Products must be returned in their original packaging, unused, and with all tags intact to qualify for a refund. Once your return is received and inspected, our team will process your refund promptly, typically within 3-5 business days. This policy is designed to give you peace of mind when shopping online, knowing that if a product doesn’t meet your expectations, you can easily return it without hassle. We are committed to making the process as smooth and transparent as possible.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "At this moment, CatalogX primarily ships within the country to ensure fast and reliable delivery for all our customers. Our logistics and courier partnerships are optimized for domestic shipping, allowing us to provide accurate delivery times, order tracking, and efficient support. We understand that international customers may also want to access our products, and we are actively exploring options to expand our shipping network globally in the near future. When international shipping becomes available, customers will be able to select their country at checkout, and shipping rates and delivery times will be calculated automatically. We are committed to maintaining the same level of service, security, and transparency for international orders as we currently provide domestically, ensuring a consistent and satisfying shopping experience worldwide.",
  },
];

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-base-300">
      <button
        className="w-full flex justify-between items-center py-4 text-left text-base sm:text-lg font-medium text-base-content hover:text-primary transition-colors"
        onClick={() => setOpen(!open)}
      >
        {question}
        {open ? <FaChevronUp className="text-primary" /> : <FaChevronDown />}
      </button>
      {open && (
        <p className="text-base-content/70 pb-4 sm:pb-6">{answer}</p>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="py-20 bg-base-100" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        
        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-base-content/70 mt-4 max-w-3xl mx-auto">
            Have questions? We’ve got answers. Browse through our most common queries about shopping, shipping, payments, and more. Expand each question to read detailed answers and get all the information you need to make confident purchases.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto bg-base-200 rounded-2xl shadow-lg divide-y divide-base-300">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
