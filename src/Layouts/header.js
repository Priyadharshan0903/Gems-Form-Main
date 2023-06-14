import React, { useState } from "react";
import icon from "../assets/icon.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap p-2 md:p-6 lg:justify-start">
      <div className="flex items-center flex-shrink-0 text-white mr-6 ">
        <img src={icon} className="w-100 h-10 md:ml-10" alt="Logo" />
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm text-start px-6 font-medium lg:flex-grow text-gray-500">
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0  mr-4">
            Home
          </a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0  mr-4">
            Product
          </a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0  mr-4">
            Resourse
          </a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0  mr-4">
            Review
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
