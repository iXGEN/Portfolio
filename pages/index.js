import Head from "next/head";
import { Inter } from "next/font/google";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import profilepic from "../public/profilepic.jpeg";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import RNative from "../public/RNative.png";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      className={`font-sans ${
        darkMode ? "bg-gray-900 text-gray-100 dark" : "bg-white text-gray-800"
      }`}
    >
      <Head>
        <title>Ignacio Barra's Portfolio</title>
        <meta name="description" content="Generated by cre"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
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
              Hi, I'm a Full Stack Developer. I would say very friendly and a
              team worker, i have mixed my skills from psychology to this new
              career path in tech, i really like traveling and meeting different
              cultures.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiOutlineMail />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image
              src={profilepic}
              alt="Deved Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-300">
              Services I offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              With 800+ hours of coding, I am comfortable working with{" "}
              <span className="text-teal-500">
                HTML, CSS, Javascript, React, Redux, React Native, Tailwind,
                NodeJS, ExpressJS, PostgreSQL, MongoDB, and many more!
              </span>
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              I would love to be part of a very friendly and with intelectual
              curiosity team.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 ">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-300">
                Front End Development
              </h3>
              <p className="py-2 dark:text-gray-300">
                Creating functional and beautiful interfaces with Responsive
                Design
              </p>
              <h4 className="py-4 text-teal-600">Technologies</h4>
              <p className="text-gray-800 py-1 dark:text-gray-300">HTML5</p>
              <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg"
                  width={50}
                  height={50}
                  alt="HTML5"
                />
              </a>
              <p className="text-gray-800 py-1 dark:text-gray-300">CSS3</p>
              <a href="https://www.w3schools.com/css" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg"
                  width={50}
                  height={50}
                  alt="CSS3"
                />
              </a>
              <p className="text-gray-800 py-1 dark:text-gray-300">
                Javascript
              </p>
              <a href="https://www.javascript.com/" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg"
                  width={50}
                  height={50}
                  alt="Javascript"
                />
              </a>
              <p className="text-gray-800 py-1 dark:text-gray-300">React</p>
              <a href="https://reactjs.org/" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg"
                  width={50}
                  height={50}
                  alt="React"
                />
              </a>
              <p className="text-gray-800 py-1 dark:text-gray-300">
                React Native
              </p>
              <a href="https://reactnative.dev/" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg"
                  width={50}
                  height={50}
                  alt="React Native"
                />
              </a>
              <p className="text-gray-800 py-1 dark:text-gray-300">Redux</p>
              <a href="https://redux.js.org/" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/redux-original.svg"
                  width={50}
                  height={50}
                  alt="Redux"
                />
              </a>
              <p className="text-gray-800 py-1 dark:text-gray-300">Tailwind</p>
              <a href="https://www.tailwindcss.com/" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/tailwindcss.svg"
                  width={50}
                  height={50}
                  alt="Tailwind"
                />
              </a>
              <p className="text-gray-800 py-1 dark:text-gray-300">Bootstrap</p>
              <a
                href="https://getbootstrap.com/docs/3.4/javascript/"
                target="_blank"
              >
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg"
                  width={50}
                  height={50}
                  alt="Bootstrap"
                />
              </a>
              <h4 className="py-4 text-teal-600">Working Tools</h4>
              <p className="text-gray-800 py-1 dark:text-gray-300">Figma</p>
              <a href="https://www.figma.com/" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/figma-icon.svg"
                  width={50}
                  height={50}
                  alt="Figma"
                />
              </a>{" "}
              {/* <p className="text-gray-800 py-1 dark:text-gray-300">Trello</p>
              <a href="https://www.trello.com/" target="_blank">
                <Image
                  src="https://i.ibb.co/4fGFN9S/trello-logo-removebg-preview.png"
                  width={50}
                  height={50}
                  alt="Trello"
                />
              </a> */}
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-300">
                Back End Development
              </h3>
              <p className="py-2 dark:text-gray-300">
                Building the logic for the server side of the application,
                creating usefull RESTful API's
              </p>
              <h4 className="py-4 text-teal-600">Technologies</h4>

              <p className="text-gray-800 py-1 dark:text-gray-300">NodeJS</p>
              <a href="https://nodejs.org" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg"
                  width={50}
                  height={50}
                  alt="NodeJS"
                />
              </a>
              <p className="text-gray-800 py-1 dark:text-gray-300">Express</p>
              <a href="https://expressjs.com" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg"
                  width={50}
                  height={50}
                  alt="Express"
                />
              </a>
              <p className="text-gray-800 py-1 dark:text-gray-300">
                PostgreSQL
              </p>
              <a href="https://www.postgresql.org/" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg"
                  width={50}
                  height={50}
                  alt="PostgreSQL"
                />
              </a>

              <p className="text-gray-800 py-1 dark:text-gray-300">MySQL</p>
              <a href="https://www.mysql.com/" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg"
                  width={50}
                  height={50}
                  alt="MySQL"
                />
              </a>
              <p className="text-gray-800 py-1 dark:text-gray-300">MongoDB</p>
              <a href="https://www.mongodb.com/" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg"
                  width={50}
                  height={50}
                  alt="MongoDB"
                />
              </a>

              <h4 className="py-4 text-teal-600">Cloud?</h4>

              <p className="text-gray-800 py-1 dark:text-gray-300">
                Amazon Web Services
              </p>
              <a href="https://aws.amazon.com/" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/amazonwebservices-original-wordmark.svg"
                  width={50}
                  height={50}
                  alt="Amazon Web Services"
                />
              </a>

              <p className="text-gray-800 py-1 dark:text-gray-300">Firebase</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-300">
                Front End Development
              </h3>
              <p className="py-2 dark:text-gray-300">
                Creating functional and beautiful interfaces with Responsive
                Design
              </p>
              <h4 className="py-4 text-teal-600">Technologies</h4>
              <p className="text-gray-800 py-1 dark:text-gray-300">React</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">
                React Native for Mobile
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Tailwind</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Redux</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">
                And of course HTML and CSS
              </p>
              <h4 className="py-4 text-teal-600">Working Tools</h4>
              <p className="text-gray-800 py-1 dark:text-gray-300">Figma</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Trello</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-300">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              With 800+ hours of coding, I am comfortable working with{" "}
              <span className="text-teal-500">
                HTML, CSS, Javascript, React, Redux, React Native, Tailwind,
                NodeJS, ExpressJS, PostgreSQL, MongoDB, and many more!
              </span>
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              I would love to be part of a very friendly and with intelectual
              curiosity team.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
