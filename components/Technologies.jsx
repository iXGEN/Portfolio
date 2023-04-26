import React from "react";
import Image from "next/image";
import frontEnd from "../public/frontEnd.jpeg";
import backEnd from "../public/backEnd.jpg";
import softSkills from "../public/softSkills.jpeg";

const Technologies = () => {
  const frontEndTechnologies = [
    {
      href: "https://en.wikipedia.org/wiki/HTML5",
      src: "https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg",
      alt: "HTML5",
    },
    {
      href: "https://www.w3schools.com/css",
      src: "https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg",
      alt: "CSS3",
    },
    {
      href: "https://www.javascript.com/",
      src: "https://profilinator.rishav.dev/skills-assets/javascript-original.svg",
      alt: "Javascript",
    },
    {
      href: "https://reactjs.org/",
      src: "https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg",
      alt: "React",
    },
    {
      href: "https://nextjs.org/",
      src: "https://profilinator.rishav.dev/skills-assets/nextjs.png",
      alt: "NextJS",
    },
    {
      href: "https://reactnative.dev/",
      src: "https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg",
      alt: "React Native",
    },
    {
      href: "https://redux.js.org/",
      src: "https://profilinator.rishav.dev/skills-assets/redux-original.svg",
      alt: "Redux",
    },
    {
      href: "https://www.tailwindcss.com/",
      src: "https://profilinator.rishav.dev/skills-assets/tailwindcss.svg",
      alt: "Tailwind",
    },
    {
      href: "https://getbootstrap.com/docs/3.4/javascript/",
      src: "https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg",
      alt: "Bootstrap",
    },
  ];
  const workingTools = [
    {
      href: "https://www.figma.com/",
      src: "https://profilinator.rishav.dev/skills-assets/figma-icon.svg",
      alt: "Figma",
    },
    {
      href: "https://www.trello.com/",
      src: "https://i.ibb.co/4fGFN9S/trello-logo-removebg-preview.png",
      alt: "Trello",
    },
  ];

  const backEndTechnologies = [
    {
      href: "https://nodejs.org",
      src: "https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg",
      alt: "NodeJS",
    },
    {
      href: "https://expressjs.com",
      src: "https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg",
      alt: "Express",
    },
    {
      href: "https://www.postgresql.org/",
      src: "https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg",
      alt: "PostgreSQL",
    },
    {
      href: "https://www.mysql.com/",
      src: "https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg",
      alt: "MySQL",
    },
    {
      href: "https://www.mongodb.com/",
      src: "https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg",
      alt: "MongoDB",
    },
  ];
  const cloudDevOpsTechnologies = [
    {
      href: "https://aws.amazon.com/",
      src: "https://profilinator.rishav.dev/skills-assets/amazonwebservices-original-wordmark.svg",
      alt: "Amazon Web Services",
    },
    {
      href: "https://firebase.google.com/",
      src: "https://profilinator.rishav.dev/skills-assets/firebase.png",
      alt: "Firebase",
    },
  ];

  const versionControl = [
    {
      href: "https://git-scm.com/",
      src: "https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg",
      alt: "GIT",
    },
    {
      href: "https://github.com/iXGEN",
      src: "https://1000logos.net/wp-content/uploads/2018/11/GitHub-logo.jpg",
      alt: "Github",
    },
  ];
  const softSkillsArr = [
    "Effective Communication",
    "Team Worker",
    "Self Taught",
    "Empathy",
    "Open-Mindedness",
  ];

  return (
    <div className="lg:flex gap-10 flex-wrap">
      <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 ">
        <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-300">
          Front End Development
        </h3>
        <img src={frontEnd} width={250} height={250} className="rounded-full" />

        <p className="py-2 dark:text-gray-300">
          Creating functional and beautiful interfaces with Responsive Design
        </p>
        <h4 className="py-4 text-teal-600">Technologies</h4>
        <p className="text-gray-800 py-1 dark:text-gray-300">
          HTML5, CSS3, Javascript, React, NextJS, React Native, Redux, Tailwind,
          Bootstrap
        </p>
        {frontEndTechnologies.map((technology, index) => (
          <a
            key={index}
            href={technology.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={technology.src}
              width={50}
              height={50}
              alt={technology.alt}
            />
          </a>
        ))}
        <h4 className="py-4 text-teal-600">Working Tools</h4>
        <p className="text-gray-800 py-1 dark:text-gray-300">Figma, Trello</p>
        {workingTools.map((tool, index) => (
          <a
            key={index}
            href={tool.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={tool.src} width={50} height={50} alt={tool.alt} />
          </a>
        ))}
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
        {backEndTechnologies.map((technology, index) => (
          <a
            key={index}
            href={technology.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={technology.src}
              width={50}
              height={50}
              alt={technology.alt}
            />
          </a>
        ))}

        <h4 className="py-4 text-teal-600">Cloud / DevOps</h4>

        <p className="text-gray-800 py-1 dark:text-gray-300">
          Amazon Web Services, Firebase
        </p>
        {cloudDevOpsTechnologies.map((technology, index) => (
          <a
            key={index}
            href={technology.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={technology.src}
              width={50}
              height={50}
              alt={technology.alt}
            />
          </a>
        ))}
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

        {softSkillsArr.map((el, index) => (
          <p key={index} className="text-gray-800 py-1 dark:text-gray-300">
            {el}
          </p>
        ))}

        <h4 className="py-4 text-teal-600">Version control</h4>
        <p className="text-gray-800 py-1 dark:text-gray-300">GIT, Github</p>
        {versionControl.map((technology, index) => (
          <a
            key={index}
            href={technology.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={technology.src}
              width={50}
              height={50}
              alt={technology.alt}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
