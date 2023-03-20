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

export const TechnologiesBanner = ({}) => {
  return (
    <>
      <div className="technologies-banner h-auto w-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="description flex flex-col gap-5  mx-5 items-end justify-center">
          <h1 className="font-bold text-5xl text-center mt-5">
            Dev Stack + technologies
          </h1>
        </div>
        {/* logos technologies */}
        <div className="technologies-logos grid grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-full lg:w-auto">
          <div className="grid-item flex justify-center items-center">
            <SiHtml5 // src={htmllogo}
              title={"htmllogo"} // alt="htmllogo"
              className="h-[80px] w-fit text-orange-600"
            />
          </div>
          <div className="grid-item flex justify-center items-center">
            <SiCss3 // src={csslogo}
              title={"csslogo"} // alt="csslogo"
              className="h-[80px] w-fit text-blue-600"
            />
          </div>
          <div className="grid-item flex justify-center items-center">
            <SiTailwindcss // src={tailwindlogo}
              title={"tailwindlogo"} // alt="tailwindlogo"
              className="h-[80px] w-fit text-sky-500"
            />
          </div>
          <div className="grid-item flex justify-center items-center">
            <SiJavascript // src={jslogo}
              title={"jslogo"} // alt="jslogo"
              className="h-[80px] w-fit text-yellow-300"
            />
          </div>
          <div className="grid-item flex justify-center items-center">
            <SiReact // src={reactlogo}
              title={"reactlogo"} // alt="reactlogo"
              className="h-[80px] w-fit text-[#61DBFB]"
            />
          </div>
          <div className="grid-item flex justify-center items-center">
            <SiRedux // src={reduxlogo}
              title={"reduxlogo"} // alt="reduxlogo"
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
      </div>

      <div className="sketch h-2 bg-gradient-to-r from-sky-500 to-indigo-500 mt-10 -skew-y-2 w-full"></div>
    </>
  )
}
