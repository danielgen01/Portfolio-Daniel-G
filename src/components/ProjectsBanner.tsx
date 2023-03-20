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
      <div className="grid-layout grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 mx-10 lg:mx-20">
        <div
          className="project-container bg-gradient-to-r from-indigo-500 to-sky-500
         rounded-3xl h-96 shadow-xl text-white flex flex-col items-center hover:opacity-90"
        >
          <h1 className="text-4xl font-bold uppercase text-center">
            Kanbanboard
          </h1>
          <div className="flex flex-col lg:flex-row justify-start w-full lg:grid-cols-2 lg:h-full">
            <img src={Kanbanscreen} className="h-3/4" alt="" />
            <p>Demo</p>
          </div>
        </div>

        <div
          className="project-container bg-gradient-to-r from-sky-500 to-indigo-500
         rounded-3xl h-96 shadow-xl  text-white flex flex-col items-center hover:opacity-90
        "
        >
          <h1 className="text-4xl font-bold uppercase text-center">
            E-Commerce store
          </h1>
          <div className="flex flex-col lg:flex-row justify-start w-full lg:grid-cols-2 lg:h-full">
            <img src={Ecommercescreen} className="h-3/4" alt="" />
            <p>Demo</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsBanner
