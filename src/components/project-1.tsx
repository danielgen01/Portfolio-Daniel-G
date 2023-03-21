import React from "react"
import Kanbanscreen from "../assets/images/Kanbanscreen.png"

export function Project1() {
  return (
    <div
      className="grid-layout grid grid-cols-1 lg:grid-cols-2 mx-10 mt-10 bg-gray-500/10 rounded-md p-5"
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <div className="grid-item-image-container">
        <img src={Kanbanscreen} alt="Kanbanscreen" />
      </div>
      <div className="project-description text-white flex flex-col items-center gap-5 justify-between">
        <h1 className="font-semibold text-3xl">Kanbanboard App</h1>
        <h2 className="text-2xl text-center lg:mx-20">
          I built an Kanbanboard for tracking my workflow and to get an overview
          of my tasks. I used React with TypeScript to create components and
          Redux for state management. My app was styled with TailwindCSS.
        </h2>
        <div className="buttons flex gap-5">
          <button className="bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-2 rounded-md font-medium hover:opacity-75">
            View Livedemo
          </button>
          <a href="https://github.com/danielgen01/KanbanBoardClean" className="bg-gradient-to-r from-indigo-500 to-sky-500 px-5 py-2 rounded-md font-medium hover:opacity-75" target={"_blank"}>
            Sourcecode
          </a>
        </div>
      </div>
    </div>
  )
}
