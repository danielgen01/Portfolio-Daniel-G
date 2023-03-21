import React from "react"
import Kanbanscreen from "../assets/images/Kanbanscreen.png"
import Ecommercescreen from "../assets/images/E-Commerce Screen.png"

const ProjectsBanner: React.FC = () => {
  return (
    <div
      className="projects-container flex flex-col justify-center h-auto w-screen"
      id="projects-container"
    >
      <div className="projects-headline">
        <h1 className="font-bold text-5xl text-center mt-5 text-white">
          Projects
        </h1>
      </div>

      <div className="grid-layout grid grid-cols-1 lg:grid-cols-2 mx-10 mt-10 bg-gray-500/10 rounded-md p-5">
        <div className="grid-item-image-container">
          <img src={Kanbanscreen} alt="Kanbanscreen"/>
        </div>
        <div className="project-description text-white flex flex-col items-center gap-5 justify-between">
          <h1 className="font-semibold text-3xl">Kanbanboard App</h1>
          <h2 className="text-2xl text-center lg:mx-20">
            I built an Kanbanboard for tracking my workflow and to get an
            overview of my tasks
          </h2>
          <div className="buttons flex gap-5">
            <button className="bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-2 rounded-md font-medium hover:opacity-75">
              View Livedemo
            </button>
            <button className="bg-gradient-to-r from-indigo-500 to-sky-500 px-5 py-2 rounded-md font-medium hover:opacity-75">
              Sourcecode
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsBanner
