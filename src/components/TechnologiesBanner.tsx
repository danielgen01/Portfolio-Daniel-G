import React from "react"
import { BsGit, BsGithub } from "react-icons/bs"
import {
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiRedux,
} from "react-icons/si"

export const TechnologiesBanner:React.FC = ({}) => {
  return (
    <>
      <div className="technologies-banner h-auto w-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="description flex flex-col gap-5  mx-5 items-start justify-center">
          <h1 className="font-bold text-5xl text-center mt-5">
            Tech Stack + technologies
          </h1>
          <h2 className="font-normal text-4xl text-left">
          For developing big applications I'm primarily using React with Redux and TailwindCSS.
          </h2>
        </div>

        {/* logos technologies */}
        <div className="technologies-logos grid grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-full lg:w-auto">
          <div className="grid-item flex justify-center items-center">
            <SiHtml5 
              title={"htmllogo"} 
              className="h-[80px] w-fit text-[#e34c26]"
            />
          </div>
          <div className="grid-item flex justify-center items-center">
            <SiCss3 
              title={"csslogo"} 
              className="h-[80px] w-fit text-[#264de4]"
            />
          </div>
          <div className="grid-item flex justify-center items-center">
            <SiTailwindcss 
              title={"tailwindlogo"} 
              className="h-[80px] w-fit text-sky-500"
            />
          </div>
          <div className="grid-item flex justify-center items-center">
            <SiJavascript 
              title={"jslogo"}
              className="h-[80px] w-fit text-yellow-300"
            />
          </div>
          <div className="grid-item flex justify-center items-center">
            <SiReact
              title={"reactlogo"} 
              className="h-[80px] w-fit text-[#61DBFB]"
            />
          </div>
          <div className="grid-item flex justify-center items-center">
            <SiRedux 
              title={"reduxlogo"} 
              className="h-[80px] w-fit text-purple-700"
            />
          </div>

          <div className="grid-item flex justify-center items-center">
            <BsGit className="h-[80px] w-fit text-[#f34f29]" />
          </div>
          <div className="grid-item flex justify-center items-center">
            <BsGithub className="h-[80px] w-fit text-[#171515]" />
          </div>
        </div>
      </div>

      <div className="sketch h-2 bg-gradient-to-r from-sky-500 to-indigo-500 mt-10 -skew-y-2 w-full"></div>
    </>
  )
}
