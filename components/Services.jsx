import React from "react";
import Typed from "react-typed";

const Services = () => {
  const stringsArr = [
    "Maintenance and support: I can provide ongoing maintenance and support services to ensure that your software applications are running smoothly and efficiently.",
  ];

  return (
    <section id="services" className="pt-20">
      <div>
        <h3 className="text-3xl py-1 dark:text-gray-300">
          Services I offer 👨‍💻
        </h3>
        <div className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
          <Typed
            strings={[
              "As a Full Stack and Mobile Developer, I offer a wide range of services, including:",
            ]}
            typeSpeed={10} // Velocidad de escritura en milisegundos
            backSpeed={1} // Velocidad de borrado en milisegundos
            backDelay={1000} // Retraso antes de iniciar el borrado en milisegundos
            loop={false} // No se repetirá la animación
            showCursor={false} // Ocultar la barra al final de la animación
          />
          <br></br>
          <Typed
            strings={[
              "Web application development: I can develop web applications using a variety of programming languages, frameworks, and platforms to create highly functional and responsive web applications.",
            ]}
            typeSpeed={50} // Velocidad de escritura en milisegundos
            backSpeed={1} // Velocidad de borrado en milisegundos
            backDelay={1000} // Retraso antes de iniciar el borrado en milisegundos
            loop={false} // No se repetirá la animación
            showCursor={false}
          />

          <br />
          <Typed
            strings={[
              "Mobile application development: I can build mobile applications that are optimized for different platforms like Android and iOS to provide users with a seamless experience.",
            ]}
            typeSpeed={50} // Velocidad de escritura en milisegundos
            backSpeed={1} // Velocidad de borrado en milisegundos
            backDelay={1000} // Retraso antes de iniciar el borrado en milisegundos
            loop={false} // No se repetirá la animación
            showCursor={false}
          />
          <br />
          <Typed
            strings={[
              "API development and integration: I can develop APIs to integrate your software applications with other third-party applications to improve functionality and efficiency.",
            ]}
            typeSpeed={50} // Velocidad de escritura en milisegundos
            backSpeed={1} // Velocidad de borrado en milisegundos
            backDelay={1000} // Retraso antes de iniciar el borrado en milisegundos
            loop={false} // No se repetirá la animación
            showCursor={false}
          />
          <br />
          <Typed
            strings={[
              "Maintenance and support: I can provide ongoing maintenance and support services to ensure that your software applications are running smoothly and efficiently.",
            ]}
            typeSpeed={50} // Velocidad de escritura en milisegundos
            backSpeed={1} // Velocidad de borrado en milisegundos
            backDelay={1000} // Retraso antes de iniciar el borrado en milisegundos
            loop={false} // No se repetirá la animación
            showCursor={false}
          />

          <br></br>
          <br></br>

          <Typed
            strings={[
              "I am confident working with a variety of technologies and frameworks such as",
            ]}
            typeSpeed={100}
            backSpeed={10}
            backDelay={1000}
            loop={false}
            showCursor={false}
          />
          <br></br>

          <Typed
            strings={[
              "HTML5, CSS3, Javascript, Wordpress, React, NextJS, React Native, Redux, Tailwind, Bootstrap, NodeJS, ExpressJS, PostgreSQL, MySQL, MongoDB and many more!",
            ]}
            typeSpeed={100}
            backSpeed={10}
            backDelay={1000}
            loop={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
