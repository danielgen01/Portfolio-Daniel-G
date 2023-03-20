import React from "react"
import Bewerbungsbild from "../assets/images/BewerbungsbildCartoon.png"
import { BsGit, BsGithub } from "react-icons/bs"
import {SiTailwindcss,SiReact,SiJavascript,SiHtml5,SiCss3,SiRedux} from "react-icons/si"

const MainBanner: React.FC = () => {
  return (
    <div className="main-banner text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between mt-12 lg:items-center lg:mt-0 mx-5">
        <div className="description flex flex-col gap-5  text-left items-start">
          <h1 className="font-bold text-7xl">Hi, I'm Daniel</h1>
          <h2 className="font-normal text-4xl">
            My name is Daniel Gendik and I'm a 22 year old (Web) Frontend
            developer
            <br />
            from Germany. Scroll down to check out my projects and social media.
          </h2>
        </div>

        <div className="picture-ctn w-full flex flex-col items-center justify-center ">
          <div className="image-ctn flex justify-center">
            <img
              src={Bewerbungsbild}
              alt="picture_of_me"
              className="rounded-md "
            />
          </div>
          <div className="download-ctn flex justify-center">
            <a
              href="#"
              className="underline-offset-1 text-blue-600 underline font-bold "
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="sketch h-2 bg-gradient-to-r from-sky-500 to-indigo-500 mt-10 -skew-y-2 w-full"></div>

      <div className="description flex flex-col gap-5  mx-5 items-end justify-center ">
        <h1 className="font-bold text-5xl text-center mt-5">
          Dev Stack + technologies
        </h1>
        {/* logos technologies */}
        <div className="technologies-logos grid grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-full lg:w-auto">
          <div className="grid-item flex justify-center items-center">
            <SiHtml5
              // src={htmllogo}
              title={"htmllogo"}
              // alt="htmllogo"
              className="h-[80px] w-fit text-orange-600"
            />
          </div>
          <div className="grid-item flex justify-center items-center">
            <SiCss3
              // src={csslogo}
              title={"csslogo"}
              // alt="csslogo"
              className="h-[80px] w-fit text-blue-600"
            />
          </div>
          <div className="grid-item flex justify-center items-center">
            <SiTailwindcss
              // src={tailwindlogo}
              title={"tailwindlogo"}
              // alt="tailwindlogo"
              className="h-[80px] w-fit text-sky-500"
            />
          </div>
          <div className="grid-item flex justify-center items-center">
            <SiJavascript
              // src={jslogo}
              title={"jslogo"}
              // alt="jslogo"
              className="h-[80px] w-fit text-yellow-300"
            />
          </div>
          <div className="grid-item flex justify-center items-center">
            <SiReact
              // src={reactlogo}
              title={"reactlogo"}
              // alt="reactlogo"
              className="h-[80px] w-fit text-[#61DBFB]"
            />
          </div>
          <div className="grid-item flex justify-center items-center">
            <SiRedux
              // src={reduxlogo}
              title={"reduxlogo"}
              // alt="reduxlogo"
              className="h-[80px] w-fit text-purple-700"
            />
          </div>

          <div className="grid-item flex justify-center items-center">
            <BsGit className="h-[80px] w-fit text-orange-500" />
          </div>
          <div className="grid-item flex justify-center items-center">
            <BsGithub className="h-[80px] w-fit text-white" />
          </div>
        </div>
        <div className="sketch h-2 bg-gradient-to-r from-sky-500 to-indigo-500 mt-10 -skew-y-2 w-full"></div>
      </div>
    </div>
  )
}

export default MainBanner
