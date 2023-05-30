import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <nav
      className={`py-5 mb-12 flex justify-between ${
        !darkMode ? "bg-gray-300" : "bg-gray-700"
      }`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
      }}
    >
      <div className="flex items-center">
        <FaCode className="text-2xl text-gray-600 mr-2" />
        <h1
          className={`text-xl font-burtons ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Developed by Igna
        </h1>
      </div>
      <ul className="flex items-center">
        <li>
          <a
            className={`text-gray-300 hover:text-gray-300 hover:border-cyan-500 hover:border-b-2 px-3 py-2 transition-colors ${
              darkMode ? "text-white" : "text-gray-300"
            }`}
            href="#services"
          >
            Services
          </a>
        </li>
        <li>
          <a
            className={`text-gray-300 hover:text-gray-300 hover:border-cyan-500 hover:border-b-2 px-3 py-2 transition-colors ${
              darkMode ? "text-white" : "text-gray-300"
            }`}
            href="#technologies"
          >
            Technologies
          </a>
        </li>
        <li>
          <a
            className={`text-gray-300 hover:text-gray-300 hover:border-cyan-500 hover:border-b-2 px-3 py-2 transition-colors ${
              darkMode ? "text-white" : "text-gray-300"
            }`}
            href="#portfolio"
          >
            Portfolio
          </a>
        </li>

        <li>
          <a
            className={`bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md mr-3 transition-colors hover:from-cyan-600 hover:to-teal-600 ${
              darkMode ? "bg-gray-800" : ""
            }`}
            href="https://drive.google.com/u/0/uc?id=1J66_bn46ZakMuxw6skeJPpGUVfywwdN-&export=download"
          >
            Download Resume
          </a>
        </li>
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl mr-5 transition-colors hover:text-yellow-500"
          />
        </li>
      </ul>

      <style jsx>{`
        nav {
          @apply dark:bg-gray-800;
        }
      `}</style>
      <style jsx>{`
        h1 {
          @apply dark:text-gray-300;
        }
      `}</style>
    </nav>
  );
};

export default Header;
