import React from "react";

const Services = () => {
  return (
    <section id="services" className="pt-20">
      <div>
        <h3 className="text-3xl py-1  dark:text-gray-300">
          Services I offer 👨‍💻
        </h3>
        <div className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
          As a Full Stack and Mobile Developer, I offer a wide range of
          services, including:
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
          <br></br>I am confident working with a variety of technologies and
          frameworks such as{" "}
          <span className="text-teal-500">
            HTML5, CSS3, Javascript, Wordpress, React, NextJS, React Native,
            Redux, Tailwind, Bootstrap, NodeJS, ExpressJS, PostgreSQL, MySQL,
            MongoDB, and many more!
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;
