import TechnologiesBanner from "./TechnologiesBanner"
import React from "react"
import Bewerbungsbild from "../assets/images/BewerbungsbildCartoon.png"
import CV from  "../assets/images/Lebenslauf Daniel Adrian Gendik.pdf"
import { BsGit, BsGithub,BsLinkedin } from "react-icons/bs"



const MainBanner: React.FC = () => {
  return (
    <div className="main-banner text-white selection:bg-sky-300"id="main-banner">
      <div className="grid grid-cols-1 lg:grid-cols-9 justify-between mt-12 lg:items-center lg:mt-0 mx-10">
        <div className="description flex flex-col gap-5  text-center lg:text-left lg:items-start items-center col-span-4">
          <h1 className="font-bold text-2xl lg:text-6xl">Hi, I'm Daniel</h1>
          <h2 className="font-normal text-xl lg:text-4xl">
            My name is Daniel Gendik and I'm a 22 year old (Web) Frontend
            developer  from Germany. Scroll down to check out my projects and social media.
          </h2>
        </div>

        <div className="picture-ctn w-full flex flex-col items-center justify-center col-span-4">
          <div className="image-ctn flex justify-center">
            <img
              src={Bewerbungsbild}
              alt="picture_of_me"
              className="rounded-md"
            />
          </div>
          <div className="download-ctn flex justify-center">
            <a
              href={CV}
              className="underline-offset-1 text-sky-500 underline font-bold  text-lg"
              target="_blank"
            >
              Checkout my CV
            </a>
          </div>
        </div>
        <div className=" h-full flex lg:flex-col justify-center items-end w-full gap-5 mt-5 lg:mt-0 col-span-1">
          <a href="https://github.com/danielgen01" target={"_blank"}><BsGithub className="text-white text-5xl hover:text-[#171515] duration-200"/></a>
          <a href="https://www.linkedin.com/in/daniel-gendik-b7b277254/" target={"_blank"}><BsLinkedin className="text-white text-5xl hover:text-[#0072b1] duration-200"/></a>
          
        </div>
      </div>

      <div className="sketch h-2 bg-gradient-to-r from-sky-500 to-indigo-500 mt-10 -skew-y-2 w-[99%]"></div>

    </div>
  )
}

export default MainBanner
