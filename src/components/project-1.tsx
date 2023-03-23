import React from "react"
import kanbanscreen from "../assets/images/KanbanScreen.png"
import { BsGithub } from "react-icons/bs"
import { BsArrowUpRight } from "react-icons/bs"

export function Project1() {
  return (
    <div className="grid-layout grid grid-cols-1 lg:grid-cols-2 mx-10 mt-10 bg-gray-500/10 rounded-md p-5">
      <div className="grid-item-image-container">
        <img src={kanbanscreen} alt="Kanbanscreen" />
      </div>
      <div className="project-description text-white flex flex-col items-center gap-5 justify-between">
        <h1 className="font-semibold text-3xl text-center">
          Kanbanboard App
        </h1>
        <h2 className="lg:text-2xl text-lg text-center lg:mx-20">
          I built an Kanbanboard App. A kanbanboard is a useful app to manage company workflow and to get an overview which tasks still need to be done.
        </h2>
        <div className="buttons grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-fit">
          <a
            href="https://kanbandanielg.netlify.app/"
            target={"_blank"}
            className="bg-gradient-to-r from-sky-500 to-indigo-500 px-2 py-2 rounded-md font-medium hover:opacity-75 flex items-center gap-2 w-full justify-center"
          >
            View Livedemo
            <BsArrowUpRight />
          </a>
          <a
            href="https://github.com/danielgen01/KanbanBoardClean"
            className="bg-gradient-to-r from-indigo-500 to-sky-500
           px-2 py-2 rounded-md font-medium hover:opacity-75 flex items-center justify-center gap-2 w-full"
            target={"_blank"}
          >
            <BsGithub className="h-[20px] w-fit text-[#171515]" />
          </a>
        </div>
      </div>
    </div>
  )
}
