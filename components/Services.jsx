import React from "react";
import Technologies from "./technologies";

const Services = () => {
  return (
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
              Web application development: I can develop web applications using
              a variety of programming languages, frameworks, and platforms to
              create highly functional and responsive web applications.
            </li>
            <li>
              Mobile application development: I can build mobile applications
              that are optimized for different platforms like Android and iOS to
              provide users with a seamless experience.
            </li>
            <li>
              API development and integration: I can develop APIs to integrate
              your software applications with other third-party applications to
              improve functionality and efficiency.
            </li>
            <li>
              Maintenance and support: I can provide ongoing maintenance and
              support services to ensure that your software applications are
              running smoothly and efficiently.
            </li>
          </ul>
          I am committed to delivering high-quality and cost-effective solutions
          that help businesses achieve their objectives and succeed in today's
          competitive market.
          <br></br>
          <br></br> With 800+ hours of coding, I am confident working with a
          variety of technologies and frameworks such as{" "}
          <span className="text-teal-500">
            HTML5, CSS3, Javascript, React, NextJS, React Native, Redux,
            Tailwind, Bootstrap, NodeJS, ExpressJS, PostgreSQL, MySQL, MongoDB,
            and many more!
          </span>
        </div>
      </div>
      <Technologies />
    </section>
  );
};

export default Services;
