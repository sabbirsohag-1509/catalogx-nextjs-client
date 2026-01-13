"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("cupcake");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "cupcake" ? "dark" : "cupcake"));
  };

  return (
    <div className="navbar bg-base-100 shadow">
      <Link href="/" className="flex-1">
        <Image
          src="/images/logo/logo.png"
          alt="CatalogX Logo"
          width={120}
          height={40}
        />
          </Link>
          <div className="flex-1 gap-7 menu menu-horizontal px-1"> 
          <Link href="/">Home</Link>
              <Link href="/items">Items</Link>
              <Link href="/add-items">Add Items</Link>
              
          </div>

      <div className="flex-none flex items-center gap-2">
        <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
          🌗
        </button>

        <ul className="menu menu-horizontal px-1">
          <li><Link href="/login">Login</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
