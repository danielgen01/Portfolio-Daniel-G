import React from "react"
import netflixscreen from "../assets/images/netflixclone_screen.png"
import { BsGithub } from "react-icons/bs"
import { BsArrowUpRight } from "react-icons/bs"

export function Project1() {
  return (
    <div className="grid-layout grid grid-cols-1 lg:grid-cols-2 mx-10 mt-10 bg-gray-500/10 rounded-md p-5">
      <div className="grid-item-image-container">
        <img src={netflixscreen} alt="Kanbanscreen" />
      </div>
      <div className="project-description text-white flex flex-col items-center gap-5 justify-between">
        <h1 className="font-semibold text-3xl">Netflix Clone landing page</h1>
        <h2 className="lg:text-2xl text-lg text-center lg:mx-20">
          I built an clone of the german netflix landing page to prove that I'm
          able to develop prefebrecated designs. I used React to create
          components and Vanilla CSS for the styling. If Chrome throws an error,
          use an other browser. For example Edge or Opera.
        </h2>
        <div className="buttons flex flex-col lg:flex-row gap-5 max-w-fit">
          <a
            href="https://famous-banoffee-91ef29.netlify.app"
            target={"_blank"}
            className="bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-2 rounded-md font-medium hover:opacity-75 flex items-center gap-2 max-w-fit"
          >
            View Livedemo
            <BsArrowUpRight />
          </a>
          <a
            href="https://github.com/danielgen01/Netflix-Landing-page-Copy"
            className="bg-gradient-to-r from-indigo-500 to-sky-500
           px-5 py-2 rounded-md font-medium hover:opacity-75 flex items-center gap-2 max-w-fit"
            target={"_blank"}
          >
            Sourcecode
            <BsGithub className="h-[20px] w-fit text-[#171515]" />
          </a>
        </div>
      </div>
    </div>
  )
}
