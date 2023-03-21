import { Project1 } from "./project-1"
import { Project2 } from "./project-2"
import React from "react"

const ProjectsBanner: React.FC = () => {
  return (
    <>
      <div
        className="projects-container flex flex-col justify-center h-auto w-screen gap-10"
        id="projects-container"
      >
        <div className="projects-headline">
          <h1 className="font-bold text-5xl text-center mt-5 text-white">
            Projects
          </h1>
        </div>

        <Project1 />
        <Project2 />
      </div>

      <div className="sketch h-2 bg-gradient-to-r from-sky-500 to-indigo-500 mt-10 -skew-y-2 w-[99%]"></div>
    </>
  )
}

export default ProjectsBanner
