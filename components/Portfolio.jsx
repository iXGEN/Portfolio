import React from "react";
import Image from "next/image";
import piDogsImg from "../public/piDogsImg.png";
import dogDetail from "../public/dogDetail.png";
import createDog from "../public/createDog.png";
import responsive from "../public/responsive.jpeg";
import findAHome from "../public/findAHome.png";
import petDetail from "../public/petDetail.png";

const Portfolio = ({
  handleToggle1,
  isOpen1,
  setIsOpen1,
  handleToggle2,
  isOpen2,
  setIsOpen2,
}) => {
  return (
    <section id="portfolio" className="pt-20">
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
            alt="PIDOGS"
            width={"100%"}
            height={"100%"}
          />
          <Image
            src={dogDetail}
            className="rounded-lg object-cover"
            alt="DOGDETAIL"
            width={"100%"}
            height={"100%"}
          />
          <Image
            src={createDog}
            className="rounded-lg object-cover"
            alt="CREATEDOG"
            width={"100%"}
            height={"100%"}
          />
          <Image
            src={responsive}
            className="rounded-lg object-cover"
            alt="RESPONSIVE"
            width={"100%"}
            height={"100%"}
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

          <button
            onClick={handleToggle1}
            className="text-gray-800 dark:text-gray-300 border border-gray-300 rounded-lg p-4"
          >
            {isOpen1 ? "Click to hide" : "Click to expand"}
          </button>
          {isOpen1 ? (
            <p className="text-1xl py-2 leading-8">
              {" "}
              Web application designed to provide information about various dog
              breeds, with the ability to sort them alphabetically (A-Z or Z-A)
              or by weight, and filter them based on their temperament or if
              they were created by a user. The application also includes a
              search bar to make it easier to find specific breeds. Web
              application features a fully responsive design, ensuring that
              users can easily access it on any device, from desktop computers
              to mobile phones. Users can access more information about
              different dog breeds, with each breed presented with a detailed
              card that includes relevant information, from weight, height,
              lifespan characteristics to temperaments. Users can also create
              new dog breeds using a controlled form that ensures all necessary
              information is included. This feature allows users to contribute
              to the application by adding new breeds.
            </p>
          ) : null}

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
            alt="findAHome"
            width={"100%"}
            height={"100%"}
          />
          <Image
            src={petDetail}
            className="rounded-lg object-cover"
            alt="petDetail"
            priority="low" // or "auto"
            width={"100%"}
            height={"100%"}
          />
          <p className="text-3xl py-2 leading-8 text-gray-800 dark:text-gray-300">
            Technologies:
          </p>
          <p className="text-2xl py-2 leading-8 text-gray-800 dark:text-gray-300">
            React Native, Redux, Tailwind, NodeJS, ExpressJS, MongoDB, Amazon
            Web Services, Firebase, Google Auth, Figma, Trello{" "}
          </p>
          <p className="text-3xl py-2 leading-8 text-gray-800 dark:text-gray-300">
            Description:
          </p>

          <button
            onClick={handleToggle2}
            className="text-gray-800 dark:text-gray-300 border border-gray-300 rounded-lg p-4"
          >
            {isOpen2 ? "Click to hide" : "Click to expand"}
          </button>
          {isOpen2 ? (
            <p className="text-1xl py-2 leading-8">
              {" "}
              The mobile app is designed for both Android and iOS platforms and
              helps homeless pets find loving homes. Unregistered users can
              browse through available pets, while registered users can create
              profiles with pictures and descriptions and contact owners to
              adopt pets. Users can rate each other using a star-based system
              and leave comments. The app allows users to publish new pets,
              including photos, descriptions, and estimated age. Pets are
              displayed based on how long they have been waiting for a home.
              Users can apply filters to find pets by type, size, or location
              based on GPS. The app also features a reporting system for
              suspicious or inappropriate activity, as well as an admin panel
              for monitoring user statistics and taking action if necessary.
            </p>
          ) : null}

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
  );
};

export default Portfolio;
