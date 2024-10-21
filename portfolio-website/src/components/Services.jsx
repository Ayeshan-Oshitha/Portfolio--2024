import React from "react";
import styles from "../styles/Container.module.css";
import InProgressPage from "./InProgressPage";

import { MdOutlineMobileScreenShare } from "react-icons/md";
import { GiClick } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import { FaBookOpen } from "react-icons/fa";

import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

import { FaNodeJs } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import { SiSpringboot } from "react-icons/si";

import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";

import { SiMysql } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

import { FaGitAlt } from "react-icons/fa";
import { FaDocker } from "react-icons/fa6";

import { BiLogoFlutter } from "react-icons/bi";
import { FaSwift } from "react-icons/fa";
import { SiKotlin } from "react-icons/si";

import { FaFigma } from "react-icons/fa6";
import { SiAdobephotoshop } from "react-icons/si";

import { SiAdobeindesign } from "react-icons/si";
import { PiMicrosoftWordLogoFill } from "react-icons/pi";
import { SiAdobeillustrator } from "react-icons/si";
import { SiCanva } from "react-icons/si";

import { SiFiverr } from "react-icons/si";
import { FaSquareUpwork } from "react-icons/fa6";

const Services = () => {
  return (
    <>
      <div className="flex flex-col  gap-24 h-auto mb-20  items-center">
        {/* ---------- Web Design ---------- */}
        <div className="flex flex-col w-full min-h-20 xl:w-4/5 px-6 py-6" id={styles.boxContainer} data-aos="fade-up">
          <p className=" text-purple-500 text-3xl font-medium tracking-wider mb-1">Web Design</p>
          <CgWebsite className="text-5xl mb-2 text-purple-500" />
          <hr className="w-full border-gray-300 mt-6 mb-8" />
          <p>
            Web design involves a comprehensive approach that brings together aesthetics, functionality, and technical expertise
            to create seamless online experiences. It encompasses several components, including:
          </p>
          <ul className="mt-4 mb-4 list-disc flex flex-col gap-2 ml-6 font-extralight bullet-list">
            <li>
              {" "}
              <span className="text-purple-400 font-normal">Frontend Design : </span> The visual and interactive elements of a
              website, such as layouts, typography, color schemes, and navigation, are designed using HTML, CSS, and JavaScript.
              Modern frameworks like React, Angular, and Vue.js enhance functionality and user experience by creating dynamic,
              responsive interfaces that work across different devices.
            </li>
            <li>
              {" "}
              <span className="text-purple-400 font-normal">Backend Development:</span> The backend is the backbone of any web
              application, handling databases, user authentication, server management, and business logic. Technologies like
              Node.js, .NET, and Spring Boot allow for the creation of scalable, efficient, and secure backend systems. These
              systems ensure smooth communication between the server and the frontend.
            </li>
            <li>
              {" "}
              <span className="text-purple-400 font-normal">CSS Frameworks: </span> Frameworks like Bootstrap, Material UI, and
              Tailwind CSS simplify the styling process, offering pre-designed components and responsive grids to ensure
              consistency across the application. They allow for faster development without compromising on design flexibility.
            </li>
            <li>
              {" "}
              <span className="text-purple-400 font-normal">Databases: </span> Databases are integral to storing and managing data
              effectively. Popular choices include relational databases like MySQL and SQL Server, and NoSQL databases like
              MongoDB. These databases are essential for managing user data, content, and transactions, depending on the
              application’s needs.
            </li>
            <li>
              {" "}
              <span className="text-purple-400 font-normal">Hosting and Deployment: </span> Hosting solutions such as AWS, Azure,
              and Netlify provide scalable and reliable platforms to deploy web applications. They offer various features like
              continuous integration, server management, and content delivery networks (CDNs) to ensure the website is fast,
              secure, and always available.
            </li>
            <li>
              {" "}
              <span className="text-purple-400 font-normal">Collaboration Tools: </span> vEffective teamwork is essential in web
              development, with tools like Git, GitHub, and GitLab enabling version control and collaboration. Communication
              platforms like Slack and project management tools like Jira also play a key role in ensuring a smooth workflow, from
              planning and development to deployment.
            </li>
          </ul>
          <p>
            By integrating these elements, web design and development become a cohesive process that ensures both the user
            interface and underlying systems work together seamlessly, delivering an optimal user experience.
          </p>

          <hr className="w-full border-gray-300 mt-6 mb-6" />

          <div className="flex flex-row flex-wrap gap-x-20 gap-y-6  justify-evenly ">
            <div className="">
              <p className="text-lg text-center tracking-wider mb-2">FrontEnd Technologies</p>
              <div className="flex flex-row justify-center flex-wrap text-4xl gap-5">
                <FaReact style={{ color: "#61DBFB" }} />
                <SiNextdotjs style={{ color: "#ffffff" }} />
              </div>
            </div>

            <div className="">
              <p className="text-lg text-center tracking-wider mb-2">Backend Technologies</p>
              <div className="flex flex-row justify-center flex-wrap text-4xl gap-5">
                <FaNodeJs style={{ color: "#339933" }} />
                <AiOutlineDotNet style={{ color: "#512BD4" }} />
                <SiSpringboot style={{ color: "#6DB33F" }} />
              </div>
            </div>

            <div className="">
              <p className="text-lg text-center tracking-wider mb-2">Database</p>
              <div className="flex flex-row justify-center flex-wrap text-4xl gap-5">
                <SiMysql style={{ color: "#00758F" }} />
                <SiMicrosoftsqlserver style={{ color: "#CC2927" }} />
                <SiMongodb style={{ color: "#47A248" }} />
                <BiLogoPostgresql style={{ color: "#336791" }} />
              </div>
            </div>

            <div className="">
              <p className="text-lg text-center tracking-wider mb-2">CSS Frameworks</p>
              <div className="flex flex-row justify-center flex-wrap text-4xl gap-5">
                <RiTailwindCssFill style={{ color: "#38B2AC" }} />
                <FaBootstrap style={{ color: "#7952B3" }} />
              </div>
            </div>

            <div className="">
              <p className="text-lg text-center tracking-wider mb-2">Other</p>
              <div className="flex flex-row justify-center flex-wrap text-4xl gap-5">
                <FaGitAlt style={{ color: "#F1502F" }} />
                <FaDocker style={{ color: "#2496ED" }} />
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Mobile Design ---------- */}
        <div className="flex flex-col w-full min-h-20 xl:w-4/5 px-6 py-6" id={styles.boxContainer} data-aos="fade-up">
          <p className=" text-purple-500 text-3xl font-medium tracking-wider mb-1">Mobile Design</p>
          <MdOutlineMobileScreenShare className="text-5xl mb-2 text-purple-500" />
          <hr className="w-full border-gray-300 mt-6 mb-8" />
          <p>
            Mobile application development focuses on creating software for mobile devices through cross-platform or native
            approaches.
          </p>
          <ul className="mt-4 mb-4 list-disc flex flex-col gap-2 ml-6 font-extralight bullet-list">
            <li>
              {" "}
              <span className="text-purple-400 font-normal">Cross-Platform Development: </span> Cross-platform development, using
              frameworks like React Native and Flutter, allows a single codebase to work on both iOS and Android. This approach
              reduces development time while ensuring consistent functionality across platforms. It is ideal for reaching a broad
              audience quickly and cost-effectively, offering a unified user experience without the need for separate apps.
            </li>
            <li>
              {" "}
              <span className="text-purple-400 font-normal"> Native Development: </span> For projects requiring optimal
              performance and deep integration with device-specific features, native development is the preferred choice. Native
              iOS apps, built using Swift or Objective-C, and native Android apps, developed with Kotlin or Java, provide full
              access to each platform’s unique ecosystem and hardware capabilities. This ensures a highly optimized, tailored
              experience designed specifically for each platform.
            </li>
          </ul>
          <hr className="w-full border-gray-300 mt-6 mb-6" />

          <div className="flex flex-row flex-wrap gap-x-20 gap-y-6  justify-evenly ">
            <div className="">
              <p className="text-lg text-center tracking-wider mb-2">Cross-Platform Development</p>
              <div className="flex flex-row justify-center flex-wrap text-4xl gap-5">
                <FaReact style={{ color: "#61DBFB" }} />
                <BiLogoFlutter style={{ color: "#02569B" }} />
              </div>
            </div>

            <div className="">
              <p className="text-lg text-center tracking-wider mb-2">Native Development</p>
              <div className="flex flex-row justify-center flex-wrap text-4xl gap-5">
                <FaSwift style={{ color: "F05138" }} />
                <SiKotlin style={{ color: "#F24C00" }} />
              </div>
            </div>
          </div>
        </div>

        {/* ---------- UI / UX ---------- */}
        <div className="flex flex-col w-full min-h-20 xl:w-4/5 px-6 py-6" id={styles.boxContainer} data-aos="fade-up">
          <p className=" text-purple-500 text-3xl font-medium tracking-wider mb-1">UI / UX</p>
          <GiClick className="text-5xl mb-2 text-purple-500" />
          <hr className="w-full border-gray-300 mt-6 mb-8" />
          <p className="mb-4">
            UI/UX design encompasses the process of enhancing user satisfaction by improving the usability, accessibility, and
            pleasure provided in the interaction between the user and a product.
          </p>
          <p className="font-extralight mb-2">
            <span className="text-purple-400 font-normal">User Interface (UI) Design </span> focuses on the visual aspects of a
            product, including layout, colors, typography, and interactive elements. It aims to create an aesthetically pleasing
            and intuitive interface that guides users through their tasks seamlessly.
          </p>
          <p className="font-extralight mb-2">
            <span className="text-purple-400 font-normal">User Experience (UX) Design, </span> on the other hand, involves
            understanding user needs, behaviors, and pain points to create meaningful experiences. It encompasses user research,
            wireframing, prototyping, and usability testing to ensure that the product is not only functional but also enjoyable
            to use.
          </p>
          <p>
            Together, UI and UX design work in harmony to create products that are both visually appealing and user-friendly,
            ultimately leading to increased user engagement and satisfaction.
          </p>
          <hr className="w-full border-gray-300 mt-10 mb-6" />
          <div className="">
            <p className="text-lg text-center tracking-wider mb-2">UI UX Design tools</p>
            <div className="flex flex-row justify-center flex-wrap text-4xl gap-5">
              <FaFigma style={{ color: "#F24E1E" }} />
              <SiAdobephotoshop style={{ color: "#31A8FF" }} />
            </div>
          </div>
        </div>

        {/* ---------- Book Design ---------- */}
        <div className="flex flex-col w-full min-h-20 xl:w-4/5 px-6 py-6" id={styles.boxContainer} data-aos="fade-up">
          <p className=" text-purple-500 text-3xl font-medium tracking-wider mb-1">Book Design</p>
          <FaBookOpen className="text-5xl mb-2 text-purple-500" />
          <hr className="w-full border-gray-300 mt-6 mb-4" />

          <div className="flex flex-col items-center gap-y-6">
            <div className="flex flex-row items-center justify-center gap-4 md:gap-10">
              <p className="text-3xl">Want to Hire me?</p>
              <div className="flex fex-row items-center gap-4 md:gap-8">
                <a href="https://www.fiverr.com/ayeshan_27?public_mode=true" target="_blank">
                  {" "}
                  <SiFiverr className="text-6xl cursor-pointer" style={{ color: "#1DBF73" }} />{" "}
                </a>
                <a href="https://www.upwork.com/freelancers/~017985443d957402c2?mp_source=share" target="_blank">
                  <FaSquareUpwork className="text-5xl cursor-pointer" style={{ color: "#6FDA44" }} />{" "}
                </a>
              </div>
            </div>
            <div className="flex flex-row">
              <a href="/webProjects">
                {" "}
                <p className="text-xl bg-purple-600 hover:bg-purple-700 cursor-pointer py-2 px-4 rounded-2xl">
                  See my latest Projects
                </p>
              </a>
            </div>
          </div>

          <hr className="w-full border-gray-300 mt-10 mb-8" />
          <p className="mb-4 font-extralight">
            Book design encompasses both cover and layout design.
            <span className="text-purple-400 font-normal"> Cover design </span> creates an attractive exterior that reflects the
            book's essence, while <span className="text-purple-400 font-normal">interior layout design </span> ensures
            reader-friendly formatting, including font choices and organization of headings and page numbers.
          </p>
          <p className="font-extralight mb-2">
            Books come in various formats, such as <span className="text-purple-400 font-normal"> hardcover </span> for
            durability, <span className="text-purple-400 font-normal"> paperback for flexibility </span>, and
            <span className="text-purple-400 font-normal"> photo books </span> for showcasing images. Digital formats like{" "}
            <span className="text-purple-400 font-normal"> eBooks, EPUB </span>, and
            <span className="text-purple-400 font-normal"> MOBI </span> cater to e-readers, offering features like adjustable text
            sizes.
          </p>
          <p className="font-extralight mb-2">
            {" "}
            <span className="text-purple-400 font-normal"> Publishing Platforms : </span> Amazon KDP, IngramSpark, Lulu, Barnes &
            Noble Press, MagCloud, Blurb.
          </p>
          <hr className="w-full border-gray-300 mt-8 mb-6" />
          <div className="flex flex-row flex-wrap gap-x-20 gap-y-6  justify-evenly ">
            <div className="">
              <p className="text-lg text-center tracking-wider mb-2">Book Design tools</p>
              <div className="flex flex-row justify-center flex-wrap text-4xl gap-5">
                <SiAdobeindesign className="text-pink-600" />
                <PiMicrosoftWordLogoFill style={{ color: "#185ABD" }} />
              </div>
            </div>

            <div className="">
              <p className="text-lg text-center tracking-wider mb-2">Extra Design Tools</p>
              <div className="flex flex-row justify-center flex-wrap text-4xl gap-5">
                <SiAdobephotoshop style={{ color: "31A8FF" }} />
                <SiAdobeillustrator style={{ color: "#FF9A00" }} />
                <SiCanva style={{ color: "#00C4CC" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
