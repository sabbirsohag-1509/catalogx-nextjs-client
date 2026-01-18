"use client";
import React, { useState } from "react";
import { FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const LogIn = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (email === "sabbir@gmail.com" && password === "123456") {
        document.cookie = "auth=1; path=/; max-age=" + 60 * 60 * 24;
        setLoading(false);
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "Welcome back, Sabbir!",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          window.location.href = "/";
        });
      } else {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Invalid email or password",
          timer: 1800,
          showConfirmButton: false,
        });
        setError("Invalid email or password");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-5">
          Login
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Welcome back{" "}
          <span className="font-semibold text-indigo-600">CatalogX</span>!
          Please login to your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute top-1/2 -translate-y-1/2 left-3 text-indigo-500" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute top-1/2 -translate-y-1/2 left-3 text-indigo-500" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          {/* Error message */}
          {error && (
            <div className="text-red-500 text-center text-sm">{error}</div>
          )}
          {/* Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-purple-600 text-white py-2 rounded-lg transition duration-300 cursor-pointer"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center gap-1">
                Login
                <span className="animate-pulse">.</span>
                <span className="animate-pulse delay-150">.</span>
                <span className="animate-pulse delay-300">.</span>
              </span>
            ) : (
              <>
                <FaSignInAlt />
                Login
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
