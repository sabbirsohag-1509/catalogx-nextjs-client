"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FiSun, FiMoon, FiMenu } from "react-icons/fi";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [theme, setTheme] = useState("cupcake");
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const match = document.cookie.match(/(?:^|; )auth=([^;]*)/);
    setIsLoggedIn(!!match);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "cupcake" ? "dark" : "cupcake"));
  };

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  if (!mounted) return null;
  return (
    <nav className="navbar bg-base-100 shadow px-4">
      <div className="flex-1 flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo/logo.png"
            alt="CatalogX Logo"
            width={120}
            height={40}
          />
        </Link>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex flex-1 gap-7 menu menu-horizontal px-1 justify-center">
        <Link
          href="/"
          className={`font-semibold px-3 py-1 rounded transition-colors ${
            pathname === "/"
              ? "bg-primary text-primary-content"
              : "hover:bg-base-200"
          }`}
        >
          Home
        </Link>
        <Link
          href="/items"
          className={`font-semibold px-3 py-1 rounded transition-colors ${
            pathname === "/items"
              ? "bg-primary text-primary-content"
              : "hover:bg-base-200"
          }`}
        >
          Items
        </Link>
        <Link
          href="/blogs"
          className={`font-semibold px-3 py-1 rounded transition-colors ${
            pathname === "/blogs"
              ? "bg-primary text-primary-content"
              : "hover:bg-base-200"
          }`}
        >
          Blogs
        </Link>
        {/* Add Items btn  */}
        <Link
          href={"/add-items"}
          onClick={(e) => {
            const match = document.cookie.match(/(?:^|; )auth=([^;]*)/);
            if (!match) {
              e.preventDefault();
              Swal.fire({
                icon: "info",
                title: "Login Required",
                text: "Please login to add items.",
                timer: 1600,
                showConfirmButton: false,
              }).then(() => {
                window.location.href = "/login";
              });
            }
          }}
          className={`font-semibold px-3 py-1 rounded transition-colors ${
            pathname === "/add-items"
              ? "bg-primary text-primary-content"
              : "hover:bg-base-200"
          }`}
        >
          Add Items
        </Link>
      </div>
      <div className="flex-none flex items-center gap-2">
        <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
          {theme === "cupcake" ? <FiMoon size={22} /> : <FiSun size={22} />}
        </button>
        <ul className="hidden md:flex menu menu-horizontal px-1">
          <li>
            {isLoggedIn ? (
              <button
                onClick={() => {
                  Swal.fire({
                    title: "Are you sure?",
                    text: "You will be logged out!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#d33",
                    cancelButtonColor: "#3085d6",
                    confirmButtonText: "Yes, logout!",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      document.cookie = "auth=; Max-Age=0; path=/";
                      Swal.fire(
                        "Logged out!",
                        "You have been logged out.",
                        "success",
                      ).then(() => {
                        location.reload();
                      });
                    }
                  });
                }}
                className="btn btn-sm btn-error px-5 text-white"
              >
                Logout
              </button>
            ) : (
              <Link href="/login" className="btn btn-sm btn-primary px-5">
                Login
              </Link>
            )}
          </li>
        </ul>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden btn btn-ghost btn-circle cursor-pointer"
          onClick={handleMenuToggle}
          aria-label="Open Menu"
        >
          <FiMenu size={22} />
        </button>
      </div>
      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-end md:hidden">
          <div className="w-2/3 max-w-xs bg-base-100 h-full shadow-lg p-6 flex flex-col gap-6 animate-slideInRight">
            <button
              className="self-end btn btn-ghost btn-circle mb-4"
              onClick={handleMenuToggle}
              aria-label="Close Menu"
            >
              ✕
            </button>
            <Link
              href="/"
              onClick={handleMenuToggle}
              className={`font-semibold px-3 py-2 rounded transition-colors ${
                pathname === "/"
                  ? "bg-primary text-primary-content"
                  : "hover:bg-base-200"
              }`}
            >
              Home
            </Link>
            <Link
              href="/items"
              onClick={handleMenuToggle}
              className={`font-semibold px-3 py-2 rounded transition-colors ${
                pathname === "/items"
                  ? "bg-primary text-primary-content"
                  : "hover:bg-base-200"
              }`}
            >
              Items
            </Link>
            <Link
              href={"/add-items"}
              onClick={(e) => {
                const match = document.cookie.match(/(?:^|; )auth=([^;]*)/);
                if (!match) {
                  e.preventDefault();
                  Swal.fire({
                    icon: "info",
                    title: "Login Required",
                    text: "Please login to add items.",
                    timer: 1600,
                    showConfirmButton: false,
                  }).then(() => {
                    window.location.href = "/login";
                  });
                } else {
                  handleMenuToggle();
                }
              }}
              className={`font-semibold px-3 py-2 rounded transition-colors ${
                pathname === "/add-items"
                  ? "bg-primary text-primary-content"
                  : "hover:bg-base-200"
              }`}
            >
              Add Items
            </Link>
            {/* Auth button for mobile */}
            <div className="flex md:hidden flex-col gap-2 mt-2">
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    Swal.fire({
                      title: "Are you sure?",
                      text: "You will be logged out!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#d33",
                      cancelButtonColor: "#3085d6",
                      confirmButtonText: "Yes, logout!",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        document.cookie = "auth=; Max-Age=0; path=/";
                        Swal.fire(
                          "Logged out!",
                          "You have been logged out.",
                          "success",
                        ).then(() => {
                          location.reload();
                        });
                      }
                    });
                  }}
                  className="btn btn-sm btn-error px-5 text-white"
                >
                  Logout
                </button>
              ) : (
                <Link href="/login" className="btn btn-sm btn-primary px-5">
                  Login
                </Link>
              )}
            </div>

            <button
              onClick={toggleTheme}
              className="btn btn-ghost btn-circle mt-4"
            >
              {theme === "cupcake" ? <FiMoon size={22} /> : <FiSun size={22} />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
