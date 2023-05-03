import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <nav
      className="py-5 mb-12 flex justify-between bg-gray-200 dark:bg-gray-800"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
      }}
    >
      <h1 className="text-xl font-burtons dark:text-gray-300">
        Developed by Igna
      </h1>
      <ul className="flex items-center">
        <li>
          <a
            className="text-gray-600 hover:text-gray-900 px-3 py-2"
            href="#services"
          >
            Services
          </a>
        </li>
        <li>
          <a
            className="text-gray-600 hover:text-gray-900 px-3 py-2"
            href="#technologies"
          >
            Technologies
          </a>
        </li>
        <li>
          <a
            className="text-gray-600 hover:text-gray-900 px-3 py-2"
            href="#portfolio"
          >
            Portfolio
          </a>
        </li>

        <li>
          <a
            className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md mr-3"
            href="#"
          >
            Resume
          </a>
        </li>
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl mr-5"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Header;