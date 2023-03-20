import React from "react"
import htmllogo from "../assets/images/html-logo.png"
import csslogo from "../assets/images/css-logo.png"
import jslogo from "../assets/images/js-logo.png"
import reactlogo from "../assets/images/react-logo.png"
import tailwindlogo from "../assets/images/tailwind-logo.png"
import reduxlogo from "../assets/images/redux-logo.png"
import Bewerbungsbild from "../assets/images/BewerbungsbildCartoon.png"
import {BsGit, BsGithub} from "react-icons/bs"

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
          <img src={Bewerbungsbild} alt="picture_of_me" className="rounded-md "/>
          </div>
          <div className="download-ctn flex justify-center">
          <a href="#" className="underline-offset-1 text-blue-600 underline font-bold ">Download CV</a>
          </div>
        </div>
        
        </div>

        <div className="sketch h-2 bg-gradient-to-r from-sky-500 to-indigo-500 mt-10 -skew-y-2 w-full"></div>

        <div className="description flex flex-col gap-5  mx-5 items-end justify-start">
          <h1 className="font-bold text-5xl text-center mt-5">Dev Stack + technologies</h1>
          {/* logos technologies */}
          <div className="technologies-logos grid grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            <div className="grid-item flex justify-center items-center">
            <img src={htmllogo} alt="" className="h-[80px] w-fit" />
            </div>
              <div className="grid-item flex justify-center items-center">
            <img src={csslogo} alt="" className="h-[80px] w-fit" />
            </div>
            <div className="grid-item flex justify-center items-center">
            <img src={tailwindlogo} alt="" className="h-[80px] w-fit" />
            </div>
            <div className="grid-item flex justify-center items-center">
            <img src={jslogo} alt="" className="h-[80px] w-fit" />
            </div>
            <div className="grid-item flex justify-center items-center">
            <img src={reactlogo} alt="" className="h-[80px] w-fit" />
            </div>
            <div className="grid-item flex justify-center items-center">
            <img src={reduxlogo} alt="" className="h-[80px] w-fit" />
            </div>

            <div className="grid-item flex justify-center items-center">
            <BsGit className="h-[80px] w-fit" />
            </div>
            <div className="grid-item flex justify-center items-center">
            <BsGithub className="h-[80px] w-fit" />
            </div>


          </div>
          <div className="sketch h-2 bg-gradient-to-r from-sky-500 to-indigo-500 mt-10 -skew-y-2 w-full"></div>


        </div>
      </div>
    
  )
}

export default MainBanner
