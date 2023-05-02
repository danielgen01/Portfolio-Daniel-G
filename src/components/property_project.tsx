import React from "react"
import propertyscreen from "../assets/images/property_screen.png"
import { BsGithub } from "react-icons/bs"
import { BsArrowUpRight } from "react-icons/bs"
import { FaFigma } from "react-icons/fa"
import { SiTailwindcss, SiReact, SiTypescript, SiRedux } from "react-icons/si"

export function PropertyProject() {
  return (
    <div className="grid-layout grid grid-cols-1 lg:grid-cols-2 mx-10 mt-10 bg-gray-500/10 rounded-md p-5">
      <div className="grid-item-image-container">
        <img src={propertyscreen} alt="property_screenshot" />
      </div>
      <div className="project-description text-white flex flex-col items-center gap-5 justify-between">
        <h1 className="font-semibold text-3xl text-center">
          Property page (static)
        </h1>
        <h2 className="lg:text-2xl text-lg lg:mx-20">
          I built a static landing page of a property website. This project is
          based on a figma design. I styled my app with TailwindCSS and uses
          React to create web components.
        </h2>
        <div className="used-technologies-list flex flex-row gap-10 text-4xl lg:text-6xl">
          <SiReact className="text-[#61DBFB]" />
          <SiTypescript className=" text-[#007acc]" />
          <SiTailwindcss className="text-sky-500" />
        </div>
        <div className="buttons grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-fit">
          <a
            href="https://property-landing-page-bydanielg.netlify.app/"
            target={"_blank"}
            className="bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-2 rounded-md font-medium hover:opacity-75 flex items-center gap-2 w-full justify-center"
          >
            View Livedemo
            <BsArrowUpRight />
          </a>
          <a
            href="https://github.com/danielgen01/nakama_property_page"
            className="bg-gradient-to-r from-indigo-500 to-sky-500 px-2 py-2 rounded-md font-medium hover:opacity-75 flex items-center justify-center gap-2 w-full"
            target={"_blank"}
          >
            <BsGithub className="h-[20px] w-fit text-[#171515]" />
          </a>
          <a
            href="https://www.figma.com/community/file/1145560812177187170/NAKAMA-Property-Website"
            className="bg-gradient-to-r from-indigo-500 to-sky-500 px-2 py-2 rounded-md font-medium hover:opacity-75 flex items-center gap-2 w-full justify-center"
            target={"_blank"}
          >
            Figma Design
            <FaFigma className="h-[20px] w-fit text-[#171515]" />
          </a>
        </div>
      </div>
    </div>
  )
}
