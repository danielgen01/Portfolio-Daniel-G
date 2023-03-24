import React from "react"
import Ecommercescreen from "../assets/images/E-Commerce-Screen.webp"
import { BsGithub } from "react-icons/bs"
import { BsArrowUpRight } from "react-icons/bs"
import { SiTailwindcss, SiReact, SiTypescript, SiRedux } from "react-icons/si"

export function Project2() {
  return (
    <div className="grid-layout grid grid-cols-1 lg:grid-cols-2 mx-10 mt-10 bg-gray-500/10 rounded-md p-5">
      <div className="grid-item-image-container lg:order-2">
        <img src={Ecommercescreen} alt="E-Commerce-Screenshot" />
      </div>
      <div className="project-description text-white flex flex-col items-center gap-5 justify-between">
        <h1 className="font-semibold text-3xl text-center">
          E-Commerce App Multipage
        </h1>
        <h2 className="lg:text-2xl text-lg lg:mx-20">
          I built an E-Commerce store from scratch. I used React with Typescript
          to build components and Redux for state management. I styled my app
          with TailwindCSS.
        </h2>
        <div className="used-technologies-list flex flex-row gap-10 text-5xl">
          <SiReact className="text-[#61DBFB]" />
          <SiTypescript className=" text-[#007acc]" />
          <SiRedux className="text-purple-700" />
          <SiTailwindcss className="text-sky-500" />
        </div>
        <div className="buttons grid grid-cols-1 lg:grid-cols-2 gap-5">
          <a
            href="https://e-commercestore-react-redux.netlify.app/"
            target={"_blank"}
            className="bg-gradient-to-r from-sky-500 to-indigo-500 px-2 py-2 rounded-md font-medium hover:opacity-75 flex items-center gap-2 w-full justify-center"
          >
            View Livedemo
            <BsArrowUpRight />
          </a>
          <a
            href="https://github.com/danielgen01/E-Commerce-with-React-Redux"
            className="bg-gradient-to-r from-indigo-500 to-sky-500 px-2 py-2 rounded-md font-medium hover:opacity-75 flex items-center justify-center gap-2 w-full"
            target={"_blank"}
          >
            <BsGithub className="h-[20px] w-fit text-[#171515] max-w-fit" />
          </a>
        </div>
      </div>
    </div>
  )
}
