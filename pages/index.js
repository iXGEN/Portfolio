import Head from "next/head";
import { Inter } from "next/font/google";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import Image from "next/image";
import profilepic from "../public/profilepic.jpeg";

import frontEnd from "../public/frontEnd.jpeg";
import backEnd from "../public/backEnd.jpg";
import softSkills from "../public/softSkills.jpeg";
import piDogsImg from "../public/piDogsImg.png";
import dogDetail from "../public/dogDetail.png";
import createDog from "../public/createDog.png";
import responsive from "../public/responsive.jpeg";
import findAHome from "../public/findAHome.png";
import petDetail from "../public/petDetail.png";

import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const linkedinLink = "https://www.linkedin.com/in/ignaciobarra-zagal/";
  const twitterLink = "https://twitter.com/IgnaBarraZagal";
  const emailLink = "dev.barrazagal@gmail.com";
  const copyEmail = async () => {
    await navigator.clipboard.writeText(emailLink);
    alert("Email copied to clipboard!");
  };

  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen || false);
  }
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
              Hi👋 I would say i'm very friendly and a team worker, i have mixed
              my skills from psychology to this new career path in tech, i
              really like traveling and meeting different cultures.
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
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-300">
              Services I offer 👨‍💻
            </h3>
            <div className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              As a full stack developer, I offer a wide range of services,
              including:
              <ul>
                <li>
                  Web application development: I can develop web applications
                  using a variety of programming languages, frameworks, and
                  platforms to create highly functional and responsive web
                  applications.
                </li>
                <li>
                  Mobile application development: I can build mobile
                  applications that are optimized for different platforms like
                  Android and iOS to provide users with a seamless experience.
                </li>
                <li>
                  API development and integration: I can develop APIs to
                  integrate your software applications with other third-party
                  applications to improve functionality and efficiency.
                </li>
                <li>
                  Maintenance and support: I can provide ongoing maintenance and
                  support services to ensure that your software applications are
                  running smoothly and efficiently.
                </li>
              </ul>
              I am committed to delivering high-quality and cost-effective
              solutions that help businesses achieve their objectives and
              succeed in today's competitive market.
              <br></br>
              <br></br> With 800+ hours of coding, I am confident working with a
              variety of technologies and frameworks such as{" "}
              <span className="text-teal-500">
                HTML5, CSS3, Javascript, React, NextJS, React Native, Redux,
                Tailwind, Bootstrap, NodeJS, ExpressJS, PostgreSQL, MySQL,
                MongoDB, and many more!
              </span>
            </div>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 ">
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-300">
                Front End Development
              </h3>
              <Image
                src={frontEnd}
                width={250}
                height={250}
                className="rounded-full"
              />
              <p className="py-2 dark:text-gray-300">
                Creating functional and beautiful interfaces with Responsive
                Design
              </p>
              <h4 className="py-4 text-teal-600">Technologies</h4>
              <p className="text-gray-800 py-1 dark:text-gray-300">
                HTML5, CSS3, Javascript, React, NextJS, React Native, Redux,
                Tailwind, Bootstrap
              </p>
              <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg"
                  width={50}
                  height={50}
                  alt="HTML5"
                />
              </a>
              <a href="https://www.w3schools.com/css" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg"
                  width={50}
                  height={50}
                  alt="CSS3"
                />
              </a>
              <a href="https://www.javascript.com/" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg"
                  width={50}
                  height={50}
                  alt="Javascript"
                />
              </a>
              <a href="https://reactjs.org/" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg"
                  width={50}
                  height={50}
                  alt="React"
                />
              </a>
              <a href="https://nextjs.org/" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/nextjs.png"
                  width={50}
                  height={50}
                  alt="NextJS"
                />
              </a>
              <a href="https://reactnative.dev/" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg"
                  width={50}
                  height={50}
                  alt="React Native"
                />
              </a>
              <a href="https://redux.js.org/" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/redux-original.svg"
                  width={50}
                  height={50}
                  alt="Redux"
                />
              </a>
              <a href="https://www.tailwindcss.com/" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/tailwindcss.svg"
                  width={50}
                  height={50}
                  alt="Tailwind"
                />
              </a>
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
              <p className="text-gray-800 py-1 dark:text-gray-300">
                Figma, Trello
              </p>
              <a href="https://www.figma.com/" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/figma-icon.svg"
                  width={50}
                  height={50}
                  alt="Figma"
                />
              </a>{" "}
              <a href="https://www.trello.com/" target="_blank">
                <Image
                  src="https://i.ibb.co/4fGFN9S/trello-logo-removebg-preview.png"
                  width={70}
                  height={70}
                  alt="Trello"
                />
              </a>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-300">
                Back End Development
              </h3>
              <Image
                src={backEnd}
                width={250}
                height={250}
                className="rounded-full"
              />

              <p className="py-2 dark:text-gray-300">
                Building the logic for the server side of the application,
                creating usefull RESTful API's
              </p>
              <h4 className="py-4 text-teal-600">Technologies</h4>

              <p className="text-gray-800 py-1 dark:text-gray-300">
                NodeJS, Express, PostgreSQL, MySQL, MongoDB
              </p>
              <a href="https://nodejs.org" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg"
                  width={50}
                  height={50}
                  alt="NodeJS"
                />
              </a>

              <a href="https://expressjs.com" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg"
                  width={50}
                  height={50}
                  alt="Express"
                />
              </a>

              <a href="https://www.postgresql.org/" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg"
                  width={50}
                  height={50}
                  alt="PostgreSQL"
                />
              </a>

              <a href="https://www.mysql.com/" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg"
                  width={50}
                  height={50}
                  alt="MySQL"
                />
              </a>

              <a href="https://www.mongodb.com/" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg"
                  width={50}
                  height={50}
                  alt="MongoDB"
                />
              </a>

              <h4 className="py-4 text-teal-600">Cloud / DevOps</h4>

              <p className="text-gray-800 py-1 dark:text-gray-300">
                Amazon Web Services, Firebase
              </p>
              <a href="https://aws.amazon.com/" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/amazonwebservices-original-wordmark.svg"
                  width={50}
                  height={50}
                  alt="Amazon Web Services"
                />
              </a>

              <a href="https://aws.amazon.com/" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/firebase.png"
                  width={50}
                  height={50}
                  alt="Firebase"
                />
              </a>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-300">
                Other Skills
              </h3>
              <Image
                src={softSkills}
                width={250}
                height={250}
                className="rounded-full"
              />
              <p className="py-2 dark:text-gray-300">
                Creating functional and beautiful interfaces with Responsive
                Design
              </p>
              <h4 className="py-4 text-teal-600">Soft Skills</h4>
              <p className="text-gray-800 py-1 dark:text-gray-300">
                Effective Communication
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-300">
                Team Worker
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-300">
                Self taught
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Empathy</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">
                Open-Mindedness
              </p>

              <h4 className="py-4 text-teal-600">Version control</h4>
              <p className="text-gray-800 py-1 dark:text-gray-300">
                GIT, Github
              </p>
              <a href="https://git-scm.com/" target="_blank">
                <Image
                  src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg"
                  width={50}
                  height={50}
                  alt="GIT"
                />
              </a>
              <a href="https://github.com/iXGEN" target="_blank">
                <Image
                  src="https://1000logos.net/wp-content/uploads/2018/11/GitHub-logo.jpg"
                  width={50}
                  height={50}
                  alt="Github"
                />
              </a>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-6xl py-1 dark:text-gray-300">Portfolio</h3>
            <p className="text-4xl py-2 leading-8 text-gray-800 dark:text-gray-300">
              Here you can find my projects{" "}
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <a href="https://pi-dogs-ixgen.vercel.app/">
                <p className="text-3xl py-2 leading-8 text-gray-800 dark:text-gray-300 hover:transform hover:scale-110 transition duration-200">
                  The Dogs Web App{" "}
                </p>
              </a>

              <Image
                src={piDogsImg}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <Image
                src={dogDetail}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <Image
                src={createDog}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <Image
                src={responsive}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <p className="text-3xl py-2 leading-8 text-gray-800 dark:text-gray-300">
                Technologies:
              </p>
              <p className="text-2xl py-2 leading-8 text-gray-800 dark:text-gray-300">
                React, Redux, CSS Modules, NodeJS, ExpressJS, SQL, PostgreSQL{" "}
              </p>
              <p className="text-3xl py-2 leading-8 text-gray-800 dark:text-gray-300">
                Description:
              </p>
              <details
                className="text-gray-800 dark:text-gray-300 border border-gray-300 rounded-lg p-4"
                open={isOpen}
              >
                <summary
                  className="text-2xl py-2 cursor-pointer hover:text-blue-500"
                  onClick={handleToggle}
                >
                  {isOpen ? "Click to hide" : "Click to expand"}
                </summary>
                <p className="text-2xl py-2 leading-8">
                  Web application designed to provide information about various
                  dog breeds, with the ability to sort them alphabetically (A-Z
                  or Z-A) or by weight, and filter them based on their
                  temperament or if they were created by a user. The application
                  also includes a search bar to make it easier to find specific
                  breeds. Web application features a fully responsive design,
                  ensuring that users can easily access it on any device, from
                  desktop computers to mobile phones. Users can access more
                  information about different dog breeds, with each breed
                  presented with a detailed card that includes relevant
                  information, from weight, height, lifespan characteristics to
                  temperaments. Users can also create new dog breeds using a
                  controlled form that ensures all necessary information is
                  included. This feature allows users to contribute to the
                  application by adding new breeds.
                </p>
              </details>

              <p className="text-2xl py-2 leading-8 text-gray-800 dark:text-gray-300">
                Project Role: Full Stack Developer
              </p>
              <ul className="text-1xl py-2 leading-8 text-gray-800 dark:text-gray-300">
                <li> Create from scratch the Web App</li>
                <li>Design the UI </li>
                <li>Consume an API</li>
                <li>Create a relational database with SQL</li>
                <li> Create the back-end routes</li>
                <li>Connect Front and Back End with Redux Actions</li>
                <li>Test, maintain, and find bugs in the App</li>
                <li>Deploy the Web App</li>
              </ul>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://www.youtube.com/watch?v=-TH3UsyZDH8&ab_channel=Ignacio">
                <p className="text-3xl py-2 leading-8 text-gray-800 dark:text-gray-300 hover:transform hover:scale-110 transition duration-200">
                  Find A Home Mobile App{" "}
                </p>
              </a>

              <Image
                src={findAHome}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <Image
                src={petDetail}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <p className="text-3xl py-2 leading-8 text-gray-800 dark:text-gray-300">
                Technologies:
              </p>
              <p className="text-2xl py-2 leading-8 text-gray-800 dark:text-gray-300">
                React Native, Redux, Tailwind, NodeJS, ExpressJS, MongoDB,
                Amazon Web Services, Firebase, Google Auth, Figma, Trello{" "}
              </p>
              <p className="text-3xl py-2 leading-8 text-gray-800 dark:text-gray-300">
                Description:
              </p>
              <details className="text-gray-800 dark:text-gray-300 border border-gray-300 rounded-lg p-4">
                <summary className="text-2xl py-2 cursor-pointer hover:text-blue-500">
                  Click to expand
                </summary>
                <p className="text-2xl py-2 leading-8">
                  The mobile app is designed for both Android and iOS platforms
                  and helps homeless pets find loving homes. Unregistered users
                  can browse through available pets, while registered users can
                  create profiles with pictures and descriptions and contact
                  owners to adopt pets. Users can rate each other using a
                  star-based system and leave comments. The app allows users to
                  publish new pets, including photos, descriptions, and
                  estimated age. Pets are displayed based on how long they've
                  been waiting for a home. Users can apply filters to find pets
                  by type, size, or location based on GPS. The app also features
                  a reporting system for suspicious or inappropriate activity,
                  as well as an admin panel for monitoring user statistics and
                  taking action if necessary.
                </p>
              </details>

              <p className="text-2xl py-2 leading-8 text-gray-800 dark:text-gray-300">
                Project Role: Mobile Developer
              </p>
              <ul className="text-1xl py-2 leading-8 text-gray-800 dark:text-gray-300">
                <li>Design the App based on Figma design</li>
                <li>Create the UI </li>
                <li>Create the Back End and Data Base</li>
                <li>Connect Front and Back End with Redux Actions</li>
                <li>Test, maintain, and find bugs in the App</li>
                <li>Create new features</li>
                <li>Attend meetings with coworkers, Scrum master and client</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
