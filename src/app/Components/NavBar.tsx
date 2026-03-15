"use client";
import { useState } from "react";
import { FiMenu, FiX, FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", link: "#" },
    { name: "Shop", link: "#" },
    { name: "Collections", link: "#" },
    { name: "About", link: "#" },
    { name: "Contact", link: "#" }
  ];

  return (
    <nav className=" top-0 left-0 w-full bg-white text-gray-900 border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">
        {/* Logo - Refined Luxury Style */}
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-light tracking-[8px] cursor-pointer">
            ORANG<span className="font-normal">STORE</span>
          </h1>
          <span className="hidden md:block text-[8px] uppercase tracking-[3px] text-gray-400 border-l border-gray-200 pl-3 ml-2">
            Established 2024
          </span>
        </div>

        {/* Desktop Menu - Minimal */}
        <ul className="hidden md:flex items-center gap-12 text-xs tracking-[2px]">
          {links.map((item, i) => (
            <li key={i} className="group relative cursor-pointer py-2">
              <span className="relative">
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </li>
          ))}
        </ul>

        {/* Right Icons - Refined */}
        <div className="hidden md:flex items-center gap-8">
          {/* Search - Added for luxury feel */}
          <FiSearch className="text-lg text-gray-700 cursor-pointer hover:text-gray-900 transition" />
          
          {/* User */}
          <FiUser className="text-lg text-gray-700 cursor-pointer hover:text-gray-900 transition" />

          {/* Cart */}
          <div className="relative cursor-pointer group">
            <FiShoppingCart className="text-lg text-gray-700 group-hover:text-gray-900 transition" />
            <span className="absolute -top-2 -right-2 text-[10px] bg-gray-900 text-white w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
          </div>

          {/* Login Button - Refined */}
          <button className="text-xs tracking-[2px] text-gray-900 border-b border-gray-300 pb-1 hover:border-gray-900 transition">
            SIGN IN
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div 
          className="md:hidden text-2xl text-gray-900 cursor-pointer" 
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu - Consistent with Desktop */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <ul className="flex flex-col items-center gap-8 py-10 px-8">
            {links.map((item, i) => (
              <li key={i} className="text-gray-900 hover:text-gray-600 cursor-pointer transition text-sm tracking-[3px]">
                {item.name}
              </li>
            ))}
            
            <div className="flex gap-10 mt-6 pt-6 border-t border-gray-100 w-full justify-center">
              <FiSearch className="text-lg text-gray-700" />
              <FiUser className="text-lg text-gray-700" />
              <div className="relative">
                <FiShoppingCart className="text-lg text-gray-700" />
                <span className="absolute -top-2 -right-2 text-[10px] bg-gray-900 text-white w-4 h-4 flex items-center justify-center rounded-full">
                  2
                </span>
              </div>
            </div>
            
            <button className="w-full border border-gray-900 py-4 mt-4 text-xs tracking-[3px] hover:bg-gray-900 hover:text-white transition">
              SIGN IN
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}