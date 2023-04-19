import React from "react";
import Image from "next/image";
import frontEnd from "../public/frontEnd.jpeg";
import backEnd from "../public/backEnd.jpg";
import softSkills from "../public/softSkills.jpeg";

const Technologies = () => {
  return (
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
          Creating functional and beautiful interfaces with Responsive Design
        </p>
        <h4 className="py-4 text-teal-600">Technologies</h4>
        <p className="text-gray-800 py-1 dark:text-gray-300">
          HTML5, CSS3, Javascript, React, NextJS, React Native, Redux, Tailwind,
          Bootstrap
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
        <a href="https://getbootstrap.com/docs/3.4/javascript/" target="_blank">
          <Image
            src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg"
            width={50}
            height={50}
            alt="Bootstrap"
          />
        </a>
        <h4 className="py-4 text-teal-600">Working Tools</h4>
        <p className="text-gray-800 py-1 dark:text-gray-300">Figma, Trello</p>
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
          Building the logic for the server side of the application, creating
          usefull RESTful API's
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
          Creating functional and beautiful interfaces with Responsive Design
        </p>
        <h4 className="py-4 text-teal-600">Soft Skills</h4>
        <p className="text-gray-800 py-1 dark:text-gray-300">
          Effective Communication
        </p>
        <p className="text-gray-800 py-1 dark:text-gray-300">Team Worker</p>
        <p className="text-gray-800 py-1 dark:text-gray-300">Self taught</p>
        <p className="text-gray-800 py-1 dark:text-gray-300">Empathy</p>
        <p className="text-gray-800 py-1 dark:text-gray-300">Open-Mindedness</p>

        <h4 className="py-4 text-teal-600">Version control</h4>
        <p className="text-gray-800 py-1 dark:text-gray-300">GIT, Github</p>
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
  );
};

export default Technologies;
