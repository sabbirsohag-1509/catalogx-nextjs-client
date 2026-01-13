"use client";

import axios from "axios";
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import Swal from "sweetalert2";

const AddItems = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      price: "",
      discount: "",
      category: "Electronics",
      mainImage: "",
      images: [{ url: "" }, { url: "" }, { url: "" }],
    },
  });

  const { fields } = useFieldArray({
    control,
    name: "images",
  });
  const [loading, setLoading] = React.useState(false);

  // Add Items Handler
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/items", data);
      Swal.fire({
        icon: "success",
        title: "Item Added",
        timer: 2000,
        showConfirmButton: false,
      });
      reset();
    } catch (err) {
      Swal.fire({ icon: "error", title: "Error", text: "Try again!" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl text-primary sm:text-4xl font-bold text-center mt-4">
          Add New Items
        </h1>
        <p className="text-center mt-4 mb-8 text-base sm:text-lg text-base-content/70">
          Fill the form below to add a new product to CatalogX.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 bg-base-200 p-6 sm:p-8 rounded-lg shadow-md"
        >
          {/* Item Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold">
              Item Name
            </label>
            <input
              type="text"
              placeholder="Item Name"
              {...register("name", { required: "Item name is required" })}
              className="input input-bordered w-full mt-1"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label htmlFor="description" className="font-semibold">
              Description
            </label>
            <textarea
              placeholder="Description"
              {...register("description", {
                required: "Description is required",
              })}
              className="textarea textarea-bordered w-full mt-1"
              rows={4}
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Price + Discount */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="price" className="font-semibold">
                Price
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: "Price is required" })}
                className="input input-bordered w-full mt-1"
              />
              {errors.price && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.price.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="discount" className="font-semibold">
                Discount
              </label>
              <input
                type="number"
                placeholder="Discount"
                {...register("discount", {
                  required: "Discount is required",
                })}
                className="input input-bordered w-full mt-1"
              />
              {errors.discount && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.discount.message}
                </p>
              )}
            </div>
          </div>

          {/* Category */}
          <div className="flex flex-col">
            <label htmlFor="category" className="font-semibold">
              Category
            </label>
            <select
              {...register("category", { required: true })}
              className="select select-bordered w-full mt-1"
            >
              <option value="Electronics">Electronics</option>
              <option value="Fashion">Fashion</option>
              <option value="Gadgets">Gadgets</option>
            </select>
          </div>

          {/* Main Image */}
          <div className="flex flex-col">
            <label htmlFor="mainImage" className="font-semibold">
              Image URL
            </label>
            <input
              type="text"
              placeholder="Image URL"
              {...register("mainImage", { required: "Main image is required" })}
              className="input input-bordered w-full mt-1"
            />
            {errors.mainImage && (
              <p className="text-red-500 text-sm mt-1">
                {errors.mainImage.message}
              </p>
            )}
          </div>

          {/* Images Array */}
          <div className="flex flex-col gap-2">
            <label htmlFor="images" className="font-semibold">
              Additional Images (3)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {fields.map((field, index) => (
                <input
                  key={field.id}
                  type="text"
                  placeholder={`Image ${index + 1} URL`}
                  {...register(`images.${index}.url`, {
                    required: `Image ${index + 1} URL is required`,
                  })}
                  className="input input-bordered w-full mt-1"
                />
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary mt-4 w-full sm:w-auto self-center"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Item"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
