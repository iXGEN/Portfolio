import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import piDogsImg from "../public/piDogsImg.png";
import dogDetail from "../public/dogDetail.png";
import createDog from "../public/createDog.png";
import responsive from "../public/responsive.jpeg";

const Thedogapi = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  function handleToggle1() {
    setIsOpen1(!isOpen1);
  }
  function handleToggle2() {
    setIsOpen2(!isOpen2);
  }
  return (
    <>
      <div className="mt-20">
        <h1>Here are the details of The Dog API Project!</h1>
        <h2>More details:</h2>
        <p>Aquí van todas las imágenes del proyecto</p>
        <p>Descripción detallada</p>
        <p>descripción de lo que yo hice</p>
        <p>íconos de las tecnologías</p>
        <p>Nombres de las tecnologías</p>
        <p>Sumar todo lo que este en inicio respecto a este proyecto</p>
      </div>
      <div>
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
          <Link href="/thedogapi">
            <button>See more details</button>{" "}
            {/* alguna idea para usar este Link? */}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Thedogapi;
