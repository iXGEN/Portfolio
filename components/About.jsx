import React from "react";
import { useState } from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import profilepic from "../public/profilepic.jpeg";
import Image from "next/image";

const About = ({ darkMode, setDarkMode }) => {
  const linkedinLink = "https://www.linkedin.com/in/ignaciobarra-zagal/";
  const twitterLink = "https://twitter.com/IgnaBarraZagal";
  const emailLink = "dev.barrazagal@gmail.com";
  const copyEmail = async () => {
    await navigator.clipboard.writeText(emailLink);
    alert("Email copied to clipboard!");
  };

  return (
    <section className="min-h-screen">
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-burtons dark:text-gray-300">
          Developed by Igna
        </h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl"
            />
          </li>
          <li>
            <a
              className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              href="#"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 md:text-6xl">
          Ignacio Barra
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-200">
          Full Stack Developer
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-300">
          Hi👋 I would say i'm very friendly and a team worker, i have mixed my
          skills from psychology to this new career path in tech, i really like
          traveling and meeting different cultures.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 transform-gpu">
        <AiFillTwitterCircle
          onClick={() => window.open(twitterLink, "_blank")}
          className="text-6xl mt-6 mr-4 transition duration-200 ease-in-out transform cursor-pointer hover:scale-125"
        />
        <AiFillLinkedin
          onClick={() => window.open(linkedinLink, "_blank")}
          className="text-6xl mt-6 mr-4 transition duration-200 ease-in-out transform cursor-pointer hover:scale-125"
        />
        <AiOutlineMail
          onClick={copyEmail}
          className="text-6xl mt-6 mr-4 transition duration-200 ease-in-out transform cursor-pointer hover:scale-125"
        />
      </div>

      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
        <Image
          src={profilepic}
          alt="Deved Image"
          className="object-cover object-center w-full h-full"
        />
      </div>
    </section>
  );
};

export default About;
