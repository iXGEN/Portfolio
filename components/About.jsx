import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import profilepic from "../public/profilepic.jpeg";
import Image from "next/image";

const About = () => {
  const linkedinLink = "https://www.linkedin.com/in/ignaciobarra-zagal/";
  const twitterLink = "https://twitter.com/IgnaBarraZagal";
  const emailLink = "dev.barrazagal@gmail.com";
  const copyEmail = async () => {
    await navigator.clipboard.writeText(emailLink);
    alert("Email copied to clipboard!");
  };

  return (
    <section className="min-h-screen">
      <div className="text-center p-10">
        <h2 className="text-5xl mt-32 py-2 text-teal-600 md:text-6xl">
          Ignacio Barra
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-200">
          Front End / Back End / Mobile Developer
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-300">
          Hi👋 I am a friendly person and a team worker, i have mixed my skills
          from my previous background, psychology to this new career path in
          tech, i really like traveling and meeting different cultures.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 transform-gpu">
        <a href={twitterLink} target="_blank" rel="noopener noreferrer">
          <AiFillTwitterCircle className="text-6xl mt-6 mr-4 transition duration-200 ease-in-out transform cursor-pointer hover:scale-125" />
        </a>
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin className="text-6xl mt-6 mr-4 transition duration-200 ease-in-out transform cursor-pointer hover:scale-125" />
        </a>
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
