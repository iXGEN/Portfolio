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
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ignacio Barra's Portfolio</title>
        <meta name="description" content="Generated by cre"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Developed by Igna</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
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
            <h2 className="text-5xl py-2 text-teal-600">Ignacio Barra</h2>
            <h3 className="text-2xl py-2">Full Stack Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
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
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              With 800+ hours of coding, I am comfortable working with{" "}
              <span className="text-teal-500">
                HTML, CSS, Javascript, React, Redux, React Native, Tailwind,
                NodeJS, ExpressJS, PostgreSQL, MongoDB, and many more!
              </span>
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I would love to be part of a very friendly and with intelectual
              curiosity team.
            </p>
          </div>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Front End Development
              </h3>
              <p className="py-2">
                Creating functional and beautiful interfaces with Responsive
                Design
              </p>
              <h4 className="py-4 text-teal-600">Technologies</h4>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">React Native for Mobile</p>
              <p className="text-gray-800 py-1">Tailwind</p>
              <p className="text-gray-800 py-1">Redux</p>
              <p className="text-gray-800 py-1">And of course HTML and CSS</p>
              <h4 className="py-4 text-teal-600">Working Tools</h4>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Trello</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Front End Development
              </h3>
              <p className="py-2">
                Creating functional and beautiful interfaces with Responsive
                Design
              </p>
              <h4 className="py-4 text-teal-600">Technologies</h4>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">React Native for Mobile</p>
              <p className="text-gray-800 py-1">Tailwind</p>
              <p className="text-gray-800 py-1">Redux</p>
              <p className="text-gray-800 py-1">And of course HTML and CSS</p>
              <h4 className="py-4 text-teal-600">Working Tools</h4>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Trello</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Front End Development
              </h3>
              <p className="py-2">
                Creating functional and beautiful interfaces with Responsive
                Design
              </p>
              <h4 className="py-4 text-teal-600">Technologies</h4>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">React Native for Mobile</p>
              <p className="text-gray-800 py-1">Tailwind</p>
              <p className="text-gray-800 py-1">Redux</p>
              <p className="text-gray-800 py-1">And of course HTML and CSS</p>
              <h4 className="py-4 text-teal-600">Working Tools</h4>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Trello</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3>Portfolio</h3>
          </div>
        </section>
      </main>
    </div>
  );
}
