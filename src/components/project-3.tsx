import React from "react"
import barberscreem from "../assets/images/Barbershop_screen.png"
import { BsGithub } from "react-icons/bs"
import { BsArrowUpRight } from "react-icons/bs"
import { FaFigma } from "react-icons/fa"

export function Project3() {
  return (
    <div className="grid-layout grid grid-cols-1 lg:grid-cols-2 mx-10 mt-10 bg-gray-500/10 rounded-md p-5">
      <div className="grid-item-image-container">
        <img src={barberscreem} alt="barberscreen" />
      </div>
      <div className="project-description text-white flex flex-col items-center gap-5 justify-between">
        <h1 className="font-semibold text-3xl text-center">Barbershop landing page</h1>
        <h2 className="text-2xl text-center lg:mx-20">
          I built a barbershop landing page (non interactive). I created this
          page based on a figma design. I developed this project with
          React,TypeScript and TailwindCSS.
        </h2>
        <div className="buttons flex flex-col lg:flex-row gap-5">
          <a
            href="https://barbershoplandingpagebydaniel.netlify.app/"
            target={"_blank"}
            className="bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-2 rounded-md font-medium hover:opacity-75 flex items-center gap-2"
          >
            View Livedemo
            <BsArrowUpRight />
          </a>
          <a
            href="https://github.com/danielgen01/Barbershop_landing_page"
            className="bg-gradient-to-r from-indigo-500 to-sky-500 px-5 py-2 rounded-md font-medium hover:opacity-75 flex items-center gap-2"
            target={"_blank"}
          >
            Sourcecode
            <BsGithub className="h-[20px] w-fit text-[#171515]" />
          </a>
          <a
            href="https://www.figma.com/community/file/1198056259246028851/Barbershop-Screen-UI"
            className="bg-gradient-to-r from-indigo-500 to-sky-500 px-5 py-2 rounded-md font-medium hover:opacity-75 flex items-center gap-2"
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
