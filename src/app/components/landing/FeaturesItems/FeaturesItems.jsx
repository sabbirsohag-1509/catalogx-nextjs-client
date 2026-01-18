"use client";

import { useQuery } from "@tanstack/react-query";
import GlobalLoader from "../../loader/GlobalLoader";
import { FaShoppingCart, FaTag } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import Link from "next/link";

const FeaturesItems = () => {
  const {
    data: items = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const res = await fetch("https://catalogx-server.vercel.app/items");
      if (!res.ok) throw new Error("Failed to fetch items");
      return res.json();
    },
  });

  if (isLoading) {
    return <GlobalLoader />;
  }

  if (isError)
    return (
      <p className="text-center text-2xl text-red-500 mt-10">
        Failed to load items
      </p>
    );

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-primary">
        Featured Items
      </h1>
      <p className="text-center mt-4 mb-8 text-base sm:text-lg text-base-content/70">
        Handpicked products showcasing the best in quality, innovation, and
        value.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item._id}
            className="relative card bg-base-100 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Discount Ribbon */}
            {item.discount && (
              <div className="absolute top-3 left-0 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-br-lg shadow-md z-10 flex items-center">
                <TbCurrencyTaka size={14} /> {item.discount} OFF
              </div>
            )}

            {/* Price Badge with Icon */}
            <div className="absolute top-3 right-3 bg-base-100 px-3 py-1 rounded-full shadow flex items-center text-primary font-semibold text-sm">
              <FaTag size={14} /> <TbCurrencyTaka size={14} />{" "}
              {item.discount ? item.price - item.discount : item.price}
            </div>

            <figure className="relative">
              <img
                src={item.mainImage}
                alt={item.name}
                className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </figure>

            <div className="card-body p-4">
              <h2 className="card-title text-base font-semibold">
                {item.name}
              </h2>

              <p className="text-sm text-base-content/70 mt-1">
                {item.description.slice(0, 60)}.....
              </p>

              {/* Price Section */}
              <div className="mt-1 flex items-center gap-3">
                {item.discount ? (
                  <>
                    <span className=" text-base-content/50 line-through flex items-center gap-1">
                      <TbCurrencyTaka size={14} /> {item.price}
                    </span>
                    <span className="text-primary text-lg font-bold flex items-center">
                      <TbCurrencyTaka size={14} /> {item.price - item.discount}
                    </span>
                  </>
                ) : (
                  <span className="text-primary font-bold flex items-center">
                    <TbCurrencyTaka size={14} /> {item.price}
                  </span>
                )}
              </div>

              {/* Buttons: View Details + Add to Cart */}
              <div className="mt-3 flex justify-between items-center gap-3">
                <Link
                  href={`/items/${item._id}`}
                  className="btn btn-sm btn-outline w-1/2"
                >
                  View Details
                </Link>

                <button className="btn btn-sm btn-primary w-1/2 flex items-center justify-center gap-1">
                  <FaShoppingCart size={14} />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesItems;
